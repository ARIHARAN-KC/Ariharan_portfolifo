import { FaCode, FaServer, FaDatabase, FaCloud, FaBrain, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiFlask, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiPowerbi, SiTensorflow, SiPytorch } from 'react-icons/si';
import '../Styles/Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <h1 className="skills-title">
        My <span className="skills-title-highlight">Skills</span>
      </h1>

      <div className="skills-circle">
        <div className="skills-list">
          <div className="skill-card" data-skill="react">
            <SiReact className="skill-icon react-icon" aria-label="React" />
            <h3 className="skill-name">React</h3>
            <span className="skill-tooltip">Dynamic UI Development</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="django">
            <SiDjango className="skill-icon django-icon" aria-label="Django" />
            <h3 className="skill-name">Django</h3>
            <span className="skill-tooltip">Robust Backend Frameworks</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="flask">
            <SiFlask className="skill-icon flask-icon" aria-label="Flask" />
            <h3 className="skill-name">Flask</h3>
            <span className="skill-tooltip">Lightweight API Development</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="node">
            <SiNodedotjs className="skill-icon node-icon" aria-label="Node.js" />
            <h3 className="skill-name">Node.js</h3>
            <span className="skill-tooltip">Scalable Server-Side Logic</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="mongodb">
            <SiMongodb className="skill-icon mongodb-icon" aria-label="MongoDB" />
            <h3 className="skill-name">MongoDB</h3>
            <span className="skill-tooltip">NoSQL Database Management</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="mysql">
            <SiMysql className="skill-icon mysql-icon" aria-label="MySQL" />
            <h3 className="skill-name">MySQL</h3>
            <span className="skill-tooltip">Relational Database Queries</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="tensorflow">
            <SiTensorflow className="skill-icon tensorflow-icon" aria-label="TensorFlow" />
            <h3 className="skill-name">TensorFlow</h3>
            <span className="skill-tooltip">Machine Learning Framework</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="pytorch">
            <SiPytorch className="skill-icon pytorch-icon" aria-label="PyTorch" />
            <h3 className="skill-name">PyTorch</h3>
            <span className="skill-tooltip">Deep Learning Research</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="scikit-learn">
            <FaBrain className="skill-icon scikit-icon" aria-label="Scikit-learn" />
            <h3 className="skill-name">Scikit-learn</h3>
            <span className="skill-tooltip">ML Model Development</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="powerbi">
            <SiPowerbi className="skill-icon powerbi-icon" aria-label="Power BI" />
            <h3 className="skill-name">Power BI</h3>
            <span className="skill-tooltip">Data Visualization</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="git">
            <FaGitAlt className="skill-icon git-icon" aria-label="Git" />
            <h3 className="skill-name">Git</h3>
            <span className="skill-tooltip">Version Control</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-card" data-skill="prompt-engineering">
            <FaBrain className="skill-icon prompt-icon" aria-label="Prompt Engineering" />
            <h3 className="skill-name">Prompt Engineering</h3>
            <span className="skill-tooltip">AI-Driven Solutions</span>
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-details">
        <h2 className="skills-details-heading">Frontend Development</h2>
        <ul className="skills-details-list">
          <li>Creating responsive and user-friendly interfaces with React and JavaScript</li>
          <li>Building reusable UI components with JavaScript and hooks</li>
          <li>Applying modern styling with CSS, Tailwind, and styled-components</li>
          <li>Managing state with Redux, Context API, and hooks</li>
          <li>Optimizing performance with lazy loading and code splitting</li>
          <li>Ensuring accessibility and cross-browser compatibility</li>
        </ul>
      </div>

      <div className="skills-details">
        <h2 className="skills-details-heading">Backend Development</h2>
        <ul className="skills-details-list">
          <li>Building RESTful and APIs with Django, Flask, and Node.js</li>
          <li>Designing scalable databases with MongoDB, MySQL, and PostgreSQL</li>
          <li>Implementing authentication with JWT, OAuth, and sessions</li>
          <li>Developing scalable server-side logic with Express</li>
          <li>Integrating APIs with robust error handling and validation</li>
          <li>Exploring microservices with Flask and Node.js</li>
        </ul>
      </div>

      <div className="skills-details">
        <h2 className="skills-details-heading">Machine Learning</h2>
        <ul className="skills-details-list">
          <li>Developing ML models with <span className="tech-highlight">TensorFlow</span>, <span className="tech-highlight">PyTorch</span>, and <span className="tech-highlight">Scikit-learn</span></li>
          <li>Preprocessing and analyzing data with Pandas and NumPy</li>
          <li>Training and evaluating models for classification, regression, and clustering</li>
          <li>Deploying ML models using Flask or FastAPI</li>
          <li>Optimizing models with hyperparameter tuning</li>
          <li>Working with deep learning for computer vision and NLP</li>
        </ul>
      </div>

      <div className="skills-details">
        <h2 className="skills-details-heading">Prompt Engineering</h2>
        <ul className="skills-details-list">
          <li>
            Crafting effective prompts for LLMs like <span className="tech-highlight">ChatGPT</span>, <span className="tech-highlight">Gemini</span>, <span className="tech-highlight">Grok</span>, and <span className="tech-highlight">Deepseek</span>
          </li>
          <li>Optimizing AI outputs for specific use cases with fine-tuned prompts</li>
          <li>Integrating LLM capabilities into web applications</li>
          <li>Experimenting with prompt chaining and contextual inputs</li>
          <li>Using AI for code generation, debugging, and automation</li>
          <li>Staying updated with advancements in LLM technologies</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;