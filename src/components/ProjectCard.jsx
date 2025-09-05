import React from "react";

const ProjectCard = ({ title, description, link, image, projectStack, alt }) => (
  <div className="project-card">
    
    <a href={link} target="_blank" className="hover-effect">
        <img src={image} alt={alt} />
        <h3 className="heading--xs">{title}</h3>
        <p>{description}</p>
        <p className="color--grey all-caps caption">{projectStack}</p>
    </a>
  </div>
);

export default ProjectCard;
