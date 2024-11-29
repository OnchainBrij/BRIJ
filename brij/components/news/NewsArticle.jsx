import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import "./newsArticle.css";
import { blogData } from "../../public/assets/assets";
import { FaArrowRight, FaComment, FaUser } from "react-icons/fa6";

const NewsArticle = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
      once: false,
      threshold: 30,
    });
  }, []);

  return (
    <div className="news-article">
      <h3>
        <span className="dot"></span> Codesk Updates
      </h3>
      <h1>News & articles.</h1>
      <div className="blog-container">
        {blogData.map((item, index) => (
          <div className="blog-card" key={index} data-aos="zoom-out">
            <div className="header">
              <div className="img-box">
                <img src={item.image} alt="" />
              </div>

              <div className="blogger-detail">
                <p className="blogger">
                  <FaUser className="icon" /> By {item.blogger}
                </p>
                <p className="comment">
                  <FaComment className="icon" /> {item.comments} comments
                </p>
              </div>
            </div>

            <div className="content">
              <p> {item.topic} </p>
            </div>
            <FaArrowRight className="icon" />
          </div>
        ))}
      </div>
      <div className="newsletter-box">
        <h4>{"Don't"} miss our monthly updates</h4>
        <div className="input">
          <input type="email" placeholder="Enter E-mail Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
