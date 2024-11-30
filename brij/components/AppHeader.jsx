"use client"
import { useEffect, useState } from "react";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import {useRouter} from "next/navigation";
import { FiAlignCenter, FaBell, FaUser } from "../utils/icons";
import Image from "next/image";


function AppHeader({ setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const currentAccount = useCurrentAccount();
  const router = useRouter();

  useEffect(() => {
    if (!currentAccount) {
      setLoading(true);
      router.push("/");
    }
  }, [currentAccount, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }



  return (
    <div className="flex justify-center items-center p-4 shadow-md">
      <div className="small-box hidden max-md:block">
        <FiAlignCenter size={30} onClick={() => setIsOpen(true)} />
      </div>

      <div className="ml-auto flex justify-center items-center">
        <div className="small-box mx-2">
          <Image
            height={32}
            width={32}
            src="https://res.cloudinary.com/dwedz2laa/image/upload/v1732401116/suiden_lryl7x.jpg"
            alt="Sui"
            className="rounded-full"
          />
        </div>
        <div className="mx-4"><ConnectButton/></div>
        <div className="small-box mx-2">
          <FaBell size={20} />
        </div>
        <div className="small-box mx-2">
          <FaUser size={20} />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
