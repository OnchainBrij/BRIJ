"use client"; // Ensures client-side execution
import React, { createContext, useState, useEffect, useContext } from "react";

const LikedProjectsContext = createContext();

export const LikedProjectsProvider = ({ children }) => {
  const [likedProjects, setLikedProjects] = useState([]);

  // Load from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLikes = localStorage.getItem("likedProjects");
      if (storedLikes) setLikedProjects(JSON.parse(storedLikes));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
    }
  }, [likedProjects]);

  return (
    <LikedProjectsContext.Provider value={{ likedProjects, setLikedProjects }}>
      {children}
    </LikedProjectsContext.Provider>
  );
};

export const useLikedProjects = () => useContext(LikedProjectsContext);
