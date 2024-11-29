"use client";
import { useEffect } from "react";
import { FiX } from "../utils/icons";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function Modal({ isVisible, onClose, children }) {
  useEffect(() => {
    isVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={` fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ${poppins.className}`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative modalbox"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-900 hover:text-red-600"
          onClick={onClose}
        >
          <FiX size={30} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
