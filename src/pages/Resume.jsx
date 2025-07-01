import React from 'react';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  SiReact, SiDjango, SiFlask, SiNodedotjs, SiMongodb, SiMysql,
  SiPowerbi, SiTailwindcss, SiBootstrap, SiJirasoftware
} from 'react-icons/si';
import {
  DiPython, DiJava, DiHtml5, DiCss3, DiGit
} from 'react-icons/di';
import { FaBrain } from 'react-icons/fa';
import '../Styles/Resume.css';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ariharan-resume.pdf'; // File must be in public/
    link.download = 'Ariharan-KC-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-section">
      <h1 className="resume-title">
        Ariharan K C <span className="resume-title-highlight">Resume</span>
      </h1>

      <div className="resume-header">
        <h2>Download Resume</h2>
        <button className="resume-download-button" onClick={handleDownload}>
          <FaDownload /> Download PDF
        </button>
      </div>

      <div className="resume-content">
        <div className="resume-summary">
          <h2 className="resume-item-title">Summary</h2>
          <p>
            Full-Stack Developer with strong web and AI/ML skills. Proficient in Django, Flask, MERN stack, React, TensorFlow, and data analysis. Eager to solve real-world problems and grow in innovative teams.
          </p>
        </div>

        <div className="resume-workshops">
          <h2 className="resume-item-title">Workshop/Seminar</h2>
          <ul className="resume-item-description">
            <li>HackXelerate'25 - National Level Hackathon</li>
            <li>AI Conclave Hackathon - 2025</li>
            <li>3L Workshop: Language and Literature for Life</li>
            <li>Workotopia International Webinar - Sep 2022</li>
          </ul>
        </div>

        <div className="resume-experience">
          <h2 className="resume-item-title">Project Experience</h2>
          <ul className="resume-item-description">
            <li>
              <strong>Nexa-AI: Autonomous AI Software Engineer</strong> | Dec 2023 - Present
              <ul>
                <li>LLM-powered task decomposition and autonomous development</li>
                <li>Smart code generation, research integration, and AI pair programming</li>
              </ul>
            </li>
            <li>
              <strong>AI-Powered Auto-Dubbing Streaming Web</strong> | Aug 2024 - Mar 2025
              <ul>
                <li>AI-driven video dubbing: Whisper, Google Translate, gTTS, FFmpeg</li>
                <li>User auth, YouTube API, robust media processing</li>
              </ul>
            </li>
            <li>
              <strong>Online Project Tracking System</strong> | Jan 2024 - May 2024
              <ul>
                <li>Team collaboration, analytics, real-time task tracking</li>
              </ul>
            </li>
            <li>
              <strong>Internship - EG Technologies</strong> | Jun 2023 - Jul 2023
              <ul>
                <li>SDLC understanding, debugging, team collaboration</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resume-education">
          <h2 className="resume-item-title">Education</h2>
          <ul className="resume-item-description">
            <li><strong>MCA</strong> - M. Kumarasamy College of Engineering | 2024 – 2026</li>
            <li><strong>B.Sc Computer Science</strong> - K.S.R College | 2021 – 2024</li>
          </ul>
        </div>

        <div className="resume-skills">
          <h2 className="resume-item-title">Skills</h2>
          <div className="skills-grid">
            {[{
              icon: <DiPython />, label: 'Python'
            }, {
              icon: <DiJava />, label: 'Java'
            }, {
              icon: <DiHtml5 />, label: 'HTML'
            }, {
              icon: <DiCss3 />, label: 'CSS'
            }, {
              icon: <SiReact />, label: 'React'
            }, {
              icon: <SiDjango />, label: 'Django'
            }, {
              icon: <SiFlask />, label: 'Flask'
            }, {
              icon: <SiNodedotjs />, label: 'Node.js'
            }, {
              icon: <SiMongodb />, label: 'MongoDB'
            }, {
              icon: <SiMysql />, label: 'MySQL'
            }, {
              icon: <SiTailwindcss />, label: 'Tailwind CSS'
            }, {
              icon: <SiBootstrap />, label: 'Bootstrap'
            }, {
              icon: <DiGit />, label: 'Git'
            }, {
              icon: <SiPowerbi />, label: 'Power BI'
            }, {
              icon: <SiJirasoftware />, label: 'JIRA'
            }, {
              icon: <FaBrain />, label: 'Machine Learning'
            }].map(({ icon, label }, i) => (
              <div key={i} className="skill-item" title={label}>
                <span className="skill-icon">{icon}</span> {label}
              </div>
            ))}
          </div>
        </div>

        <div className="resume-certifications">
          <h2 className="resume-item-title">Certifications</h2>
          <ul className="resume-item-description">
            <li>Oracle Cloud AI Foundations Associate - 2025</li>
            <li>C++ - Bharathidasan University (IECD)</li>
            <li>Python - GUVI</li>
            <li>Power BI - Simplilearn</li>
          </ul>
        </div>

        <div className="resume-links">
          <h2 className="resume-item-title">Connect</h2>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ariharankc07/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/ARIHARAN-KC"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
