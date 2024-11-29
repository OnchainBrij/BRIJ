"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projectsPage.css";
import { categoryButton, projects } from "../../public/assets/assets";
import { FaBookmark, FaClock, FaHeart } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import JoinUs from "../../components/JoinUs";
import { FaStar, FaChevronUp } from "react-icons/fa6";
import Footer from "../../components/Footer";
import Link from "next/link";

const Page = () => {
  // scroll-to-top-function
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

  const [likedProjects, setLikedProjects] = useState(() => {
    let storedLikes;
    if (typeof window !== "undefined") {
      storedLikes = localStorage.getItem("likedProjects");
    }
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  const [displayCount, setDisplayCount] = useState(6); // State for number of displayed projects
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
    }
  }, [likedProjects]);

  const calculateDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;
    return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
  };

  const calcPercentageRaised = (raised, goal) => {
    return ((raised / goal) * 100).toFixed(1);
  };

  const toggleLike = (index) => {
    setLikedProjects((prevLiked) =>
      prevLiked.includes(index)
        ? prevLiked.filter((item) => item !== index)
        : [...prevLiked, index]
    );
  };

  // Sort projects based on like status
  const sortedProjects = [...projects].sort((a, b) => {
    const isLikedA = likedProjects.includes(projects.indexOf(a));
    const isLikedB = likedProjects.includes(projects.indexOf(b));
    return isLikedB - isLikedA; // Liked projects first
  });

  const loadMoreProjects = () => {
    setDisplayCount((prevCount) => prevCount + 3); // Increase displayed projects count
  };

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory
    ? sortedProjects.filter((project) => project.category === selectedCategory)
    : sortedProjects;

  return (
    <div>
      <Navbar />
      <div className="project-page relative">
        {/* First categories section with animation */}
        <div
          className="categories"
          style={{ minHeight: "40vh", paddingTop: "100px" }}
          data-aos="fade-up" // Adding animation to the entire section
        >
          <div data-aos="fade-right" data-aos-delay="100">
            <span className="dot"></span> <h3>Which Category Interests You</h3>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="200">
            Top Categories
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the when an unknown was popularized.
          </p>
          <div className="category-holder">
            <a
              href="#projects"
              onClick={() => setSelectedCategory("")}
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="categorySelector">
                <h2>All Projects</h2>
                <span></span>
              </div>
            </a>
            {categoryButton.map((item, index) => (
              <a
                href="#projects"
                key={index}
                onClick={() => setSelectedCategory(item.name)}
                data-aos="fade-up" // Adding fade-up animation to each category button
                data-aos-delay={`${500 + index * 100}`} // Delay for each button
              >
                <div className="categorySelector">
                  <div className="icon"> {item.image}</div>
                  <h2>{item.name}</h2>
                  <span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Featured Projects Section */}
        <div className="categories" style={{ marginBottom: "50px" }}>
          <div>
            <span className="dot"></span> <h3>Businesses You Can Back</h3>
          </div>
          <h1>Featured Projects</h1>
          <div className="featured-projects-container">
            {projects.slice(0, 3).map((item, index) => {
              const percentageRaised = calcPercentageRaised(
                item.raised,
                item.goal
              );
              const daysRemaining = calculateDaysRemaining(item.endDate);
              return (
                <Link href={`projects/${item._id}`} key={index}>
                  <div className="featured-card">
                    <img
                      src={item.backgroundImage}
                      alt=""
                      className="background-img"
                    />
                    <FaStar className="star-icon" />
                    <div className="feature-text">
                      <span className="category-span">
                        <div className="category">{item.category}</div>
                        <div className="time">
                          <FaClock className="icon" /> {daysRemaining} days left
                        </div>
                      </span>
                      <div className="name">{item.name}</div>
                      <div className="progress-bar">
                        <div className="stats">
                          <small>
                            ${item.raised} raised out of ${item.goal}
                          </small>
                          <small>{percentageRaised}%</small>
                        </div>
                        <span className="outer-metre">
                          <span
                            className="inner-metre"
                            style={{ width: `${percentageRaised}%` }}
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Projects Section */}
        <div className="project-container categories">
          <span className="dot"></span>{" "}
          <h3 className="z-10">Businesses You Can Back</h3>
          <h1 className="z-10">Explore Projects</h1>
        </div>
        <div className="project-display z-10" id="projects">
          {filteredProjects.slice(0, displayCount).map((item, index) => {
            const daysRemaining = calculateDaysRemaining(item.endDate);
            const percentageRaised = calcPercentageRaised(
              item.raised,
              item.goal
            );
            const isLiked = likedProjects.includes(projects.indexOf(item));
            return (
              <Link
                href={`projects/${item._id}`}
                key={item._id}
                className="project-card z-10"
              >
                <div data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="top">
                    <img src={item.image} alt={item.name} />
                    <div
                      className={`heart ${isLiked ? "active" : ""}`}
                      onClick={() => toggleLike(projects.indexOf(item))}
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
                        <p>Raised: ${item.raised}</p>
                        <p>{percentageRaised}%</p>
                      </div>
                      <span className="outer-metre">
                        <span
                          className="inner-metre"
                          style={{ width: `${percentageRaised}%` }}
                        ></span>
                      </span>
                    </div>
                    <h4 className="goal">Goal: ${item.goal}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="button">
          <button className="more-btn" onClick={loadMoreProjects}>
            More Projects
          </button>
        </div>
        <JoinUs />
        <Footer />
        {/* Scroll to top button */}
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
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default Page;
