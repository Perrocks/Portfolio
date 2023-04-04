import React from 'react';
import '../Styling/Skills.css';

const Skills = () => {
  return (
    <>
      <h2 id='about-me-title'>
        <div id="about-dash">
          -
        </div>
        SKILLS
        <div id="about-dash">
          -
        </div>
      </h2>

      <div id='skills-lists'>

        <section id='frontend-skills'>
          

          <ul>
          <p id="skills-title">Frontend Skills</p>

            <div id="about-dash">
              -
            </div>
            <li>JavaScript</li>
            <div id="about-dash">
              -
            </div>
            <li>HTML</li>
            <div id="about-dash">
              -
            </div>
            <li>CSS</li>
            <div id="about-dash">
              -
            </div>
            <li>React</li>
            <div id="about-dash">
              -
            </div>
          </ul>
        </section>

        <section id='backend-skills'>
          

          <ul>
          <p id="skills-title">Backend Skills</p>
            <div id="about-dash">
              -
            </div>

            <li>Python</li>
            <div id="about-dash">
              -
            </div>

            <li>Django</li>
            <div id="about-dash">
              -
            </div>

            <li>Flask</li>
            <div id="about-dash">
              -
            </div>

            <li>Node.js</li>
            <div id="about-dash">
              -
            </div>
            <li>Express.js</li>
            <div id="about-dash">
              -
            </div>
            <li>Java</li>
            <div id="about-dash">
              -
            </div>
            <li>Spring</li>
            <div id="about-dash">
              -
            </div>
            
          </ul>
        </section>

        <section id='other-skills'>
          
          <ul>
          <p id="skills-title">Other Skills</p>
            <div id="about-dash">
              -
            </div>
            <li>mongoDB</li>
            <div id="about-dash">
              -
            </div>
            <li>PostgreSQL</li>
            <div id="about-dash">
              -
            </div>
            <li>Git</li>
            <div id="about-dash">
              -
            </div>
            
          </ul>
        </section>
      </div>
      <div id="skills-break">
        <p></p>
      </div>
    </>
  );
};

export default Skills;