import React from 'react';
import '../Styling/Projects.css';

const Projects = () => {
  return (
    <>
      <section id="projects-info">
      <h2 id='about-me-title'>
            <div id="about-dash">
              -
            </div>
            PROJECTS
            <div id="about-dash">
              -
            </div>
          </h2>
        <div>
          <p>Below you can find some of the solo and group projects that I have worked on throughout my time at CodeClan and some personal projects.</p>
        </div>
      </section>
      <div id='projects'>
        <p id='hover-projects'>Hover over the images for more details.</p>
        <div className='projects-container'>
          <div className='project'>
            <div className='project-img'>
              {/* <img src={AsylumManager} alt='Asylum solo project' /> */}
              <div id='overlay'>
                <p>
                  The Arkham Asylum Patient Management System was the first solo project I created at CodeClan. It is a fun twist on a vet management system. I used Python and SQL to create this app.
                </p>
              </div>
            </div>
            <span className='skills-used-container'>
              <p className='project-title'>Arkham Asylum PMS</p>
              <span className='skills-container'>
                <span className='skills-tag'>
                  Python
                </span>
                <span className='skills-tag'>
                  PostgreSQL
                </span>
              </span>
              <span className='project-link'>
              <a
                className='github-link'
                href='placeholder'
              >
                View on GitHub
              </a>
              </span>
            </span>
          </div>
          </div>
      </div>
      <div id="projects-break">
        <p></p>
      </div>
    </>
  );
};

export default Projects;

