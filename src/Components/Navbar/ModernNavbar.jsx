import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './NavbarStyles.css';

const ModernNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation items
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];
  
  return (
    <>
      <header className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            Edward Wang
          </div>
          
          {/* Desktop Navigation */}
          <nav className="navbar-links">
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <AnchorLink 
                    href={`#${item.id}`}
                    offset={50}
                    className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* CTA Button */}
          <AnchorLink 
            href="#contact"
            offset={50}
            className="connect-button"
          >
            Let's Connect
          </AnchorLink>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <AnchorLink 
                href={`#${item.id}`}
                offset={50}
                className={`mobile-menu-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
        
        <AnchorLink 
          href="#contact"
          offset={50}
          className="mobile-connect-button"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Let's Connect
        </AnchorLink>
      </div>
      
      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default ModernNavbar;