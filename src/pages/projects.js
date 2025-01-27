import React from "react";
import "../styles/projects.css";
import Project1 from '../images/Project1.png';
import Project2 from '../images/Project2.png';
import Project3 from '../images/Project3.png';
import P1 from '../images/Elipse_5.png';
import p2 from '../images/PersonPhoto14.png';
import p3 from '../images/Person Photo 16.png';
import p4 from '../images/Person Photo 23.png';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Modern",
      description: "As Uber works through a huge amount of internal management turmoil.",
      image: Project1 , // Replace with your actual image URL
      avatars: ["https://via.placeholder.com/40", "https://via.placeholder.com/40", "https://via.placeholder.com/40"],
    },
    {
      id: 2,
      title: "Scandinavian",
      description: "Music is something that every person has his or her own specific opinion about.",
      image: Project2,
      avatars: ["https://via.placeholder.com/40", "https://via.placeholder.com/40", "https://via.placeholder.com/40"],
    },
    {
      id: 3,
      title: "Minimalist",
      description: "Different people have different taste, and various types of music.",
      image: Project3,
      avatars: ["https://via.placeholder.com/40", "https://via.placeholder.com/40", "https://via.placeholder.com/40"],
    },
  ];

  return (
    <div className="projects-container">
      <div className="proj-header">
        <h2>Projects</h2>
        <p>Architects design houses</p>
      </div>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <p className="project-id">Project #{project.id}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
              <button className="view-all-button">VIEW ALL</button>
                {/* <div className="avatars">
                  {project.avatars.map((avatar, index) => (
                    <img key={index} src={avatar} alt={`Avatar ${index}`} className="avatar" />
                  ))}
                </div> */}
                <div className="avatars">
                  <img src= { P1 } alt="img" className="avatar"/>
                  <img src = { p4 } alt="img" className="avatar"/>
                  <img src= { p2 } alt="img" className="avatar"/>
                  <img src= { p3 } alt="img" className="avatar"/>
                  
                </div>
                
              </div>
            </div>
          </div>
        ))}
        <div className="create-new-project">
          <div className="create-icon">+</div>
          <p>Create a New Project</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
