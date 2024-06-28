import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me through any of the following channels:</p>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:sowmiyaasaravanakumar@gmail.com" target="_blank" rel="noopener noreferrer">sowmiyaasaravanakumar@gmail.com</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} />
          <span>+91 9629772646</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/sowmiya-s-69651824a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/sowmiya493/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
