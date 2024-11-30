import React, { useEffect } from "react";
import "./aboutUsBanner.css";
import Image from "next/image";
import { image } from "../../public/assets/assets";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AbouUsbanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="about-us-banner overflow-hidden">
      <div className="left-box">
        <div data-aos="fade-up">
          <h1>Explore What Drives Us</h1>
          <p>
            At BRIJ, we bridge the gap between ambitious innovators and passionate investors. Together, we make ideas a reality. 
          </p>
        </div>

        <div className="tag" data-aos="fade-up" data-aos-delay="200">
          <div className="checkbox">
            <FaCheckCircle />
          </div>
          <span>
            <h3> Our Vision</h3>
            <p>A world where anyone anywhere  can fund or be funded to achieve their dreams.
            </p>
          </span>
        </div>

        <div className="tag" data-aos="fade-up" data-aos-delay="400">
          <div className="checkbox second-checkbox">
            <FaCheckCircle />
          </div>
          <span>
            <h3>Our Mission</h3>
            <p>To democratize funding by creating a transparent, inclusive and seamless platform for both creators and backers. 
            </p>
          </span>
        </div>
      </div>

      <div className="right-box" data-aos="fade-left" data-aos-delay="600">
        <Image src={image.AboutUsBannerImg} alt="" />

        <div className="side-card" data-aos="zoom-in" data-aos-delay="800">
          <h1>8,000</h1>
          <p>Satisfied</p>
          <p>Customers</p>
        </div>
      </div>

      <div className="blur"></div>
    </div>
  );
};

export default AbouUsbanner;
