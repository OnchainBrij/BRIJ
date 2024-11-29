"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import KnowBridge from "../components/knowbridge/KnowBridge";
import Support from "../components/support/Support";
import Offer from "../components/offer/Offer";
import NewsArticle from "../components/news/NewsArticle";
import ContactForm from "../components/contact/ContactForm";
import { image } from "../public/assets/assets";
import Projects from "../components/projects/Projects";
import { FaChevronUp } from "../utils/icons";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import TestimonialsMarquee from "../components/testimonialsMarquee/TestimonialsMarquee";
import FrequentQuestions from "../components/faq/FrequentQuestions";
import Image from "next/image";

const Homepage = () => {
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
    <div style={{ backgroundColor: "#010101", position: "relative" }}>
      <Navbar />
      <div className="component-wrapper">
        <Hero />
        <KnowBridge />
        <Projects />
      </div>
      <Support />
      <Offer />
      <TestimonialsMarquee />
      <NewsArticle />
      <ContactForm />
      <FrequentQuestions />
      <JoinUs />
      <Footer />

      <Image src={image.page_bg} alt="" className="page-bg 2xl:bottom-[40%]" />

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

export default Homepage;
