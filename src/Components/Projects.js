import React from 'react';
import '../Styling/Projects.css';
import Arkham from '../Images/Arkham.png'
import Marine from '../Images/Marine.png'
import Swhunt from '../Images/Swhunt.png'

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
      <div id='projects-all'>
        <div className='projects-container'>
          <div className='project-arkham'>
            <div className='project-img'>
            <img src={Arkham} alt='ArkhamPMS.img' height="100" width="200" />
              <div id='overlay'>
                <p>
                  'The Arkham Asylum Patient Management System' was the first solo project I created at CodeClan. One of the briefs was to create a vet management system and I gave it a fun Batman themed twist. I used Python and SQL to create this app. This application was created in six days.
                </p>
              </div>
            </div>
            <span className='skills-used-container'>
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
                  href='https://github.com/Perrocks/Arkham_PMS'
                >
                  View on GitHub
                </a>
              </span>
            </span>
          </div>

          {/* MARINE PROJECT */}

          <div className='project-marine'>
            <div className='project-img'>
              <img src={Marine} alt='LetsGetKraken.img' height="100" width="200" />
            </div>
          
              <div id='overlay'>
                <p>
                  'Let's Get Kraken' is the first group project that I contributed to. The app is designed to teach children the importance of conservation, specifically marine conservation. We used JavaScript for the front end and MongoDB for the backend. We also implemented React.js. This application was created in six days.
                </p>
            </div>
            <span className='skills-used-container'>
              <span className='skills-container'>
                <span className='skills-tag'>
                  JavaScript
                </span>
                <span className='skills-tag'>
                  React.js
                </span>
                <span className='skills-tag'>
                  MongoDB
                </span>
              </span>
              <span className='project-link'>
                <a className='github-link' href='https://github.com/Perrocks/Lets_get_kraken'>
                  View on GitHub
                </a>
              </span>
            </span>

          </div>

          {/* STAR WARS HUNT */}

          <div className='project-swhunt'>
            <div className='project-img'>
            <img src={Swhunt} alt='StarWarsHunt.img' height="100" width="200" />
              <div id='overlay'>
                <p>
                  'Star Wars: HUNT' is the final project that I contributed to during my time at CodeClan. It is a capstone project created by myself and my fellow student, <a className='github-link-john' href='https://github.com/Jp2429'>John Panton</a>. We decided to create a game based on the Star Wars franchise, as we are both big fans. We used JavaScript and React for the frontend and MongoDB for the backend, allowing players to save their progress. This application was created in thirteen days.
                </p>
              </div>
            </div>
            <span className='skills-used-container'>
              <span className='skills-container'>
                <span className='skills-tag'>
                  JavaScript
                </span>
                <span className='skills-tag'>
                  React.js
                </span>
                <span className='skills-tag'>
                  MongoDB
                </span>
              </span>
              <span className='project-link'>
                <a
                  className='github-link'
                  href='https://github.com/Jp2429/star_wars_hunt'
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

