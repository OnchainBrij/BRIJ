"use client";

import React, { useState } from "react";
import ProjectCard from "../../../components/projects/ProjectCard";
import InvestModal from "./InvestModal";
import { projects as Projects } from "../../../components/projects/Projects";

const ExploreProjects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set selected project for modal
  };

  const closeModal = () => {
    setSelectedProject(null); // Close the modal
  };

  return (
    <div className="explore-projects">
      <h1>Explore Projects</h1>
      <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Projects.map((item, index) => (
  <ProjectCard
    key={index}
    item={{ ...item, index }}
    isLiked={false} // Replace with actual liked state
    toggleLike={() => {}}
    daysRemaining={item.daysRemaining}
    percentageRaised={item.percentageRaised}
    onCardClick={handleCardClick} // Pass the click handler
  />
))}
      </div>

      {selectedProject && (
        <InvestModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default ExploreProjects;
