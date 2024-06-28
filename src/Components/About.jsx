import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './About.css';
import backgroundImg from './background.jpg'; // Replace with your actual image file path

const About = () => {
  const [activeTab, setActiveTab] = useState('technicalSkills');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  // Define URLs for each project
  const projectLinks = {
    FREEWINGS: 'https://github.com/sowmiya493/tourapp',
    SERVERLESS: 'https://github.com/sowmiya493/Product-AWS',
    SPEECH_TO_TEXT: 'https://example.com/speech-to-text',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'technicalSkills':
        return (
          <div className="section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-content">
              <p>Cloud Computing (GCP,AWS)</p>
              <p>Web Development (React,JavaScript,HTML,CSS)</p>
              <p>Programming(Python,Java)</p>
              <p>DevOps (CI/CD,Docker,Gitactions)</p>
            </div>
          </div>
        );
      case 'softSkills':
        return (
          <div className="section">
            <h2 className="section-title">Soft Skills</h2>
            <div className="section-content">
              <p>Problem-Solving</p>
              <p>Team Collaboration</p>
              <p>Adaptability</p>
              <p>Communication</p>
            </div>
          </div>
        );
      case 'languages':
        return (
          <div className="section">
            <h2 className="section-title">Languages</h2>
            <div className="section-content">
              <p>English</p>
              <p>Tamil</p>
              <p>Japanese-Basic Level</p>
            </div>
          </div>
        );
      case 'internships':
        return (
          <div className="section">
            <h2 className="section-title">Internships</h2>
            <Slider {...sliderSettings}>
              <div className="internship-item">
                <h1 className="company-name">REPUTE</h1>
                <div className="internship-details">
                  <p className="date">10/09/2023-23/09/2023</p>
                  <p className="description">Completed 15-day internship in React web application development at a reputed firm, gaining valuable experience in frontend development and enhancing proficiency in React framework.</p>
                </div>
              </div>
              <div className="internship-item">
                <h1 className="company-name">BRAINERY SPOT TECHNOLOGY</h1>
                <div className="internship-details">
                  <p className="date">05/01/2023-20/01/2023</p>
                  <p className="description">Specializing in HTML and CSS. Proficient in responsive design, CSS frameworks, and semantic HTML. Applied principles of web accessibility.</p>
                </div>
              </div>
            </Slider>
          </div>
        );
      case 'projects':
        return (
          <div className="section">
            <h2 className="section-title">Projects</h2>
            <Slider {...sliderSettings}>
              <div className="project-item">
                <h1 className="project-name">
                  <a href={projectLinks.FREEWINGS} target="_blank" rel="noopener noreferrer">FREEWINGS (WEB APPLICATION)</a> <span className="project-date"><a href={projectLinks.FREEWINGS} target="_blank" rel="noopener noreferrer">Link</a></span>
                </h1>
                <h4 className="project-description">To develop React and Django-powered tour application utilizing retransform techniques, showcasing proficiency in full-stack development, enhancing user experience, and ensuring seamless functionality.</h4>
              </div>
              <div className="project-item">
                <h1 className="project-name">
                  <a href={projectLinks.SERVERLESS} target="_blank" rel="noopener noreferrer">SERVERLESS WEB APPLICATION</a> <span className="project-date"><a href={projectLinks.SERVERLESS} target="_blank" rel="noopener noreferrer">Link</a></span>
                </h1>
                <h4 className="project-description">Developed a serverless web app on AWS using AWS Amplify (frontend), Lambda (backend compute), API Gateway (API management), and DynamoDB (NoSQL storage). Demonstrated expertise in scalable, cost-efficient solutions with top performance and availability.</h4>
              </div>
              <div className="project-item">
                <h1 className="project-name">
                  <a href={projectLinks.SPEECH_TO_TEXT} target="_blank" rel="noopener noreferrer">SPEECH-TO-TEXT IN AWS</a> <span className="project-date"><a href={projectLinks.SPEECH_TO_TEXT} target="_blank" rel="noopener noreferrer">Link</a></span>
                </h1>
                <h4 className="project-description">Implemented text-to-speech functionality on AWS using Amazon Transcribe for text processing and an S3 bucket for audio storage. Successfully integrated these services to enable seamless conversion of text into spoken audio, showcasing proficiency in AWS cloud services and audio processing technologies.</h4>
              </div>
            </Slider>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className="title">About Me</h1>
      <p className="description">
        Hi there! I'm Sowmiya S, an enthusiastic and committed student in my final year of studies. I have a robust background in cloud computing and web development, and I'm eager to apply my knowledge and skills in these areas.
      </p>

      <div className="tabs">
        <button className={activeTab === 'technicalSkills' ? 'active' : ''} onClick={() => setActiveTab('technicalSkills')}>Technical Skills</button>
        <button className={activeTab === 'softSkills' ? 'active' : ''} onClick={() => setActiveTab('softSkills')}>Soft Skills</button>
        <button className={activeTab === 'languages' ? 'active' : ''} onClick={() => setActiveTab('languages')}>Languages</button>
        <button className={activeTab === 'internships' ? 'active' : ''} onClick={() => setActiveTab('internships')}>Internships</button>
        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
      </div>

      {renderContent()}
    </div>
  );
};

export default About;
