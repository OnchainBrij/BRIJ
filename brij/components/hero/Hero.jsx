import "./heroStyle.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="hero">
      <div className="text">
        <div
          className="p-wrapper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>Where dreams find backers</p>
        </div>

        <h1 data-aos="fade-up" data-aos-delay="400">
          Drive the next wave of funding,
          <span data-aos="fade-up" data-aos-delay="600">
            whether you are backing or building.
          </span>
        </h1>

        
        <ConnectButton className="ConnectButton" data-aos="zoom-in" data-aos-delay="800" connectText="Get Started" />
      </div>

      <div
        className="big-circle"
        data-aos="fade-in"
        data-aos-delay="1000"
      ></div>
      <div
        className="medium-circle"
        data-aos="fade-in"
        data-aos-delay="1200"
      ></div>
      <div
        className="small-circle"
        data-aos="fade-in"
        data-aos-delay="1400"
      ></div>
    </div>
  );
};

export default Hero;
