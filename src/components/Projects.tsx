import React from 'react';
import '../styles/Projects.css';

function Project({ imageSrc, projectName }) {
  return (
    <div className="project">
      <img className="project-img" src={imageSrc} alt={projectName} />
      <span className="project-name">{projectName}</span>
    </div>
  );
}

export default Project;