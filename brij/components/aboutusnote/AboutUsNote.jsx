import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { image } from "../../public/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "./noteStyle.css";

const AboutUsNote = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="note text-white">
      <span data-aos="fade-up">
        <Image src={image.sun} alt="" />
      </span>
      <span data-aos="fade-up" data-aos-delay="100">We</span>
      <span data-aos="fade-up" data-aos-delay="200">support</span>
      <span data-aos="fade-up" data-aos-delay="300">hundreds</span>
      <span data-aos="fade-up" data-aos-delay="400">of</span>
      <span data-aos="fade-up" data-aos-delay="500">projects</span>
      <span data-aos="fade-up" data-aos-delay="600">through</span>
      <span data-aos="fade-up" data-aos-delay="700">funding,</span>
      <span data-aos="fade-up" data-aos-delay="800">connections</span>
      <span data-aos="fade-up" data-aos-delay="900">
        <Image src={image.infinity} alt="" />
      </span>
      <span data-aos="fade-up" data-aos-delay="1000">and</span>
      <span data-aos="fade-up" data-aos-delay="1100">catalysts</span>
      <span data-aos="fade-up" data-aos-delay="1200">to</span>
      <span data-aos="fade-up" data-aos-delay="1300">foster</span>
      <span data-aos="fade-up" data-aos-delay="1400">your</span>
      <span data-aos="fade-up" data-aos-delay="1500">project</span>
      <span data-aos="fade-up" data-aos-delay="1600">
        <FaArrowRight className="icon" />
      </span>
      <span data-aos="fade-up" data-aos-delay="1700">into</span>
      <span data-aos="fade-up" data-aos-delay="1800">a</span>
      <span data-aos="fade-up" data-aos-delay="1900">thriving</span>
      <span data-aos="fade-up" data-aos-delay="2000">venture</span>
      <span data-aos="fade-up" data-aos-delay="2100">to</span>
      <span data-aos="fade-up" data-aos-delay="2200">get</span>
      <span data-aos="fade-up" data-aos-delay="2300">you</span>
      <span data-aos="fade-up" data-aos-delay="2400">where</span>
      <span data-aos="fade-up" data-aos-delay="2500">you</span>
      <span data-aos="fade-up" data-aos-delay="2600">need.</span>
    </div>
  );
};

export default AboutUsNote;
