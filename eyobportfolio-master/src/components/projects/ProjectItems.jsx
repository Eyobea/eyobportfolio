import React from "react";
import "./ProjectCard.css"; // Make sure this path is correct
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <div className="card-row">
        <img src={project.image} alt={project.title} className="card-img" />
        <div className="info">
          <div className="info-row name-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="info-row tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="info-row links">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <FaEye style={{ fontSize: "2em", color: "black" }} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <FaGithub style={{ fontSize: "1.6em", color: "#181717" }} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
