import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNodedotjs, SiPython, SiFlask, SiStreamlit, SiDjango, SiMongodb, SiSqlite, SiTensorflow } from 'react-icons/si';
import '../Styles/Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">
        My <span className="projects-heading-highlight">Projects</span>
      </h1>

      <div className="projects-container">
        <div className="project-item">
          <img src="https://private-user-images.githubusercontent.com/126934697/457247171-c62b48c1-91cc-4efa-946a-fa405e9189fd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzODYzODAsIm5iZiI6MTc1MTM4NjA4MCwicGF0aCI6Ii8xMjY5MzQ2OTcvNDU3MjQ3MTcxLWM2MmI0OGMxLTkxY2MtNGVmYS05NDZhLWZhNDA1ZTkxODlmZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQxNjA4MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMDNmMzZmNjk1NjllYTFhYmM2OGRmNWRkMmZiZTZhMmNjMWFkODRlYzMxMjQ4MTM5NTZkYzMwYTQ5NTRmNGY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.tQHZhn8kuw2D8T2NpDqHeqSAgWGHUEK10LhTMX6aXN4" alt="MedScanAI Interface" className="project-image" />
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
          <img src="https://private-user-images.githubusercontent.com/126934697/455226285-9efe854a-114b-4437-a381-4645c75e321e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzODY0MTksIm5iZiI6MTc1MTM4NjExOSwicGF0aCI6Ii8xMjY5MzQ2OTcvNDU1MjI2Mjg1LTllZmU4NTRhLTExNGItNDQzNy1hMzgxLTQ2NDVjNzVlMzIxZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQxNjA4MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YTc4NDkzZWU1MmY4OWVkYWJlMDNmZTEwMzRjNWQ3MzE5YzczZjU2MjZjZTJlMzMxYTljZjczNzI1YmMzZjk3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.879Bzu4EieD27MdiYHjoKfK6s_kg1QCo54iIF4guH-E" alt="Sign Language Recognition Interface" className="project-image" />
          <div className="project-details">
            <h2 className="project-name">Sign Language Recognition</h2>
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
          <img src="https://private-user-images.githubusercontent.com/126934697/388307776-a2e38412-4375-4c82-85f0-0cf854f9f7e6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzODY0NzksIm5iZiI6MTc1MTM4NjE3OSwicGF0aCI6Ii8xMjY5MzQ2OTcvMzg4MzA3Nzc2LWEyZTM4NDEyLTQzNzUtNGM4Mi04NWYwLTBjZjg1NGY5ZjdlNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQxNjA5MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZjFjMjI0M2JhZjY4MmI5MzkwYjM1Mzg0OTRiZWEwMDc2Njc1MmEwODU5Yjc2MjdjMDViMjkxZTNjYWY1MzZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gqXh0mj8CGPYLhaZbpeHRgpdpCGdUuZ2-oKIuErknAQ" alt="StreamHUB API Interface" className="project-image" />
          <div className="project-details">
            <h2 className="project-name">StreamHUB API</h2>
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
          <img src="https://private-user-images.githubusercontent.com/126934697/396130956-6a016ca7-e612-44d6-b019-8a7319fdba96.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzODY1MjEsIm5iZiI6MTc1MTM4NjIyMSwicGF0aCI6Ii8xMjY5MzQ2OTcvMzk2MTMwOTU2LTZhMDE2Y2E3LWU2MTItNDRkNi1iMDE5LThhNzMxOWZkYmE5Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQxNjEwMjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZWQ0NWY1YjU3MzgzNDI3ZTNlMTQzZjc0ZTI0YzVmNGVhNzNlM2UxNDJlNTY3YWQ4OTJkMjk2OWRkNDlkYmJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.20t_Y4U9dheP0kKVh_Vk5AwZBzM-1anbM8Q9tPINL8I" alt="KnowHUB Platform" className="project-image" />
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
          <img src="https://private-user-images.githubusercontent.com/126934697/358952031-2d6451a5-602b-49a2-9e7e-9eab0afd53d2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzODY1NjMsIm5iZiI6MTc1MTM4NjI2MywicGF0aCI6Ii8xMjY5MzQ2OTcvMzU4OTUyMDMxLTJkNjQ1MWE1LTYwMmItNDlhMi05ZTdlLTllYWIwYWZkNTNkMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQxNjExMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYjcwOGIyNTgyNWM5ZTZiZGIxNDQ1OTc0YzgxOTRlYmU5NzBiNTNiYjU3NWVhYWQ2NzRmYjdlNWZiNjRhNjA5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.-ryrr2Pun7mr_oMbFUYgD8C67t_5JGbLjzHZgMCxWOc" alt="Pneumonia Classification Interface" className="project-image" />
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
          <img src="https://private-user-images.githubusercontent.com/126934697/353327010-321cb5f4-d8ee-469e-8a7e-d0fe1f2ce0a6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzODY2NjMsIm5iZiI6MTc1MTM4NjM2MywicGF0aCI6Ii8xMjY5MzQ2OTcvMzUzMzI3MDEwLTMyMWNiNWY0LWQ4ZWUtNDY5ZS04YTdlLWQwZmUxZjJjZTBhNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQxNjEyNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YzQxODJkNjAyMDAwMWIwNGM4N2EzN2M2NjU1MjEzY2Y3NjRkYzEyMDI5N2MyNzkzYzg5OWMwZWYxZTRjMjZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GsP7xZ1pt9F4l3Zx66Kvl8x4KEQtBFHOW9hQUjOZGpo" alt="Sales Analysis Dashboard" className="project-image" />
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
          <img src="https://private-user-images.githubusercontent.com/126934697/354094476-e20c14e1-fe78-4754-858a-5239eb1cb096.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzODY3MDksIm5iZiI6MTc1MTM4NjQwOSwicGF0aCI6Ii8xMjY5MzQ2OTcvMzU0MDk0NDc2LWUyMGMxNGUxLWZlNzgtNDc1NC04NThhLTUyMzllYjFjYjA5Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQxNjEzMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MGNlZjJjMmE0MTBmYjQxMWY2M2ZjNzA2MDFhMjYzYTEyZDAxZTcxZTQyZjc4ODMxYjk4OWIxOWIzZmViMWYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.FK8LzCa4Nu3Crxi2TuTbydNKa3iTbDlnGOxbCWgK7hM" alt="Project Management Dashboard" className="project-image" />
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