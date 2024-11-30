import { bcs, fromHex, toHex } from "@mysten/bcs";
import { Transaction } from "@mysten/sui/transactions";
import contractAddresses from "./packageid.json";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import { TextEncoderStream } from "node:stream/web";

const { PACKAGE_ID, PROJECT_MANAGER_ID, TREASURY_CAP } = contractAddresses;


// Client-side transactions (for wallet signing)

export const clientTransactions = {
    createProject: (
        name: string,
        description: string,
        image: string,
        category: string,
        targetAmount: number,
        deadline: number
    ) => {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_ID}::brij::create_project`,
            arguments: [
                transaction.object(PROJECT_MANAGER_ID),
                transaction.pure.string(name),
                transaction.pure.string(description),
                transaction.pure.string(image),
                transaction.pure.string(category),
                transaction.pure.u64(targetAmount),
                transaction.pure.u64(deadline)
            ],
        });
        return transaction;
    },

    contribute: (projectInfo: string, amount: number) => {
        const transaction = new Transaction();
        const [coin] = transaction.splitCoins(transaction.gas, [transaction.pure.u64(amount)]);
        transaction.moveCall({
            target: `${PACKAGE_ID}::brij::contribute`,
            arguments: [
                transaction.object(projectInfo),
                coin,
                transaction.object("0x6"),
                transaction.object(TREASURY_CAP)
            ],
        });
        // transaction.setGasBudget(100000000);
        return transaction;
    },

    withdraw: (projectId: string) => {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_ID}::brij::withdraw`,
            arguments: [
                transaction.object(projectId),
                transaction.object("0x6")
            ],
        })
    },

    finalizeProjectCampaign: (projectId: string) => {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_ID}::brij::finalize_project_campaign`,
            arguments: [
                transaction.object(projectId),
                transaction.object("0x6")
            ],
        })
    }

}

// Class for operations requiring private key or devInspectTransactionBlock
export class BrijProjectsQueries {
    private keypair: Ed25519Keypair;
    private client: SuiClient;
    private Address;

    constructor() {
        const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
        if (!privateKey) {
            throw new Error("Please set your private key in a .env file");
        }
        
        this.keypair = Ed25519Keypair.fromSecretKey(decodeSuiPrivateKey(privateKey).secretKey);
        this.client = new SuiClient({ url: getFullnodeUrl("devnet") });
        this.Address = bcs.bytes(32).transform({
            input: (val: string) => fromHex(val),
            output: (val) => toHex(val),
        });
    }

    private async devInspectTransactionBlock(transaction: Transaction) {
        try {
            const result = await this.client.devInspectTransactionBlock({
                transactionBlock: transaction,
                sender: this.keypair.getPublicKey().toSuiAddress(),
            });
            return result.results ? result.results.map(result => result.returnValues) : null;
        } catch (error) {
            console.error("Error executing transaction:", error);
            return null;
        }
    }

    private async signAndExecuteTransaction(transaction: Transaction) {
        try {
            const result = await this.client.signAndExecuteTransaction({
                signer: this.keypair,
                transaction,
                options: {
                    showBalanceChanges: true,
                    showEvents: true,
                    showInput: false,
                    showEffects: true,
                    showObjectChanges: true,
                    showRawInput: false,
                }
            });
            return !!result.objectChanges;
        } catch (error) {
            console.error("Error executing transaction:", error);
            return false;
        }
    }

    async getProjectInfo(projectId: string) {
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::brij::get_project_info`,
            arguments: [txn.object(projectId    )],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);

        if (returnValues && returnValues[0]) {
            return {
                name: bcs.string().parse(Uint8Array.from(returnValues[0][0][0])),
                description: bcs.string().parse(Uint8Array.from(returnValues[0][1][0])),
                image: bcs.string().parse(Uint8Array.from(returnValues[0][2][0])),
                category: bcs.string().parse(Uint8Array.from(returnValues[0][3][0])),
                creator: `0x${this.Address.parse(Uint8Array.from(returnValues[0][4][0]))}`,
                targetAmount: bcs.u64().parse(Uint8Array.from(returnValues[0][5][0])),
                currentAmount: bcs.u64().parse(Uint8Array.from(returnValues[0][6][0])),
                deadline: bcs.u64().parse(Uint8Array.from(returnValues[0][7][0])),
                isActive: bcs.bool().parse(Uint8Array.from(returnValues[0][8][0])),
                isSuccessful: bcs.bool().parse(Uint8Array.from(returnValues[0][9][0])),
                isBookmarked: false,
            };
        }
        return null;
    }

    async getContributors(projectId: string) {
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::brij::get_contributors`,
            arguments: [txn.object(projectId)],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);
        
        if (returnValues && returnValues[0]) {
            const Contributor = bcs.struct('Contributor', {
                address: this.Address,
                amount: bcs.u64(),
                timestamp: bcs.u64()
            });
            let contributors = bcs.vector(Contributor).parse(Uint8Array.from(returnValues[0][0][0]));
            return contributors.map(contributorObj => ({
                ...contributorObj,
                address: `0x${contributorObj.address}`
            }));
        }
        return null;
    }

    async getAllProjects(){
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::brij::get_all_project`,
            arguments: [txn.object(PROJECT_MANAGER_ID)],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);

        if (returnValues && returnValues[0]) {
            const projectAddresses = bcs.vector(this.Address).parse(Uint8Array.from(returnValues[0][0][0]));
            const projects: any[] = [];
            for (const address of projectAddresses) {
                const projectInfo = await this.getProjectInfo(`0x${address}`);
                if (projectInfo) {
                    projects.push({
                        id: `0x${address}`,
                        ...projectInfo
                    });
                }
            }
            return projects;
        }
        return [];
    }

    async isContributor(projectId: string, address: string) {
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::brij::is_contributor`,
            arguments: [txn.object(projectId), txn.pure.address(address)],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);

        return returnValues && returnValues[0] 
        ? bcs.bool().parse(Uint8Array.from(returnValues[0][0][0])) 
        : false;

    }

    async checkIfProjectCampaignEnded(projectId: string){
        const projectInfo = await this.getProjectInfo(projectId);

        if(projectInfo && Number(projectInfo.deadline) * 1000 < Date.now() && projectInfo.isActive) {
            const txn = new Transaction();
            txn.moveCall({
                target: `${PACKAGE_ID}::crowdfunding::finalize_crowdfund`,
                arguments: [
                    txn.object(projectId),
                    txn.object("0x6")
                ],
            });
            return this.signAndExecuteTransaction(txn);
        }
        return false;
        }
    
}