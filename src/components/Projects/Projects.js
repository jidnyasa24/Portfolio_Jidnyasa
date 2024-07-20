import React from 'react';
import './Projects.css';  // Import the CSS file for styling
import agritechImg from '../../assets/agritech.png';  // Correct path to image
import alzImg from '../../assets/Alz.png';  // Correct path to image
import docImg from '../../assets/doc.png';  // Correct path to image
import graceprintingImg from '../../assets/front.png';  // Correct path to image

const projects = [
  {
    id: 1,
    title: 'AgriTech',
    image: agritechImg,  // Use imported image
    link: 'https://github.com/jidnyasa24/Wheat-disease-detection-'
  },
  {
    id: 2,
    title: 'Alzheimer’s Disease Detection',
    image: alzImg,  // Use imported image
    link: 'https://github.com/jidnyasa24/Alzheimer-s-disease-detection'
  },
  {
    id: 3,
    title: 'Doc-Care Website',
    image: docImg,  // Use imported image
    link: 'https://github.com/jidnyasa24/DOC-CARE'
  },
  {
    id: 4,
    title: 'Graceprinting Website',
    image: graceprintingImg,  // Use imported image
    link: 'https://graceprinting.designnbuy.biz/'
  }
];

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='projects-title'>My Projects</h2>
      <br />
      <div className='projects-container'>
        {projects.map(project => (
          <div key={project.id} className='project-box'>
            <img src={project.image} alt={project.title} className='project-image' />
            <div className='project-info'>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className='view-button'>View</a>
            </div>
            <div className='project-title'>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
