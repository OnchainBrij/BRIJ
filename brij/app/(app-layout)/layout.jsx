"use client";

import { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppSidenav from "../../components/app-sidenav/AppSidenav";

export default function AppLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex w-full h-[100vh]"
      style={{ fontFamily: "'poppins', sans-serif" }}
    >
      <AppSidenav isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-grow">
        <AppHeader setIsOpen={setIsOpen} />
        <div style={{ height: "100vh", overflowY: "scroll" }}>
          {children}
        </div>{" "}
      </div>
      {isOpen ? (
        <div
          className="max-md:fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
