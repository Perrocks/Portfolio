import React from "react";
// import "./Home.css";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const Home = () => {
  return (
    <>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;