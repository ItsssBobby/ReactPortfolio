import React from 'react';
import '../../src/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Link
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;