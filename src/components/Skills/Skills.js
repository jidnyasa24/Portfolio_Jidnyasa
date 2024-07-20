import React from 'react';
import './Skills.css';  // Import the CSS file for styling
import collegePic from '../../assets/college-pic.png';  // Ensure this path is correct
import industrialLogo from '../../assets/bg.png';  // Ensure this path is correct
import canspiritLogo from '../../assets/canspirit_logo.png';  // Ensure this path is correct
import mitAoeLogo from '../../assets/mitlogo.png'; 
import resume from '../../assets/resume.pdf';  // Ensure this path is correct

const Skills = () => {
  return (
    <div className="skills-container">
      {/* Heading and Resume Button */}
      <div className="skills-header">
        <h2>Experience</h2>
        <a href={resume} download="resume.pdf" className="download-resume-btn">Download Resume</a>
      </div>
      
      {/* Engineering Degree Box */}
      <div className="degree-box">
        <img src={collegePic} alt="College" className="college-pic" />
        <div className="degree-info">
          <h2>B.Tech in Electronics and Telecommunication Engineering</h2>
          <p>Graduated from MIT Academy of Engineering in 2024 with a CGPA of 8.4. 
          Acquired a solid foundation in electronics and telecommunications, equipped 
          with both theoretical knowledge and practical skills.</p>
        </div>
      </div>
      
      {/* Skills Box */}
      <div className="skills-box">
        <h3>Skills & Expertise</h3>
        <br />
        <div className="skills-list">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-items">
              <div className="skill-item">Python</div>
              <div className="skill-item">SQL</div>
              <div className="skill-item">C++</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">Javascript</div>
              <div className="skill-item">React.js</div>
            </div>
          </div>
          <div className="skill-category">
            <h4>Technologies</h4>
            <div className="skill-items">
              <div className="skill-item">Deep Learning</div>
              <div className="skill-item">Data Analytics</div>
              <div className="skill-item">AWS</div>
              <div className="skill-item">Web development</div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Internship Boxes */}
      <div className="internships-container">
        <div className="internship-box">
          <img src={industrialLogo} alt="Industrial Components" className="internship-logo" />
          <div className="internship-content">
            <h3 className="internship-company">Industrial Components</h3>
            <p className="internship-time">August 2022</p>
            <p className="internship-description">Worked with robots and contributed to various automation projects, gaining 
            hands-on experience in industrial robotics.</p>
          </div>
        </div>
        
        <div className="internship-box">
          <img src={mitAoeLogo} alt="MIT AOE" className="internship-logo" />
          <div className="internship-content">
            <h3 className="internship-company">MIT AOE</h3>
            <p className="internship-time">June - July 2023</p>
            <p className="internship-description">Developed a live website for doctors’ use, working on front-end and back-end 
            development.</p>
          </div>
        </div>

        <div className="internship-box">
          <img src={canspiritLogo} alt="Canspirit AI" className="internship-logo" />
          <div className="internship-content">
            <h3 className="internship-company">Canspirit AI</h3>
            <p className="internship-time">January - July 2024</p>
            <p className="internship-description">Worked on 4 live projects, gaining knowledge in web development, cloud computing, 
            and microservices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
