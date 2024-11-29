import { FiAlignCenter, FaBell, FaUser } from "../utils/icons";
import Image from "next/image";

function AppHeader({ setIsOpen }) {
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
        <div className="mx-4">Connect Wallet</div>
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
