import React from 'react';
import './Footer.css';
import callIcon from '../../assets/call-icon.png';   // Path to your call icon
import emailIcon from '../../assets/email-icon.png'; // Path to your email icon
import linkedinIcon from '../../assets/linkedin-icon.png'; // Path to your LinkedIn icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 Jidnyasa Zope</p>
      </div>
      <div className="footer-right">
        <a href="tel:+91234567890" className="footer-icon">
          <img src={callIcon} alt="Call" />
        </a>
        <a href="mailto:jidnyasazope@gmail.com" className="footer-icon">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/jidnyasa-zope-38b56b221/" className="footer-icon">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
