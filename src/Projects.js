import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import stock from "./stock.jpg";
import ai from "./ai.jpg";
import hub from "./hub.jpg";
import heart from "./heart.jpg";
import ios from "./ios.jpg";
import knight from "./knight.jpg";

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
        <img src={heart} alt="Heart Disease Model" className="project-image" />
        <div className="project-info">
          <h3>Heart Disease Prediction</h3>
          <p>
            A machine learning model used to predict whether or not someone has
            heart disease based on their medical history
          </p>
          <a
            href="https://github.com/AliAhmed2004/Machine-Learning-Model---Heart-Disease-Prediction"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src={ai} alt="AI" className="project-image" />
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
            className="project-link"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://image-generator-openai.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FontAwesomeIcon icon={faLaptopCode} /> Demo
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
            className="project-link"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://lsshub.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FontAwesomeIcon icon={faLaptopCode} /> Demo
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src={ios} alt="ios17UI" className="project-image" />
        <div className="project-info">
          <h3>iOS 17 UI</h3>
          <p>A design of the iOS-17 lockscreen UI using react native</p>
          <a
            href="https://github.com/AliAhmed2004/ios17-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src={knight} alt="knight" className="project-image" />
        <div className="project-info">
          <h3>Knight's Tour</h3>
          <p>
            An algorithm that moves the knight on a chessboard such that it
            visits every square exactly once
          </p>
          <a
            href="https://github.com/onefouroneIndustries/KnightsTour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://aknightstour.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FontAwesomeIcon icon={faLaptopCode} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
