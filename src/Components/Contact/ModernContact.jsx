import React, { useState } from 'react';
import './ContactStyles.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const ModernContact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "de8d5f65-4b7e-42e3-ae08-c4a4e19102e0");
      
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      
      if (res.success) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        console.error("Form submission failed:", res);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="modern-contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get in touch</h2>
          <div className="contact-accent"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's talk</h3>
            <p className="contact-info-text">
              I'm always open to discussing new projects, opportunities, or just chatting about technology.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <img src={mail_icon} alt="Email" />
                </div>
                <div className="contact-detail-text">eddywang530@gmail.com</div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <img src={call_icon} alt="Phone" />
                </div>
                <div className="contact-detail-text">613-796-0880</div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <img src={location_icon} alt="Location" />
                </div>
                <div className="contact-detail-text">Ottawa, Ontario, Canada</div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            {isSubmitted ? (
              <div className="success-message">
                <h3>Thank you for your message!</h3>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{position: 'relative'}}>
                {isSubmitting && (
                  <div className="submitting-overlay">
                    <div className="loader"></div>
                    <p className="submitting-text">Sending message...</p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="form-input" 
                    placeholder="Enter your name" 
                    value={formState.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="form-input" 
                    placeholder="Enter your email" 
                    value={formState.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Write your message here</label>
                  <textarea 
                    id="message"
                    name="message" 
                    className="form-textarea" 
                    placeholder="Enter your message" 
                    rows="8"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="form-submit" disabled={isSubmitting}>
                  <span>Submit now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 8H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 1.5L14.5 8L8 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;