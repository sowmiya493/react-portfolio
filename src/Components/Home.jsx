import React from 'react';
import './Home.css';
import profileImage from './sowmiya.jpg'; // Replace with your actual image file path
import backgroundImg from './bgclr.jpg'; // Replace with your background image file path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import resumePdf from './resume.pdf'; // Replace with your actual resume PDF file path

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="intro">
        <div className="profile">
          <div className="profile-img">
            <img
              src={profileImage}
              alt="Sowmiya S"
              className="profile-photo"
            />
            <div className="glow-effect"></div>
          </div>
          <div className="intro-text">
            <h1 className="intro-title">About Me</h1>
            <p className="intro-description">
              Hello! I'm a dedicated and enthusiastic student currently in my final year of studies, with a strong foundation in cloud computing and web development. My expertise spans across major cloud platforms like Google Cloud Platform (GCP) and Amazon Web Services (AWS), as well as DevOps practices that streamline and optimize development workflows. Additionally, I have hands-on experience in building dynamic and responsive web applications using React. I am passionate about leveraging technology to solve real-world problems and am constantly seeking opportunities to expand my knowledge and skills. As I prepare to graduate, I am actively looking for job or internship opportunities where I can apply my technical abilities and collaborative mindset to contribute to innovative projects and teams. If you're looking for someone who is not only technically proficient but also motivated and adaptable, I would love to connect and explore potential opportunities.
            </p>
            <div className="social-links">
              <a
                href="mailto:sowmiyaasaravanakumar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="tel:+919629772646"
                className="social-link"
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a
                href="https://www.linkedin.com/in/sowmiya-s-69651824a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/sowmiya493/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <a className="resume-link" href={resumePdf} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
