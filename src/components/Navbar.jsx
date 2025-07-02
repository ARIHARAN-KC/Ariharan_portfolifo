import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import '../Styles/Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoError = () => {
    setLogoError(true);
  };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/resume", name: "Resume" },
    { path: "/contact", name: "Contact" },
  ];

  const socialItems = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/ARIHARAN-KC", 
      label: "Visit Ariharan's GitHub Profile", 
      title: "GitHub" 
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/ariharankc07/", 
      label: "Visit Ariharan's LinkedIn Profile", 
      title: "LinkedIn" 
    },
    { 
      icon: <FaXTwitter  />, 
      url: "https://x.com/AriharanKC_007", 
      label: "Visit Ariharan's X Profile", 
      title: "X" 
    },
    { 
      icon: <HiOutlineMail />, 
      url: "mailto:ariharankc@gmail.com", 
      label: "Email Ariharan K C", 
      title: "Email" 
    },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Ariharan K C Homepage">
          {logoError ? (
            <div className="navbar-logo-placeholder">
              <span>AK</span>
            </div>
          ) : (
            <img 
              src={Logo} 
              alt="Ariharan K C Logo" 
              className="navbar-logo-image" 
              onError={handleLogoError} 
            />
          )}
         { /*<span className="logo-text">Ariharan K C | AI Dev</span>*/}
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className={`navbar-menu-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {item.name}
              <span className="nav-item-underline"></span>
            </Link>
          ))}

          {/* Mobile social menu */}
          {isMobileMenuOpen && (
            <div className="mobile-social-menu">
              {socialItems.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="navbar-social-icon"
                  aria-label={social.label}
                  title={social.title}
                >
                  {social.icon}
                  <span className="social-tooltip">{social.title}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="navbar-social">
          {socialItems.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-social-icon"
              aria-label={social.label}
              title={social.title}
            >
              {social.icon}
              <span className="social-tooltip">{social.title}</span>
            </a>
          ))}
        </div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="toggle-icon" />
          ) : (
            <FaBars className="toggle-icon" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;