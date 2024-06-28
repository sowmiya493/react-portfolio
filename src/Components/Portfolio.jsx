import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css'; // Your CSS file for styling
import azureCertificate from './azure.png';
import gcpCertificate from './gcp.PNG';
import dockerCertificate from './docker.PNG';
import docker1Certificate from './docker1.png';
import freeCertificate from './free.PNG';
import awsBeginnersCertificate from './AWS beginners.png';
import uiUxCertificate from './ui and ux.PNG';
import reactCertificate from './react.PNG';
import reactJsCertificate from './reactjs.png';
import pythonCertificate from './python.png';
import backgroundImage from './technicalSkills.jpg'; // Adjust path based on your project structure

const Certifications = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  // Certificate images array
  const certificateImages = [
    azureCertificate,
    gcpCertificate,
    dockerCertificate,
    docker1Certificate,
    freeCertificate,
    awsBeginnersCertificate,
    uiUxCertificate,
    reactCertificate,
    reactJsCertificate,
    pythonCertificate,
  ];

  return (
    <div className="certifications" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="certifications-title">Certifications</h1>
      <Slider {...sliderSettings}>
        {certificateImages.map((certImg, index) => (
          <div key={index} className="certificate-item">
            <img src={certImg} alt={`Certificate ${index + 1}`} className="certificate-image" />
            <div className="glow-effect"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certifications;
