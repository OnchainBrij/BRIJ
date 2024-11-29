import { useEffect } from "react";
import "./supportStyle.css";
import { image } from "../../public/assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaSun } from "react-icons/fa";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Support = () => {
  useEffect(() => {
    gsap.fromTo(
      ".support span",
      { color: "#2d313e" },
      {
        color: "#ffffff",
        textShadow: "0 0 3px #000",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".support",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
          duration: 500,
        },
      }
    );
  }, []);

  return (
    <div className="support">
      <span>
        <Image src= {image.sun} alt="" />
      
      </span>
      <span>We</span>
      <span>support</span>
      <span>hundreds</span>
      <span>of</span>
      <span>projects</span>
      <span>through</span>
      <span>funding,</span>
      <span>connections</span>
      <span>
        <Image src={image.infinity} alt="" />
      </span>
      <span>and</span>
      <span>catalysts</span>
      <span>to</span>
      <span>foster</span>
      <span>your</span>
      <span>project</span>
      <>
        <FaArrowRight className="icon" />{" "}

      </>
      <span>into</span>
      <span>a</span>
      <span>thriving</span>
      <span>venture</span>
      <span>to</span>
      <span>get</span>
      <span>you</span>
      <span>where</span>
      <span>you</span>
      <span>need.</span>
    </div>
  );
};

export default Support;
