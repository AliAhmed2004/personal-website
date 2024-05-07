import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="animated-background"></div>
      <div className="content">
        <h1>Hi there👋!</h1>
        <p>
          Hi there! I'm Ali, a Computer Science student at Wilfrid Laurier
          University with a minor in Data Analytics and specialization in Big
          Data Systems. I am passionate about software development, AI, and
          machine learning, continuously exploring innovative approaches in
          these domains. When I'm not immersed in technology, I enjoy playing
          video games. I'm always eager to connect with like-minded individuals,
          so feel free to reach out through my social media or take a look at my
          resume below!
        </p>
        <div className="social-links">
          <a href="https://github.com/AliAhmed2004" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/ali_mujtaba.143/"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-mujtaba-ahmed-8a017b246/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/ali_s_resume.pdf`}
            aria-label="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFile} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
