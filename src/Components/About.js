import React from 'react';
import '../Styling/About.css';
import PicOfLiam from '../Images/PicOfLiam.jpg'



const About = () => {
  return (
    <>
      <div id='about-me'>
        <article id='about-me-inner'>
          <h2 id='about-me-title'>
            <div id="about-dash">
              -
            </div>
            ABOUT ME
            <div id="about-dash">
              -
            </div>
          </h2>
          <section id="about-me-body">
            <div id="about-me-text">
            <p id="my-name-is">
              My name is <span id="liam">Liam</span>.
            </p>
            <p id="p1">
              I am an Edinburgh based Junior Software Developer currently learning to code at CodeClan. Coming from a background in pharmacy, I have a passion for helping others and I want to continue doing so in my new career.
            </p>
            <p id="p2">
              My previous career taught me the importance of working accurately, efficiently and confidentially. I hope I can use my new found coding powers for good!
            </p>
            </div>
            <section id="pic-of-me-container">
              <img id="pic-of-me" src={PicOfLiam} alt="A hairy man" />
            </section>
          </section>

        </article>
      </div>
      <div id="about-break">
        <p></p>
      </div>
    </>
  );
};

export default About;