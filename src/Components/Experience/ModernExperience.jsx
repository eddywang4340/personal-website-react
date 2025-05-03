import React from 'react';
import './ExperienceStyles.css';

const ModernExperience = () => {
  return (
    <section id="experience" className="modern-experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-accent"></div>
        </div>
        
        {/* Professional Experience Section */}
        <div className="professional-section">
          {/* <h3 className="subsection-title">Professional Experience</h3> */}
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-content professional">
                <div className="experience-header-content">
                  <h4 className="experience-role">Full Stack Engineering / AI Developer</h4>
                  <h5 className="experience-company">Nymble Health</h5>
                </div>
                <p className="experience-duration">Nov 2024 - Apr 2025</p>
                <ul className="experience-highlights">
                  <li>Built an AI chatbot using OpenAI, Streamlit, and RAG with Pinecone vector search</li>
                  <li>Developed backend APIs for semantic scoring and factual consistency checks</li>
                  <li>Deployed scalable Azure Apps with APIM layers and performance optimization</li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">OpenAI</span>
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">Pinecone</span>
                  <span className="tech-tag">Streamlit</span>
                </div>
              </div>
            </div>
            
            <div className="experience-item">
              <div className="experience-content professional">
                <div className="experience-header-content">
                  <h4 className="experience-role">Software & Firmware Development Intern</h4>
                  <h5 className="experience-company">Ford Motor Company</h5>
                </div>
                <p className="experience-duration">May 2024 - Aug 2024</p>
                <ul className="experience-highlights">
                  <li>Increased unit test coverage by 30% through comprehensive state initialization</li>
                  <li>Reduced manual testing time by 50% with automation scripts</li>
                  <li>Resolved MISRA code violations ensuring industry standard compliance</li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">C</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Unit Testing</span>
                  <span className="tech-tag">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Experience Section
        <div className="personal-section">
          <h3 className="subsection-title">Personal Experience</h3>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-content personal">
                <div className="experience-header-content">
                  <h4 className="experience-role">UW Midnight Sun Design Team</h4>
                  <h5 className="experience-company">Team Member</h5>
                </div>
                <p className="experience-duration">2023 - Present</p>
                <ul className="experience-highlights">
                  <li>Contributing to solar car development and testing</li>
                  <li>Working on embedded systems and vehicle telemetry</li>
                  <li>Collaborating on battery management systems</li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Embedded Systems</span>
                  <span className="tech-tag">C++</span>
                  <span className="tech-tag">Hardware</span>
                </div>
              </div>
            </div>
            
            <div className="experience-item">
              <div className="experience-content personal">
                <div className="experience-header-content">
                  <h4 className="experience-role">UW Reality Labs (VR/XR)</h4>
                  <h5 className="experience-company">VR Developer</h5>
                </div>
                <p className="experience-duration">2024 - Present</p>
                <ul className="experience-highlights">
                  <li>Developing VR applications using Unity and C#</li>
                  <li>Working on Universal Gestures project for Meta Quest</li>
                  <li>Training machine learning models for hand gesture recognition</li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Unity</span>
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">Meta SDK</span>
                </div>
              </div>
            </div>
            
            <div className="experience-item">
              <div className="experience-content personal">
                <div className="experience-header-content">
                  <h4 className="experience-role">Figure Skating</h4>
                  <h5 className="experience-company">National Competitor</h5>
                </div>
                <p className="experience-duration">2010 - Present</p>
                <ul className="experience-highlights">
                  <li>ARCT Performers Piano First Class Honours</li>
                  <li>Currently competing at varsity level for Waterloo</li>
                  <li>National-level competition experience</li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Performance</span>
                  <span className="tech-tag">Competition</span>
                  <span className="tech-tag">Discipline</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ModernExperience;