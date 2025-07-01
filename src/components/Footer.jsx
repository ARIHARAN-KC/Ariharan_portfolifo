import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import '../Styles/Footer.css';

function Footer() {
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/ARIHARAN-KC", 
      label: "Visit Ariharan’s GitHub Profile", 
      title: "GitHub" 
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/ariharankc07/", 
      label: "Visit Ariharan’s LinkedIn Profile", 
      title: "LinkedIn" 
    },
    { 
      icon: <FaTwitter />, 
      url: "https://twitter.com/ariharan", 
      label: "Visit Ariharan’s Twitter Profile", 
      title: "Twitter" 
    },
    { 
      icon: <HiOutlineMail />, 
      url: "mailto:ariharankc@gmail.com", 
      label: "Email Ariharan K C", 
      title: "Email" 
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-heading">
            <span className="footer-heading-line">Let's Build</span>
            <span className="footer-heading-highlight">Something Amazing</span>
          </h2>
          
          <div className="footer-contact">
            <p className="footer-description">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
            <a href="mailto:ariharankc@gmail.com" className="footer-email">
              ariharankc@gmail.com
              <span className="email-underline"></span>
            </a>
          </div>
        </div>

        <div className="footer-social-container">
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label={social.label}
                title={social.title}
              >
                <div className="social-icon-bg"></div>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            Crafted with <FaHeart className="footer-heart-icon" /> by Ariharan K C • © {new Date().getFullYear()}
            <span className="footer Rights">All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;