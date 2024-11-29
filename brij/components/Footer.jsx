import {
  FiPhoneCall,
  IoMailOpenOutline,
  SlLocationPin,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "../utils/icons";
import footerImage from "../public/assets/footer.webp";

function Footer() {
  return (
    <footer
      className={`footer bg-cover bg-no-repeat bg-fixed mt-0 text-white flex flex-col p-16 [&_p]:text-[#8D91A2] max-md:p-4 max-md:pt-10`}
      
    >
      <div className="flex justify-between space-x-6 max-md:space-y-3 max-md:flex-col max-md:space-x-0">
        <div className="flex flex-col space-y-5 w-[40%] max-md:w-full">
          <h2 className="font-bold text-[1.5rem]">Brij</h2>
          <div>
            <p className="text-[0.8rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              accusantium soluta! Distinctio id at nemo quas nostrum iusto
              ratione, exercitationem possimus, tempora corrupti facere a
              dolorem rem in veritatis obcaecati!
            </p>
          </div>
          <div className="flex items-center space-x-3 [&_a]:bg-white [&_a]:p-4 [&_a]:cursor-pointer">
            <a
              href="https://x.com/SuidenUNN"
              target="_blank"
              rel="noopener noreferrer" 
            >
              <FaXTwitter className="text-black  " />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61565976196436&mibextid=ZbWKwL&_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/company/grasoorg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-black" />
            </a>
            <a
              href="https://www.instagram.com/grasoorg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-black" />
            </a>
          </div>
        </div>

        <div className="flex flex-col w-[20%] space-y-6 max-md:w-full">
          <h2 className="font-bold">Company</h2>
          <div className="space-y-3 [&_p]:cursor-pointer text-[0.8rem]">
            <p className="hover:text-[#29f0b4] transition-all">About us</p>
            <p className="hover:text-[#29f0b4] transition-all">Latest events</p>
            <p className="hover:text-[#29f0b4] transition-all">How It Works</p>
            <p className="hover:text-[#29f0b4] transition-all">News & articles</p>
            <p className="hover:text-[#29f0b4] transition-all">Contact us</p>
          </div>
        </div>
        <div className="flex flex-col w-[20%] space-y-6 max-md:w-full">
          <h2 className="font-bold">Fundraising</h2>
          <div className="space-y-3 [&_p]:cursor-pointer text-[0.8rem]" >
            <p className="hover:text-[#29f0b4] transition-all">Education</p>
            <p className="hover:text-[#29f0b4] transition-all">Design</p>
            <p className="hover:text-[#29f0b4] transition-all">Film & Video</p>
            <p className="hover:text-[#29f0b4] transition-all">Technology</p>
            <p className="hover:text-[#29f0b4] transition-all">Games</p>
          </div>
        </div>
        <div className="flex flex-col w-[20%] space-y-6 max-md:w-full">
          <h2 className="font-bold">Contact</h2>
          <div className="space-y-3 [&_p]:cursor-pointer text-[0.8rem]">
            <p className="flex items-center space-x-1 hover:text-[#29f0b4] transition-all ">
              <FiPhoneCall />
              <span>666 888 0000</span>
            </p>
            <p className="flex items-center space-x-3 hover:text-[#29f0b4] transition-all">
              <IoMailOpenOutline />
              <span>thesuiden@gmail.com</span>
            </p>
            <p className="flex items-center space-x-3 hover:text-[#29f0b4] transition-all" >
              <SlLocationPin />
              <span>Nigeria</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full h-[0.05rem]  bg-[#323643] mx-auto my-5"></div>
      <div className="flex justify-center items-center">
        <p className="text-[#323643] text-[0.7rem]">
          Copyright &copy; {new Date().getFullYear()} BRIJ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
