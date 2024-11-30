"use client";
import React, { useState, useEffect } from "react";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { getAllProjects } from "../../utils";
import ProjectCard from "../../../components/projects/ProjectCard";
import InvestModal from "../../../components/InvestModal";
import { projects as projectData } from "../../../public/assets/assets";

function ExploreProjects() {
  const currentAccount = useCurrentAccount();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const [likedProjects, setLikedProjects] = useState(() => {
    let storedLikes;
    if (typeof window !== "undefined") {
      storedLikes = localStorage.getItem("likedProjects");
    }
    return storedLikes ? JSON.parse(storedLikes) : [];
  });
  const [projectItem, setProjectItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!currentAccount) {
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
  }, [currentAccount]);

  // Save liked projects to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
    }
  }, [likedProjects]);

  // Toggle like functionality
  // const toggleLike = (index) => {
  //   setLikedProjects((prevLiked) =>
  //     prevLiked.includes(index)
  //       ? prevLiked.filter((item) => item !== index)
  //       : [...prevLiked, index]
  //   );
  // };
  const toggleLike = (index) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, i) =>
        project.id === index
          ? { ...project, isBookmarked: !project.isBookmarked }
          : project
      )
    );

    setLikedProjects((prevLiked) =>
      prevLiked.includes(index)
        ? prevLiked.filter((item) => item !== index)
        : [...prevLiked, index]
    );
  };
  const handleInvestModal = (item) => {
    setIsModalOpen(true);
    setProjectItem(item);
  };

  function calculateDaysLeft(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date(timestamp * 1000); // Convert UNIX timestamp to Date
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Convert time difference to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysLeft > 0) {
      return daysLeft;
    }
  }

  return (
    <div className="h-auto pl-5 pt-4 pb-5 ">
      <h1 className="font-bold mb-6">Explore Projects</h1>
      <div className="grid grid-cols-3 2xl:grid-cols-4 text-white gap-y-5">
        {projects.map((item, index) => {
          const isLiked = item?.isBookmarked;
          return (
            <ProjectCard
              key={index}
              item={item}
              daysRemaining={calculateDaysLeft(item?.deadline)}
              percentageRaised={Math.floor(
                (item?.currentAmount / item.targetAmount) * 100
              )}
              isLiked={isLiked}
              onLike={() => toggleLike(index)}
              className="text-white"
              onClick={() => handleInvestModal(item)}
            />
          );
        })}
        {isModalOpen && (
          <InvestModal
            projectItem={projectItem}
            onCloseModal={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default ExploreProjects;
