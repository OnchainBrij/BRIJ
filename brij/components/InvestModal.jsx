import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import { getProjectInfo, contributeToCampaign, withdrawFunds } from "../app/utils";
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';


function InvestModal({ projectItem, setIsModalOpen }) {
  const currentAccount = useCurrentAccount();
  const router = useRouter();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const [_digest, setDigest] = useState('');
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contributionAmount, setContributionAmount] = useState('');
  const [isContributing, setIsContributing] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);


  const handleContribute = async (e) => {
    e.preventDefault();
    if (!contributionAmount) return;

    setIsContributing(true);

 
        // Convert contributionAmount to a BigInt
        const amountInMicroSUI = BigInt(Number(contributionAmount) * 1e9); 

        const txn = await contributeToCampaign(projectItem.id , Number(amountInMicroSUI));
        signAndExecuteTransaction({
          transaction: txn,
          chain: 'sui:devnet'
        }, {
          onSuccess: async (result) => {
             const updatedCampaign = await getProjectInfo(projectItem.id);
             setCampaign(updatedCampaign);
             setContributionAmount('');
             setDigest(result.digest);
             setIsContributing(false);
             router.push('/explore-projects')
             
          },
          onError: (error) => {
            console.error('Error contributing:', error);
          }
        })

      

};


  const handleWithdraw = async () => {
    setIsWithdrawing(true);

    
     const txn = await withdrawFunds(projectItem.id);
     signAndExecuteTransaction({
      transaction: txn,
      chain: 'sui:devnet'
     }, {
       onSuccess: async (result) => {
          const updatedCampaign = await getProjectInfo(projectItem.id);
          setCampaign(updatedCampaign);
          setIsWithdrawing(false);
          setDigest(result.digest);
          router.push('/explore-projects')
       },
       onError: (error) => {
         console.error('Error withdrawing:', error);
       }
     })
   

  };

  function calculateDaysLeft(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date(timestamp * 1000);
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  }
  const isOwner = currentAccount.address === projectItem.creator;
  const canWithdraw = isOwner && Number(projectItem.currentAmount) >= 0;

  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 w-full z-50"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-[#33353D] w-1/2 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-x-6">
          <Image
            src={`https://gateway.pinata.cloud/ipfs/${projectItem?.image}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`}
            alt={projectItem?.name}
            width={150}
            height={150}
          />
          <div>
            <div className="space-y-2">
              <p className="bg-white text-black p-3 w-fit text-sm tracking-[0.2rem]">
                {projectItem?.category}
              </p>
              <p className="font-extrabold text-xl">{projectItem?.name}</p>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <Image
                src="/assets/profile-img.png"
                alt="A small profile picture"
                width={50}
                height={50}
              />
              <div className="[&_p]:text-gray-500 [&_p]:text-sm">
                <p>
                  Created by
                  <span className="text-white font-bold"> {projectItem?.creator}</span>
                </p>
                <p>9 Campaigns | 0 Loved campaigns</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[80%] flex flex-col mt-3 ">
            <div className="flex justify-between items-center">
              <p>Raised: <span className="text-[#29F0B4]">{projectItem?.currentAmount} SUI  </span></p>
              <p>
                {((projectItem?.currentAmount / projectItem?.targetAmount) * 100).toFixed(1)}
              </p>
            </div>
            <progress
              max="100"
              value={(projectItem?.currentAmount / projectItem?.targetAmount) * 100}
              className="progress-bar"
            />
          </div>

          <div className="flex justify-between items-center">
            <p>
              Goal: <span className="text-[#29F0B4]">{projectItem?.targetAmount} SUI</span>
            </p>
            {/* <p>
              <span>Pledged</span>
              <span> 40 SUI</span>
            </p> */}
          </div>

          <div className="flex items-center gap-x-8">
            <div className="flex space-x-2 [&_p]:bg-white [&_p]:text-black [&_p]:p-3 [&_p]:text-sm mt-3">
           
              {!canWithdraw && (<input
                  type="number"
                  min="0"
                  step="0.01"
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(e.target.value)}
                  placeholder="Amount in SUI"
                  className="flex-1 p-2 text-black border rounded-lg"
              />)}
            </div>

            <div className="flex items-center space-x-2 mt-3">
            {!canWithdraw &&  <p>SUI</p>}
              <div className="flex">
  
             {canWithdraw ? ( <button type="button" className="bg-gradient-to-r from-[#36bb91] to-[#4b47ff] p-3" onClick={handleWithdraw}
                  disabled={isWithdrawing || !contributionAmount}>
                  Withdraw
                </button>) : ( <button type="button" className="bg-gradient-to-r from-[#36bb91] to-[#4b47ff] p-3" onClick={handleContribute}
                  disabled={isContributing || !contributionAmount}>
                  Invest
                </button>)}
              </div>
            </div>
{calculateDaysLeft(projectItem?.deadline) > 0 ?
(            <p>
              {calculateDaysLeft(projectItem?.deadline)} <span>Days Left</span>
            </p>) : (<p>Expired</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestModal;
