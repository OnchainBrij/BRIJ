"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projectsPage.css";
import { categoryButton } from "../../public/assets/assets";
import { FaBookmark, FaClock, FaHeart } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import JoinUs from "../../components/JoinUs";
import { FaStar, FaChevronUp } from "react-icons/fa6";
import Footer from "../../components/Footer";
import Link from "next/link";
import axios from "axios";
import { FaTimes } from "react-icons/fa";


const Page = () => {
  // State declarations
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [projects, setProjects] = useState([]);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [likedProjects, setLikedProjects] = useState(() => {
    let storedLikes;
    if (typeof window !== "undefined") {
      storedLikes = localStorage.getItem("likedProjects");
    }
    return storedLikes ? JSON.parse(storedLikes) : [];
  });
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Scroll-to-top functionality
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

  // Fetch projects from API
  useEffect(() => {
    (async () => {
      setProjects((await axios.get("/api/projects")).data.Projects);
    })();
  }, []);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  // Save liked projects to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
    }
  }, [likedProjects]);

  // Calculate days remaining for project
  const calculateDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;
    return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
  };

  // Calculate percentage raised for project
  const calcPercentageRaised = (raised, goal) => {
    return ((raised / goal) * 100).toFixed(1);
  };

  // Function to check wallet connection
  const checkWalletConnection = () => {
    if (!walletConnected) {
      setShowModal(true);
      return false;
    }
    return true;
  };

  // Toggle like functionality with wallet check
  const toggleLike = (index) => {
    if (!checkWalletConnection()) return;

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

  // Load more projects
  const loadMoreProjects = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory
    ? sortedProjects.filter((project) => project.category === selectedCategory)
    : sortedProjects;

  return (
    <div>
      <Navbar />
      <div className="project-page relative">
        {/* Modal for wallet connection */}
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
      {/* Close Icon */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600 focus:outline-none"
      >
        <FaTimes size={24} />
      </button>
      <h2 className="text-2xl font-semibold text-gray-800">Please connect your wallet!</h2>
    
    </div>
  </div>
)}


        {/* First categories section */}
        <div
          className="categories"
          style={{ minHeight: "40vh", paddingTop: "100px" }}
          data-aos="fade-up"
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
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`}
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

        {/* Projects Section */}
        <div className="project-container categories">
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
                className="project-card z-10 "
                
              >
                <div data-aos="fade-up" data-aos-delay={index * 100} >
                  <div className="top">
                    <img src={item.image} alt={item.name} />
                    <div
                      className={`heart ${isLiked ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLike(projects.indexOf(item));
                      }}
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
