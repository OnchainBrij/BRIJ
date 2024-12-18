"use client";

import React from "react";
import { FaBookmark, FaClock } from "react-icons/fa";
import "./projectStyle.css"; 

const HeroProjectCard = ({
  item,
  isLiked,
  onLike,
  daysRemaining,
  percentageRaised,
}) => {
  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay={item.index * 100}
    >
      <div className="top">
        <img src={item.image} alt={item.name} />
        <div
          className={`heart ${isLiked ? "active" : ""}`}
          onClick={() => onLike(item.index)}
        >
          <FaBookmark />
        </div>
      </div>

      <div className="bottom">
        <div className="top-flag">
          <span className="category">{item.category}</span>
          <span className="time">
            <FaClock className="icon" /> {daysRemaining} days left
          </span>
        </div>

        <h3 className="name">{item.name}</h3>

        <div className="metre">
          <div className="figures">
            <p>Raised: {item.raised} SUI</p>
            <p>{percentageRaised}%</p>
          </div>
          <span className="outer-metre">
            <span
              className="inner-metre"
              style={{ width: `${percentageRaised}%` }}
            ></span>
          </span>
        </div>

        <h4 className="goal">Goal: {item.goal} SUI</h4>
      </div>
    </div>
  );
};

export default HeroProjectCard;
