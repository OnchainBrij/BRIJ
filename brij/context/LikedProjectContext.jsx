"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const LikedProjectsContext = createContext();

// Context provider
export const LikedProjectsProvider = ({ children }) => {
  const [likedProjects, setLikedProjects] = useState(() => {
    // Initialize liked projects from localStorage
    if (typeof window !== "undefined") {
      const storedLikes = localStorage.getItem("likedProjects");
      return storedLikes ? JSON.parse(storedLikes) : [];
    }
    return [];
  });

  // Update localStorage whenever likedProjects changes
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

// Hook for accessing the context
export const useLikedProjects = () => {
  return useContext(LikedProjectsContext);
};
