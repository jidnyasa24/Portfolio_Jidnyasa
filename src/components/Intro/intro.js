import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import emailIcon from '../../assets/email-icon.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          My name is  
          <span className="introName">  Jidnyasa <br /> Web developer</span>
        </span>
        <p>
        I am a passionate software developer with expertise in Python, data analytics, deep learning, AWS, and web development. <br /> 
           My strong academic and professional background fuels my dedication to technology and data.
        </p>
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/jidnyasa-zope-38b56b221/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" />
          </a>
          <a href="https://github.com/jidnyasa24" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="socialIcon" />
          </a>
          <a href="mailto:jidnyasazope@gmail.com">
            <img src={emailIcon} alt="Email" className="socialIcon" />
          </a>
        </div>
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  );
};

export default Intro;
