// Modal.jsx
import React from "react";
import "./modalStyle.css";

const InvestModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={project.image} alt={project.name} className="modal-image" />
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>
          <strong>Category:</strong> {project.category}
        </p>
        <p>
          <strong>Raised:</strong> ${project.raised} of ${project.goal}
        </p>
        <p>
          <strong>Days Left:</strong> {project.daysRemaining}
        </p>
      </div>
    </div>
  );
};

export default InvestModal;
