import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import stock from "./stock.jpg";
import ai from "./ai.jpg";
import hub from "./hub.jpg";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-card">
        <img
          src={stock}
          alt="Twitter Stock Analysis"
          className="project-image"
        />
        <div className="project-info">
          <h3>Twitter Stock Analysis</h3>
          <p>A machine learning model used to analyze Twitter stocks</p>
          <a
            href="https://github.com/AliAhmed2004/Twitter-Stock-Analysis--Machine-Learning-Model"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src={ai} alt="AI Image Generator" className="project-image" />
        <div className="project-info">
          <h3>AI Image Generator</h3>
          <p>
            A project that uses the OpenAI API to generate images based on user
            prompts
          </p>
          <a
            href="https://github.com/AliAhmed2004/ai-image-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img
          src={hub}
          alt="Laurier Student Study Hub"
          className="project-image"
        />
        <div className="project-info">
          <h3>Laurier Student Study Hub</h3>
          <p>
            A platform for students to connect, collaborate, and support each
            other academically
          </p>
          <a
            href="https://github.com/abrarmurad416/laurier-student-study-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
