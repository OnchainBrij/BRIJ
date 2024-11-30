import { useState, useEffect } from "react";
import "./knowBridge.css";
import { image } from "../../public/assets/assets";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const KnowBridge = () => {
  const [activeSection, setActiveSection] = useState("Vision");

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "Vision":
        return (
          <div data-aos="fade-left">
            <p className="desc">
              To bridge creators and investors, enabling innovation and shared success through collaborative funding.
            </p>
            <div className="stats">
              <Image src={image.right_stats} alt="Statistics" />
              <ul>
                <li>
                  <FaCheck className="icon" /> Empower innovation
                </li>
                <li>
                  <FaCheck className="icon" /> Foster collaboration
                </li>
                <li>
                  <FaCheck className="icon" /> Drive impact
                </li>
              </ul>
            </div>
            <a href="/about-us" className="learn-more-link">
              Learn more about us
            </a>
          </div>
        );
      case "Mission":
        return (
          <div data-aos="fade-left">
            <p className="desc">
              There are many variations of passages of available but the majority have been altered in some form, injected with humor or words that don’t seem to fit.
            </p>
            <div className="stats">
              <Image src={image.right_stats} alt="Statistics" />
              <ul>
                <li>
                  <FaCheck className="icon" /> Mission item 1
                </li>
                <li>
                  <FaCheck className="icon" /> Mission item 2
                </li>
                <li>
                  <FaCheck className="icon" /> Mission item 3
                </li>
              </ul>
            </div>
          </div>
        );
      case "History":
        return (
          <div data-aos="fade-left">
            <p className="desc">
              The history of innovation is full of iterations and creativity, showcasing the resilience of creators across generations.
            </p>
            <div className="stats">
              <Image src={image.right_stats} alt="Statistics" />
              <ul>
                <li>
                  <FaCheck className="icon" /> History item 1
                </li>
                <li>
                  <FaCheck className="icon" /> History item 2
                </li>
                <li>
                  <FaCheck className="icon" /> History item 3
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="know-bridge-container" data-aos="fade-up">
      <div className="know-bridge-flexbox">
        {/* Left Side */}
        <div className="left" data-aos="fade-right">
          <h3>
            <span className="tiny-box"></span>Explore BRIj
          </h3>
          <h1>Fund the Next Big Thing</h1>
          <p>
            There are many variations of passages available, but the majority have suffered alteration in some form.
          </p>
          <div className="percent-container">
            <div className="figures">
              <span>Technology </span> <span>68%</span>
            </div>
            <div className="metre">
              <span className="inner-span"></span>
            </div>
          </div>
          <div className="percent-container">
            <div className="figures">
              <span>Business </span> <span>90%</span>
            </div>
            <div className="metre">
              <span className="business-span"></span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right" data-aos="fade-left">
          <div className="head" data-aos="fade-down">
            <button
              className={activeSection === "Vision" ? "active" : ""}
              onClick={() => setActiveSection("Vision")}
            >
              Our Vision
            </button>
            <button
              className={activeSection === "Mission" ? "active" : ""}
              onClick={() => setActiveSection("Mission")}
            >
              Our Mission
            </button>
            <button
              className={activeSection === "History" ? "active" : ""}
              onClick={() => setActiveSection("History")}
            >
              Our History
            </button>
          </div>
          <div className="infor">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default KnowBridge;
