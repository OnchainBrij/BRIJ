"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "../../../components/projects/ProjectCard";
import InvestModal from "../../../components/InvestModal";
import { projects as projectData } from "../../../public/assets/assets";

function ExploreProjects() {
  const [likedProjects, setLikedProjects] = useState(() => {
    let storedLikes;
    if (typeof window !== "undefined") {
      storedLikes = localStorage.getItem("likedProjects");
    }
    return storedLikes ? JSON.parse(storedLikes) : [];
  });
  const [projectItem, setProjectItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Save liked projects to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
    }
  }, [likedProjects]);

  // Toggle like functionality
  const toggleLike = (index) => {
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
  return (
    <div className="h-auto pl-5 pt-4 pb-5 ">
      <h1 className="font-bold mb-6">Explore Projects</h1>
      <div className="grid grid-cols-3 2xl:grid-cols-4 text-white gap-y-5">
        {projectData.map((item, index) => {
          const isLiked = likedProjects.includes(index);
          return (
            <ProjectCard
              key={index}
              item={item}
              daysRemaining={20}
              percentageRaised={Math.floor((item.raised / item.goal) * 100)}
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
