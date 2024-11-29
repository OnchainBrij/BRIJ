import React from "react";
import Marquee from "react-fast-marquee";
import { teamData } from "./TeamCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TeamMarquee = ({ className }) => {
  return (
    <div className={`hidden  flex-col ${className}`}>
      <h2 className="text-[2.1rem] font-bold ml-4 mt-12 mb-5  text-white">
        Our Team
      </h2>
      <div className="TeamMarquee">
        <Marquee direction="right" pauseOnHover={true} speed={50}>
          {teamData.map((item, index) => (
            <div key={index} style={{ position: "relative", margin: "0 10px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "200px", height: "200px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
              >
                <h1
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "0 0 5px 0",
                  }}
                >
                  {item.name}
                </h1>
                <p style={{ fontSize: "0.875rem", margin: "0 0 10px 0" }}>
                  {item.role}
                </p>
                <span style={{ display: "flex", gap: "0.5rem" }}>
                  <a href="#" style={{ color: "white" }}>
                    <FaGithub />
                  </a>
                  <a href="#" style={{ color: "white" }}>
                    <FaLinkedin />
                  </a>
                  <a href="#" style={{ color: "white" }}>
                    <FaXTwitter />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TeamMarquee;
