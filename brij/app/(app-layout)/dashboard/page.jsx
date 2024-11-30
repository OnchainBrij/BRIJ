"use client";

import { FaClock, FaBookmark } from "react-icons/fa";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { getAllProjects } from "../../utils";
import Link from "next/link";
import { useLikedProjects } from "../../../context/LikedProjectContext";
// import { projects } from "../../../public/assets/assets";
import "./dashboardStyle.css";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const currentAccount = useCurrentAccount();
  const { likedProjects, setLikedProjects } = useLikedProjects();

  // Loading state to simulate loading delay
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  // Function to calculate remaining days
  function calculateDaysLeft(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date(timestamp * 1000); // Convert UNIX timestamp to Date
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Convert time difference to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysLeft > 0) {
        return `${daysLeft} days left`;
    } else if (daysLeft === 0) {
        return `Last day!`;
    } else {
        return `Expired`;
    }
}

  const calculateDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;
    return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0); // Ensure no negative days
  };

  // Function to remove the project from the bookmarks (liked projects)
  const removeBookmark = (projectIndex) => {
    setLikedProjects((prevLiked) =>
      prevLiked.filter((item) => item !== projectIndex)
    );
  };

  // Filter projects based on liked state
  
  useEffect(() => {
    const fetchProjects = async () => {
      if (!currentAccount){
        setLoading(false);
        return;
      }
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (error) {
        console.log("error fetching projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [currentAccount])

    const bookmarkedProjects = projects.filter((project) =>
      project?.isBookmarked === true
    );
  // Simulating a loading delay for the bookmarked projects
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulated delay)
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard">
      <div className="greeting-text py-5 px-5">
        <h1 className="text-[#161C2D] text-[1.7rem] font-bold">Hello, Okeke Chinedu</h1>
        <p className="text-[#94A3B8] text-[1.3rem]">Welcome to Brij</p>
      </div>

      {!loading && bookmarkedProjects.length > 0 && (
        <h1 className="text-[#29F0B4] text-[2rem] font-bold py-2 px-4">
          Here are your bookmarked Projects
        </h1>
      )}

      <div className="project-list w-full gap-2">
        {loading ? (
          <div className="loading-message">Loading Bookmarks...</div>
        ) : bookmarkedProjects.length === 0 ? (
          <div className="no-bookmarks-message text-center">
            No bookmarked projects
          </div>
        ) : (
          bookmarkedProjects.map((project, idx) => {
            // Find the original project index
            // const originalIndex = likedProjects[idx];

            // Calculate remaining days for each project
            // const daysRemaining = calculateDaysRemaining(project?.endDate);

            // Calculate percentage raised
            const percentageRaised = Math.round(
              (project?.currentAmount / project?.targetAmount) * 100
            );

            return (
              <div key={project?.id || idx} className="project-card">
                <img src={project?.image} alt={project?.name} />

                <div className="project-data z-10">
                  <div className="top-flag">
                    <span className="category">{project?.category}</span>
                    <span className="time">
                      <FaClock className="icon" /> {calculateDaysLeft(project)}
                    </span>
                  </div>
                  <h3>{project?.name}</h3>
                  <div className="progress-bar">
                    <div className="stats">
                      <small>
                        ${project?.currentAmount} raised out of ${project?.targetAmount}
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

                  <Link href={`/invest/${project?.id}`} className="invest-btn">Invest</Link>
                </div>

                <button
                  onClick={() => {project?.isBookmarked === false}}
                  className="bookmark-button"
                >
                  <FaBookmark className="bookmark-icon" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
