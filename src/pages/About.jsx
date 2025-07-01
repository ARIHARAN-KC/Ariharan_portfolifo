import { FaCode, FaServer, FaDatabase, FaCloud, FaBrain, FaRobot } from 'react-icons/fa';
import { SiDjango, SiFlask, SiReact, SiNodedotjs, SiTensorflow, SiPytorch } from 'react-icons/si';
import '../Styles/About.css';

function About() {
  const techStack = [
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <FaBrain />, name: "Scikit-learn" },
    { icon: <FaRobot />, name: "LLMs" }
  ];

  return (
    <section className="about-section">
      <div className="about-bg-pattern"></div>
      
      <h1 className="about-heading">
        About <span className="about-heading-highlight">Me</span>
      </h1>

      <div className="about-container">
        <div className="about-profile">
          <div className="about-profile-content">
            <h2 className="about-subheading">
              <span className="about-subheading-decoration"></span>
              Who I Am
            </h2>
            <p className="about-text">
              I'm a passionate full-stack developer and AI/ML engineer with expertise in building intelligent, AI-powered web applications. My technical foundation spans web development, machine learning, and advanced AI integration.
            </p>
            <p className="about-text">
              What began as curiosity about how websites work has evolved into a deep expertise in full-stack systems, machine learning model development, and leveraging large language models to create innovative solutions.
            </p>
            <p className="about-text">
              Continuously learning and contributing to open-source AI and web projects, I'm excited to combine my skills in software development, data science, and prompt engineering to deliver impactful solutions.
            </p>
            
            <div className="about-tech-stack">
              {techStack.map((tech, index) => (
                <div key={index} className="about-tech-item">
                  <div className="about-tech-icon" aria-label={tech.name}>{tech.icon}</div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-expertise">
          <h2 className="about-subheading">
            <span className="about-subheading-decoration"></span>
            What I Do
          </h2>
          <div className="about-skills">
            <div className="about-skill">
              <div className="about-skill-icon-container">
                <FaCode className="about-skill-icon" />
                <div className="about-skill-icon-bg"></div>
              </div>
              <h3 className="about-skill-title">Frontend Development</h3>
              <p className="about-skill-text">
                Building responsive, accessible interfaces with React, TypeScript, and modern CSS frameworks that prioritize user experience.
              </p>
            </div>
            
            <div className="about-skill">
              <div className="about-skill-icon-container">
                <FaServer className="about-skill-icon" />
                <div className="about-skill-icon-bg"></div>
              </div>
              <h3 className="about-skill-title">Backend Systems</h3>
              <p className="about-skill-text">
                Developing robust APIs and server architecture using Django, Flask, and Node.js with proper authentication and security.
              </p>
            </div>
            
            <div className="about-skill">
              <div className="about-skill-icon-container">
                <FaDatabase className="about-skill-icon" />
                <div className="about-skill-icon-bg"></div>
              </div>
              <h3 className="about-skill-title">Data Management</h3>
              <p className="about-skill-text">
                Designing efficient database structures with PostgreSQL, MySQL, and MongoDB, optimized for performance and scalability.
              </p>
            </div>
            
            <div className="about-skill">
              <div className="about-skill-icon-container">
                <FaCloud className="about-skill-icon" />
                <div className="about-skill-icon-bg"></div>
              </div>
              <h3 className="about-skill-title">Cloud & DevOps</h3>
              <p className="about-skill-text">
                Implementing CI/CD pipelines and cloud solutions on AWS, with containerization and infrastructure as code.
              </p>
            </div>
            
            <div className="about-skill">
              <div className="about-skill-icon-container">
                <FaBrain className="about-skill-icon" />
                <div className="about-skill-icon-bg"></div>
              </div>
              <h3 className="about-skill-title">AI/ML Development</h3>
              <p className="about-skill-text">
                Developing and deploying machine learning models using TensorFlow, PyTorch, and Scikit-learn, with expertise in data preprocessing, model training, and evaluation.
              </p>
            </div>
            
            <div className="about-skill">
              <div className="about-skill-icon-container">
                <FaRobot className="about-skill-icon" />
                <div className="about-skill-icon-bg"></div>
              </div>
              <h3 className="about-skill-title">AI Integration</h3>
              <p className="about-skill-text">
                Engineering effective prompts and workflows for LLMs like ChatGPT and Gemini to enhance applications with AI capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-philosophy">
        <h3 className="about-philosophy-title">
          <span className="about-subheading-decoration"></span>
          My Development Philosophy
        </h3>
        <div className="about-philosophy-content">
          <p className="about-philosophy-text">
            I believe in building software that's not just functional but impactful, combining clean architecture, thorough documentation, and maintainable code with cutting-edge AI/ML techniques.
          </p>
          <p className="about-philosophy-text">
            My approach integrates traditional engineering principles with innovative AI/ML methodologies, using machine learning and large language models to amplify productivity and creativity.
          </p>
          <p className="about-philosophy-text">
            As I grow as a professional AI/ML and web developer, I'm committed to continuous learning, collaboration, and delivering solutions that drive real-world value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;