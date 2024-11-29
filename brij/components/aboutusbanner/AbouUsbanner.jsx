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
          <h1>Learn About our Company</h1>
          <p>
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humour or
            randomised words.
          </p>
        </div>

        <div className="tag" data-aos="fade-up" data-aos-delay="200">
          <div className="checkbox">
            <FaCheckCircle />
          </div>
          <span>
            <h3>Highest Success Rates</h3>
            <p>
              Lorem Ipsum velit auctor aliquet. Aenean sollicitudin, lorem is
              simply free text quis bibendum.
            </p>
          </span>
        </div>

        <div className="tag" data-aos="fade-up" data-aos-delay="400">
          <div className="checkbox second-checkbox">
            <FaCheckCircle />
          </div>
          <span>
            <h3>Millions in Funding</h3>
            <p>
              Lorem Ipsum velit auctor aliquet. Aenean sollicitudin, lorem is
              simply free text quis bibendum.
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
