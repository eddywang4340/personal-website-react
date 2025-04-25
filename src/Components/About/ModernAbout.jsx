import React, { useEffect, useRef } from 'react';
import './AboutStyles.css';
import profile_img from '../../assets/about_profile.png';

const ModernAbout = () => {
  const skillsRef = useRef(null);
  
  // Skills data with appropriate icons
  const skills = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "C", level: 80, icon: "⚙️" },
    { name: "Linux", level: 85, icon: "🐧" },
    { name: "Git", level: 80, icon: "📊" },
    { name: "HTML", level: 75, icon: "🌐" },
    { name: "Java", level: 65, icon: "☕" },
    { name: "React", level: 65, icon: "⚛️" }
  ];
  
  // Animate skill bars on scroll
  useEffect(() => {
    const skillElements = document.querySelectorAll('.skill-bar-fill');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width;
          }
        });
      },
      { threshold: 0.1 }
    );
    
    skillElements.forEach((el) => observer.observe(el));
    
    return () => {
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="modern-about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-accent"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-bg"></div>
            <img src={profile_img} alt="Edward Wang" className="about-image" />
          </div>
          
          <div className="about-info">
            <div className="about-bio">
              <p>
                I bring a strong foundation in backend development, machine learning, and firmware.
                Throughout my career, I have contributed my skills to various companies such as Ford.
              </p>
              <p>
                My passion for technology and innovation is not only shown through my experiences 
                but also through my dedication and enthusiasm with my projects.
              </p>
              <p>
                Currently a second-year student at the University of Waterloo, I'm constantly seeking
                to expand my knowledge and skills in the field of technology.
              </p>
            </div>
            
            <div className="skills-container" ref={skillsRef}>
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        data-width={`${skill.level}%`}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;