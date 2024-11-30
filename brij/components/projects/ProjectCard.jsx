"use client";

import React from "react";
import { FaBookmark, FaClock } from "react-icons/fa";
import "./projectStyle.css";
import axios from "axios";

const ProjectCard = ({
  item,
  isLiked,
  onLike,
  daysRemaining,
  percentageRaised,
  onClick,
}) => {
  return (
    <div
      className="project-card"
      // data-aos="fade-up"
      // data-aos-delay={item?.index * 100}
      onClick={onClick}
    >
      <div className="top">
        <img
          src={`https://gateway.pinata.cloud/ipfs/${item.image}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`}
          alt={item.name}
        />
        <div
          className={`heart ${isLiked ? "active" : ""}`}
          onClick={async () => {
            await axios.post("/api/bookmark", {
              address: await useCurrentAccount(),
              likedProjects: item.id,
            });
          }}
        >w
          <FaBookmark />
        </div>
      </div>

      <div className="bottom">
        <div className="top-flag">
          <span className="category">{item.category}</span>
          <span className="time">
            <FaClock className="icon" />{" "}
            {daysRemaining > 0 ? `${daysRemaining} days left` : "Expired"}
          </span>
        </div>

        <h3 className="name">{item.name}</h3>

        <div className="metre">
          <div className="figures">
            <p>Raised: {item.currentAmount} SUI</p>
            <p>{percentageRaised}%</p>
          </div>
          <span className="outer-metre">
            <span
              className="inner-metre"
              style={{ width: `${percentageRaised}%` }}
            ></span>
          </span>
        </div>

        <h4 className="goal">Goal: {item.targetAmount} SUI</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
