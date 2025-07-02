import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNodedotjs, SiPython, SiFlask, SiStreamlit, SiDjango, SiMongodb, SiSqlite, SiTensorflow } from 'react-icons/si';
import '../Styles/Projects.css';
import mediScanAI from '../assets/mediScanAI_img.png';
import slttcImage from '../assets/SLTTC_img.png';
import streamHubImage from '../assets/stream_HUB_img.png';
import knowHubImage from '../assets/KnownHub_img.png';
import pneumoniaImage from '../assets/PCC_img.png';
import salesImage from '../assets/SMR.png';
import projectMgmtImage from '../assets/PMR_img.png';

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">
        My <span className="projects-heading-highlight">Projects</span>
      </h1>

      <div className="projects-container">
        <div className="project-item">
          <img src={mediScanAI} alt='mediScanAi platform' className='project-image'/>
          <div className="project-details">
            <h2 className="project-name">MedScanAI</h2>
            <p className="project-description">An AI-powered web app for medical image classification, detecting conditions like brain tumors and skin cancer using deep learning.</p>
            <div className="project-tech">
              <span className="project-tech-tag">TensorFlow</span>
              <span className="project-tech-tag">Django</span>
              <span className="project-tech-tag">Python</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/ARIHARAN-KC/MedScanAI" target="_blank" rel="noopener noreferrer" className="project-action" aria-label="View MedScanAI code on GitHub">
                <FaGithub /> Code
              </a>
              <a href="#" className="project-action" aria-label="MedScanAI live demo unavailable">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src={slttcImage} alt='SLTTC platform' className='project-image'/>
          <div className="project-details">
            <h2 className="project-name">Sign Language Recognition To Text Conversion</h2>
            <p className="project-description">A machine learning system to recognize sign language gestures from video inputs using computer vision.</p>
            <div className="project-tech">
              <span className="project-tech-tag">TensorFlow</span>
              <span className="project-tech-tag">Python</span>
              <span className="project-tech-tag">OpenCV</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/ARIHARAN-KC/sign-language-recognition" target="_blank" rel="noopener noreferrer" className="project-action" aria-label="View Sign Language Recognition code on GitHub">
                <FaGithub /> Code
              </a>
              <a href="#" className="project-action" aria-label="Sign Language Recognition live demo unavailable">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src={streamHubImage} alt='streamHUb Platform' className='project-image'/>
          <div className="project-details">
            <h2 className="project-name">StreamHUB</h2>
            <p className="project-description">A React-based API interface for video streaming and content management with real-time features.</p>
            <div className="project-tech">
              <span className="project-tech-tag">React</span>
              <span className="project-tech-tag">Node.js</span>
              <span className="project-tech-tag">REST API</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/ARIHARAN-KC/streamHUB-API--reactjs" target="_blank" rel="noopener noreferrer" className="project-action" aria-label="View StreamHUB API code on GitHub">
                <FaGithub /> Code
              </a>
              <a href="#" className="project-action" aria-label="StreamHUB API live demo unavailable">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src={knowHubImage} alt="KnowHUB Platform" className="project-image" />
          <div className="project-details">
            <h2 className="project-name">KnowHUB</h2>
            <p className="project-description">A knowledge-sharing platform built with React, enabling collaboration and access to educational resources.</p>
            <div className="project-tech">
              <span className="project-tech-tag">React</span>
              <span className="project-tech-tag">Tailwind CSS</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/ARIHARAN-KC/KnowHUB" target="_blank" rel="noopener noreferrer" className="project-action" aria-label="View KnowHUB code on GitHub">
                <FaGithub /> Code
              </a>
              <a href="#" className="project-action" aria-label="KnowHUB live demo unavailable">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src={pneumoniaImage} alt="Pneumonia Classification Interface" className="project-image" />
          <div className="project-details">
            <h2 className="project-name">Pneumonia Classification ML Web</h2>
            <p className="project-description">A web app using TensorFlow to classify pneumonia from chest X-ray images with a React frontend.</p>
            <div className="project-tech">
              <span className="project-tech-tag">TensorFlow</span>
              <span className="project-tech-tag">StreamLit</span>
              <span className="project-tech-tag">Pillow</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/ARIHARAN-KC/pneumonia-classification-ML-web" target="_blank" rel="noopener noreferrer" className="project-action" aria-label="View Pneumonia Classification code on GitHub">
                <FaGithub /> Code
              </a>
              <a href="#" className="project-action" aria-label="Pneumonia Classification live demo unavailable">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src={salesImage} alt="Sales Analysis Dashboard" className="project-image" />
          <div className="project-details">
            <h2 className="project-name">Sales Analysis Report</h2>
            <p className="project-description">A data visualization tool for analyzing sales performance using interactive Python dashboards.</p>
            <div className="project-tech">
              <span className="project-tech-tag">Power BI</span>
              <span className="project-tech-tag">Pandas</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/ARIHARAN-KC/Sales-Analysis-report" target="_blank" rel="noopener noreferrer" className="project-action" aria-label="View Sales Analysis Report code on GitHub">
                <FaGithub /> Code
              </a>
              <a href="#" className="project-action" aria-label="Sales Analysis Report live demo unavailable">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src={projectMgmtImage} alt="Project Management Dashboard" className="project-image" />
          <div className="project-details">
            <h2 className="project-name">Project Management Analysis</h2>
            <p className="project-description">A Django-based tool for tracking project progress with data-driven insights and visualizations.</p>
            <div className="project-tech">
              <span className="project-tech-tag">Power BI</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/ARIHARAN-KC/project-management-analysis" target="_blank" rel="noopener noreferrer" className="project-action" aria-label="View Project Management Analysis code on GitHub">
                <FaGithub /> Code
              </a>
              <a href="#" className="project-action" aria-label="Project Management Analysis live demo unavailable">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-closing">
        <p className="projects-closing-text">
          Want to see more? Check out my GitHub for additional projects and contributions.
        </p>
        <a href="https://github.com/ARIHARAN-KC" target="_blank" rel="noopener noreferrer" className="project-action github-profile" aria-label="View GitHub profile">
          <FaGithub /> View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Projects;