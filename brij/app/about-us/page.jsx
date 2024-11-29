"use client";
import { useState, useEffect } from "react";
import React from "react";
import AbouUsbanner from "../../components/aboutusbanner/AbouUsbanner";
import AboutUsNote from "../../components/aboutusnote/AboutUsNote";
import TestimonialSlider from "../../components/AboutUsTestimonials";
import Offers from "../../components/Offers";
import TeamCard from "../../components/TeamCard";
import TeamMarquee from "../../components/TeamMarquee";
import Footer from "../../components/Footer";
import { FaChevronUp } from "../../utils/icons";
import Navbar from "../../components/Navbar";

const Page = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="about-us-page"
      style={{
        width: "100%",
        backgroundColor: "#1B1F2E",
        height: "100%",
        margin: "0",
        fontFamily: "poppins, san-serif",
      }}
    >
      <Navbar />
      <AbouUsbanner />
      <AboutUsNote />
      <TeamCard className="max-md:hidden" />
      <TeamMarquee className="max-md:flex" />
      <TestimonialSlider />
      <Offers />
      <Footer />

      <button
        className="scroll-top-btn"
        id="scrollTopBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          visibility: showScrollButton ? "visible" : "hidden",
          opacity: showScrollButton ? 1 : 0,
        }}
      >
        <FaChevronUp />
      </button>
    </div>
  );
};

export default Page;
