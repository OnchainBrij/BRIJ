import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";


function JoinUs() {
  return (
    <div className="flex justify-center items-center w-full mt-[10%] join-us">
      <div className="bg-white w-[70%] py-16 px-7 mt-4 flex justify-evenly items-center space-x-9 max-md:flex-col max-xl:w-[80%] max-md:space-x-0 max-md:space-y-5">
        <p className="text-[1.9rem] text-[#1B1F2E] font-bold max-md:text-center">
          Ready to Raise Funds for Idea?
        </p>
        
        <ConnectButton style={{backgroundColor: "#1b1f2e", textTransform: "uppercase", borderRadius: "50px", color: "#fff", fontSize: "1.03rem", textAlign: "center", padding: "2rem 3rem"  }} connectText="Make it Happen" />
      </div>
    </div>
  );
}

export default JoinUs;
