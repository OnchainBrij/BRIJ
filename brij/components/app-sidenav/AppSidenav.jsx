"use client";

import { useState } from "react";
import { FiX, MdKeyboardArrowUp, MdKeyboardArrowDown } from "../../utils/icons";
import "./AppSidenav.css";
import {
  FaCompass,
  FaLock,
  FaPlusCircle,
  FaTachometerAlt,
  FaUserCog,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function AppSidenav({ isOpen, setIsOpen }) {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`app-sidenav w-[20%]  block max-md:fixed max-md:inset-0 max-md:w-[80%] max-md:h-full max-md:transition-transform max-md:duration-300 transform z-50 ${
        isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-[1000%]"
      } [&_li]:flex [&_li]:gap-2`}
    >
      <div className="flex items-center justify-end">
        <FiX
          size={30}
          onClick={() => setIsOpen(false)}
          className="hidden max-md:flex"
        />
      </div>
      <Link href={"/dashboard"} className=" z-30 ">
        <Image src={"/assets/brijlogo.png"} width={100} height={100}></Image>
      </Link>
      <ul className="text-gray-200">
        <Link href="dashboard">
          <li>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>
        </Link>

        <Link href="explore-projects">
          <li>
            <FaCompass />
            <span>Explore Projects</span>
          </li>
        </Link>
        <Link href="add-project">
          <li onClick={handleItemClick}>
            <FaPlusCircle />
            <span>Add Project</span>
          </li>
        </Link>

        <li onClick={handleItemClick}>
          <FaLock />
          <span>Authentication</span>
        </li>

        <li
          onClick={toggleUserProfile}
          className="flex justify-between items-center"
        >
          <div className="flex gap-2">
            <FaUserCog />
            <span>User Profile</span>
          </div>
          {showUserProfile ? (
            <MdKeyboardArrowDown size={20} />
          ) : (
            <MdKeyboardArrowUp size={20} />
          )}
        </li>
        {showUserProfile && (
          <ul className="ml-4">
            <li>Profile</li>
            <li>Profile Settings</li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default AppSidenav;
