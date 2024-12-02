import { getFullnodeUrl } from "@mysten/sui/client";
import contractAddresses from "./smart-contract/packageid.json";
import { createNetworkConfig } from "@mysten/dapp-kit";

const PACKAGE_ID = contractAddresses.PACKAGE_ID;
const PROJECT_MANAGER_ID = contractAddresses.PROJECT_MANAGER_ID;

const {networkConfig, useNetworkVariable, useNetworkVariables} = createNetworkConfig({
    devnet: {
        url: getFullnodeUrl("devnet"),
        variables: {
          packageId: "0xpackage",
          managerId: "0xmanager",

        },
    },
    testnet: {
        url: getFullnodeUrl("testnet"),
        variables: {
          packageId: PACKAGE_ID,
        managerId: PROJECT_MANAGER_ID,
      },
          
    
    },
    mainnet: {
        url: getFullnodeUrl("mainnet"),
        variables: {
          packageId: "0xpackage",
          managerId: "0xmanager",

        },

    },
})

export { useNetworkVariable, useNetworkVariables, networkConfig };