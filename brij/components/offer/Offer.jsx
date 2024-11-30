import React, { useEffect } from "react";
import "./offerStyle.css";
import { offers } from "../../public/assets/assets.js";
import "aos/dist/aos.css";
import AOS from "aos";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";

const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="offer-container">
      {/* Introductory Card */}
      <div className="card" style={{ maxWidth: "280px" }} data-aos="flip-left">
        <h1>What we are offering to creative people.</h1>
      </div>

      {/* Offer Cards */}
      {offers.map((item, index) => (
        <div className="card-wrapper" key={index} data-aos="flip-left">
          <div className="card">
            <div className="image-holder">
              <img src={item.image} alt="" /> <span></span>
            </div>
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}

      {/* Call-to-Action Card */}
      <div
        className="card"
        style={{ maxWidth: "280px", minWidth: "280px" }}
        data-aos="flip-left"
      >
        <h1 style={{ marginBottom: "10px" }}>
          Create a project to experience our benefits
        </h1>
        
        <ConnectButton  className="custom-button" connectText="CREATE A PROJECT" />
      </div>
    </div>
  );
};

export default Offer;
