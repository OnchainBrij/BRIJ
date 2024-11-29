import { useState, useEffect } from "react";
import Image from "next/image";
import Offer from "./offer/Offer";

function Offers() {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();


    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return <Offer />;
  }

  return (
    <div className="min-h-screen text-white w-full flex flex-col space-y-3 relative pr-[3rem] pl-[3rem] pt-[5rem] overflow-hidden">
      <h1 className="font-extrabold text-[2rem] flex items-center mt-[4rem] mb-[3rem] w-1/2 2xl:w-full">
        What we are offering to creative people
      </h1>
      <div className="flex max-xl:pb-5 ">
        <div className="absolute bottom-2 2xl:bottom-[15rem] space-y-4">
          <Image
            src="/assets/creator-dashboard.png"
            alt="creator-dashboard"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-extrabold w-1/2 2xl:w-full">
            The creator dashboard
          </h2>
          <p className="w-1/2 2xl:w-full">
            There are many new variations of passages of available text
          </p>
        </div>
        <div className="absolute left-[20rem] bottom-[8rem] 2xl:bottom-[25rem] 2xl:left-[30rem] space-y-4">
          <Image
            src="/assets/backer-report.png"
            alt="backer-report"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-extrabold w-1/2 2xl:w-full">
            The backer-report
          </h2>
          <p className="w-1/2 2xl:w-full">
            There are many new variations of passages of available text
          </p>
        </div>
        <div className="absolute right-[8rem] top-[12rem] 2xl:top-[25rem] 2xl:right-[25rem] space-y-4">
          <Image
            src="/assets/stretch-goals.png"
            alt="stretch-goals"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-extrabold w-1/2 2xl:w-full">
            Stretch goals project
          </h2>
          <p className="w-1/2 2xl:w-full">
            There are many new variations of passages of available text
          </p>
        </div>
        <div className="absolute -right-[10rem] top-[5rem] 2xl:top-[15rem] 2xl:right-[4rem] flex flex-col space-y-4">
          <Image
            src="/assets/google-analytics.png"
            alt="google-analytics"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-extrabold w-1/2 2xl:w-full">
            Google Analytics
          </h2>
          <p className="w-1/2 2xl:w-full">
            There are many new variations of passages of available text
          </p>
        </div>
      </div>
      <Image
        src="/assets/offers-page-bg.webp"
        alt="flower design"
        width={400}
        height={400}
        className="absolute right-0 bottom-0 -z-10 2xl:w-[500px] 2xl:h-[500px]"
      />
      <div className="aboutusAbstract"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1732477792/image_1_ude0jz.png"   /></div>
    </div>
  );
}

export default Offers;
