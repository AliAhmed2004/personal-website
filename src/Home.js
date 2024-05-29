import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="content">
      <h1>
        Hi there, I'm <span className="name-gradient">Ali Ahmed</span>! 👋
      </h1>
      <p>
        I'm a Computer Science student at Wilfrid Laurier University with a
        minor in Data Analytics and specialization in Big Data Systems. I am
        passionate about software development, AI, and machine learning,
        continuously exploring innovative approaches in these domains. When I'm
        not immersed in technology, I enjoy playing video games.
      </p>
      <div className="programming-languages">
        <span>Languages I use:</span>
        <code>Python</code> <code>JavaScript</code> <code>Java</code>
        <code>HTML</code> <code>CSS</code> <code>SQL</code> <code>R</code>
        <code>Sass</code> <code>C#</code> <code>C++</code>
      </div>
      <div className="programming-languages">
        <span>Frameworks I use:</span>
        <code>Node.js</code> <code>MongoDB</code> <code>React</code>
        <code>Bootstrap</code> <code>Express</code> <code>Tailwind CSS</code>
      </div>
      <div className="certifications">
        <span>Certifications:</span>
        <a
          href="https://www.udemy.com/certificate/UC-51adb8d0-edc3-4efc-83ef-c868d08d0495/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Complete Machine Learning and Data Science Bootcamp
        </a>
        <p className="outreach-message">
          Feel free to reach out through my social media or take a look at my
          resume below!
        </p>
      </div>
      <div className="social-links">
        <a href="https://github.com/AliAhmed2004" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/ali_mujtaba.143"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-mujtaba-ahmed/"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href={`${process.env.PUBLIC_URL}/aliResumeFinal.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <FontAwesomeIcon icon={faFile} />
        </a>
      </div>
    </div>
  );
};

export default Home;
