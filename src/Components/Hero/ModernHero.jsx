import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './HeroStyles.css';
import profile_img from '../../assets/profile_img.png';

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate color values based on mouse position
  const hue1 = Math.floor(mousePosition.x * 20 + 210); // Blue range
  const hue2 = Math.floor(mousePosition.y * 20 + 180); // Cyan range
  
  return (
    <div id="home" className="modern-hero">
      {/* Background elements */}
      <div className="hero-background">
        <div 
          className="hero-blob hero-blob-1"
          style={{ 
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            backgroundColor: `hsl(${hue1}, 70%, 50%)` 
          }}
        ></div>
        <div 
          className="hero-blob hero-blob-2"
          style={{ 
            transform: `translate(${-mousePosition.x * 50}px, ${-mousePosition.y * 50}px)`,
            backgroundColor: `hsl(${hue2}, 70%, 60%)`
          }}
        ></div>
      </div>
      
      {/* Profile image with glow */}
      <div className="profile-container float-animation">
        <div 
          className="profile-glow"
          style={{
            background: `linear-gradient(45deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 60%))`
          }}
        ></div>
        <img src={profile_img} alt="Edward Wang" className="profile-image" />
      </div>
      
      {/* Interactive container with all text */}
      <div 
        className="interactive-container"
        style={{
          borderColor: `hsl(${hue1}, 70%, 50%)`,
          boxShadow: `0 0 15px hsla(${hue1}, 70%, 50%, 0.3)`
        }}
      >
        <h1 className="hero-title">
          <span className="name-gradient">I'm Edward Wang,</span> a CS student based in Canada.
        </h1>
        
        <p className="hero-description">
          Welcome to my personal website! I am a second-year student at University of Waterloo 
          currently looking for open internships. On my site, you'll discover my skills, projects, 
          and contact information.
        </p>
      </div>
      
      <div className="hero-actions">
        <AnchorLink 
          href="#contact" 
          offset={50} 
          className="hero-connect-btn"
          style={{
            background: `linear-gradient(264deg, hsl(${hue1}, 70%, 50%) -5.09%, hsl(${hue2}, 70%, 60%) 106.28%)`
          }}
        >
          Connect with me
        </AnchorLink>
        
        <a 
          href="/resume.pdf" 
          download="resume.pdf" 
          className="hero-resume-btn"
          style={{
            borderColor: `hsl(${Math.min(hue1, 250)}, 70%, 70%)`
          }}
        >
          Get resume
        </a>
      </div>
    </div>
  );
};

export default ModernHero;