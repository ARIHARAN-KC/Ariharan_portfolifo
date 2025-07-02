import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBrain } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { SiDjango, SiFlask, SiReact, SiNodedotjs, SiTensorflow, SiPytorch, SiStreamlit, SiMongodb } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import '../Styles/Home.css';
import animeBoy from '../assets/anime-boy.png';

function Home() {
  const [imgError, setImgError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTech, setActiveTech] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const roles = ["AI/ML Developer", "Full Stack Developer", "MERN Stack Developer","Prompt Engineer"];

  const handleImageError = () => {
    setImgError(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let timeoutId;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setTypedText(currentRole.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        setTypedText(currentRole.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        setIsTyping(false);
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        setIsTyping(true);
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      timeoutId = setTimeout(type, typingSpeed);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  const techIcons = [
    { icon: <SiDjango />, name: "Django", color: "#092e20", className: "django-icon" },
    { icon: <SiFlask />, name: "Flask", color: "#000000", className: "flask-icon" },
    { icon: <SiReact />, name: "React", color: "#61dafb", className: "react-icon" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#68a063", className: "node-icon" },
    { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00", className: "tensorflow-icon" },
    { icon: <SiPytorch />, name: "PyTorch", color: "#EE4C2C", className: "pytorch-icon" },
    { icon: <DiPython />, name: "Python", color: "#3776AB", className: "python-icon" },
    { icon: <SiStreamlit />, name: "Streamlit", color: "#FF4B4B", className: "streamlit-icon" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248", className: "mongodb-icon" },
    { icon: <FaBrain />, name: "Prompt Engineering", color: "#8b5cf6", className: "prompt-icon" },
  ];

  return (
    <section className="home-section">
      <div className="bg-grid"></div>
      <div className="particles"></div>
      <div 
        className="cursor-follower" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          backgroundColor: activeTech ? activeTech.color : 'rgba(79, 70, 229, 0.1)',
        }}
      ></div>
      
      <div className="home-content">
        <div className="content-wrapper">
          <h1 className="home-heading">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Ariharan K C</span>
          </h1>
          
          <div className="typing-container" aria-live="polite">
            <h2 className="home-subheading">
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
          
          <p className="home-description">
            I craft intelligent full-stack applications, blending <span className="tech-highlight">web development</span> with <span className="tech-highlight">AI/ML</span>. 
            From building medical imaging tools like <span className="tech-highlight">MedScanAI</span> to AI-driven streaming apps like <span className="tech-highlight">Orion Streaming</span>, 
            I leverage <span className="tech-highlight">TensorFlow</span>, <span className="tech-highlight">Pillow</span>, and modern web frameworks to create impactful solutions.
          </p>

          <div className="home-actions">
            <Link to="/projects" className="home-action-button primary-button" aria-label="View my projects">
              <span>View Projects</span>
              <div className="button-hover-effect"></div>
            </Link>
            <Link to="/contact" className="home-action-button secondary-button" aria-label="Contact me">
              <span>Contact Me</span>
              <div className="button-hover-effect"></div>
            </Link>
          </div>

          <div className="home-social">
            {[
              { icon: <FaGithub />, url: "https://github.com/ARIHARAN-KC", label: "Visit Ariharan’s GitHub Profile", title: "GitHub" },
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ariharankc07/", label: "Visit Ariharan’s LinkedIn Profile", title: "LinkedIn" },
              { icon: <FaXTwitter  />, url: "https://x.com/AriharanKC_007", label: "Visit Ariharan’s X Profile", title: "X" },
              { icon: <HiOutlineMail />, url: "mailto:ariharankc@gmail.com", label: "Email Ariharan K C", title: "Email" },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="home-social-icon"
                aria-label={social.label}
                title={social.title}
              >
                <div className="social-icon-bg"></div>
                {social.icon}
                <span className="social-tooltip">{social.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="home-profile">
        <div className="profile-container">
          <div className="profile-frame">
            {imgError ? (
              <svg className="home-error-svg" viewBox="0 0 100 100" aria-label="Profile image placeholder">
                <circle cx="50" cy="50" r="50" fill="rgba(79, 70, 229, 0.3)" />
                <text x="50" y="55" textAnchor="middle" fill="#f8f9fa" fontSize="12">Profile</text>
              </svg>
            ) : (
              <img 
                src={animeBoy} 
                alt="Ariharan K C Profile Image" 
                className="home-profile-image" 
                onError={handleImageError} 
              />
            )}
          </div>
          
          <div className="home-tech-icons">
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className={`home-tech-icon ${tech.className}`}
                onMouseEnter={() => setActiveTech(tech)}
                onMouseLeave={() => setActiveTech(null)}
                role="button"
                aria-label={`Technology: ${tech.name}`}
              >
                <div className="tech-icon-inner" style={{ backgroundColor: tech.color }}>
                  {tech.icon}
                </div>
                <span className="home-tech-tooltip">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;