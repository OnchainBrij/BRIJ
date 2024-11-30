import React, { useState, useEffect } from "react";
import { useLikedProjects } from "../../context/LikedProjectContext";
import Modal from "../Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import ProjectCard from "./ProjectCard"; // Import the new component
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/bundle";
import "./projectStyle.css";
import axios from "axios";

const Projects = () => {
  const { likedProjects, setLikedProjects } = useLikedProjects(),
    [isModalOpen, setIsModalOpen] = useState(false),
    [isWalletConnected, setIsWalletConnected] = useState(false),
    [projects, setProjects] = useState([]);
  const [sortOption, setSortOption] = useState("liked"); // State for sorting

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  useEffect(() => {
    (async () => {
      setProjects((await axios.get("/api/projects")).data.Projects);
    })();
  }, []);
  // Utility function to calculate days remaining
  const calculateDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;
    return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
  };

  // Utility function to calculate percentage raised
  const calcPercentageRaised = (raised, goal) => {
    return ((raised / goal) * 100).toFixed(1);
  };

  // Handle wallet connection
  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    setIsModalOpen(false);
  };

  // Toggle like for project
  const toggleLike = (index) => {
    if (!isWalletConnected) {
      setIsModalOpen(true);
      return;
    }

    setLikedProjects((prevLiked) => {
      const isAlreadyLiked = prevLiked.includes(index);
      if (isAlreadyLiked) {
        return prevLiked.filter((item) => item !== index);
      } else {
        return [...prevLiked, index];
      }
    });
  };

  // Sort projects based on the selected option
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortOption === "liked") {
      const isLikedA = likedProjects.includes(projects.indexOf(a));
      const isLikedB = likedProjects.includes(projects.indexOf(b));
      return isLikedB - isLikedA; // Liked projects first
    }
    if (sortOption === "goal") {
      return b.goal - a.goal; // Highest goal first
    }
    if (sortOption === "daysRemaining") {
      return (
        calculateDaysRemaining(a.endDate) - calculateDaysRemaining(b.endDate)
      ); // Projects with fewer days first
    }
    return 0;
  });

  return (
    <div className="projects">
      <h3>
        <span className="dot"></span> Businesses You Can Back
      </h3>
      <h1>Explore Projects</h1>

      {/* Sorting Dropdown */}
      <div className="sort-container"></div>

      <div className="project-container">
        {/* If no projects are sorted */}
        {sortedProjects.length === 0 ? (
          <p className="empty-message">
            No projects to display. Explore and like some!
          </p>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay, Mousewheel]}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            grabCursor={true}
            mousewheel={true}
            loop={true}
          >
            {sortedProjects.map((item, index) => {
              const daysRemaining = calculateDaysRemaining(item.endDate);
              const percentageRaised = calcPercentageRaised(
                item.raised,
                item.goal
              );
              const isLiked = likedProjects.includes(index);

              return (
                <SwiperSlide key={index}>
                  <ProjectCard
                    item={{ ...item, index }}
                    isLiked={isLiked}
                    toggleLike={toggleLike}
                    daysRemaining={daysRemaining}
                    percentageRaised={percentageRaised}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {/* Wallet Connection Modal */}
      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-black">
          Please connect your wallet!
        </h2>
      </Modal>
    </div>
  );
};

export default Projects;
