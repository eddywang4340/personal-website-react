import React, { useState } from 'react';
import './ProjectsStyles.css';

// Import your project images
import project1Image from '../../assets/project_5.jpg'; // Replace with your actual image names
import project2Image from '../../assets/project_1.png';
import project3Image from '../../assets/project_2.jpg';
import project4Image from '../../assets/project_3.jpg';
import project5Image from '../../assets/project_4.png';

// You might also need these icons for the buttons
import github_logo from '../../assets/github_logo.png'; 
import demo_logo from '../../assets/demo_logo.png';

const ModernProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  // Projects data with actual image imports
  const projects = [
    {
      id: 1,
      name: "Rizz Glasses",
      image: project1Image, // Use the imported image
      description: "AR glasses project with interactive display capabilities.",
      details: [
        "Heads-up display for information overlay",
        "Gesture recognition for control",
        "Bluetooth connectivity with mobile devices",
        "Custom PCB design and firmware"
      ],
      github: "https://github.com/holycactusjuice/rizz-glasses",
      demo: null
    },
    {
      id: 2,
      name: "Bird Classifier ML",
      image: project2Image,
      description: "A machine learning project that identifies bird species from images.",
      details: [
        "Trained on 10,000+ bird images across 400 species",
        "Achieved 92% accuracy on test datasets",
        "Built with TensorFlow and Keras",
        "Includes a user-friendly web interface for image uploads"
      ],
      github: "https://github.com/eddywang4340/Bird-Classifier-ML",
      demo: null
    },
    {
      id: 3,
      name: "Robotic Arm Project",
      image: project3Image,
      description: "A fully functional robotic arm with 6 degrees of freedom controlled through Arduino.",
      details: [
        "Custom inverse kinematics algorithm for precise movement",
        "3D printed components designed in Fusion 360",
        "Servo motors controlled via PWM signals",
        "Programmable movement sequences"
      ],
      github: "https://github.com/eddywang4340/RoboticArm",
      demo: "https://drive.google.com/drive/folders/185Sz3yPdRMCfaHdSApItf4EcdsfCQdng?usp=sharing"
    },
    {
      id: 4,
      name: "FRC Robot Code",
      image: project4Image,
      description: "Competition robot code for FIRST Robotics Competition team 2706.",
      details: [
        "Command-based robot architecture",
        "Autonomous path following with trajectory generation",
        "Vision processing for game element tracking",
        "Teleoperated control systems"
      ],
      github: "https://github.com/eddywang4340/2023-2706-Robot-Code/blob/main/src/main/java/frc/robot/subsystems/ArmSubsystem.java",
      demo: "https://drive.google.com/drive/folders/1Y8reBivWYAxrGB9j3RqZ31iSeFhlZeOs?usp=sharing"
    },
    {
      id: 5,
      name: "Updated Auxilium",
      image: project5Image,
      description: "A community support platform connecting volunteers with people in need.",
      details: [
        "Real-time chat and notification system",
        "Geolocation services for local assistance",
        "User reputation and verification system",
        "Resource sharing marketplace"
      ],
      github: "https://github.com/eddywang4340/Updated_Auxilium",
      demo: null
    }
  ];
  
  // Rest of the component remains the same...
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="projects" className="modern-projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-accent"></div>
        </div>
        
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card" 
              onClick={() => openProjectModal(project)}
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="project-image" 
              />
              <div className="project-overlay">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && projects.length > 3 && (
          <button 
            className="show-more-btn" 
            onClick={() => setShowAll(true)}
          >
            <span>Show More</span>
            <span>→</span>
          </button>
        )}
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeProjectModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeProjectModal}>×</button>
              
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.name}</h3>
              </div>
              
              <div className="modal-body">
                <div className="modal-details">
                  <ul>
                    {selectedProject.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-actions">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-button github-button"
                    >
                      <img src={github_logo} alt="GitHub" style={{width: '20px', height: '20px'}} />
                      <span>GitHub</span>
                    </a>
                  )}
                  
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-button demo-button"
                    >
                      <img src={demo_logo} alt="Demo" style={{width: '20px', height: '20px'}} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModernProjects;