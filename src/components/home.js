import React from "react";
import "../styles.css";
import venkatimg from "../assets/venkat.jpg";
import resumeimg from "../assets/resume.png"
import resume from "../assets/resume.pdf"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
      <section id="home">
        <div className="home-content">
            <div className="hello"><span className="hello-2">Hello,</span></div>
            <div className="intro-text"><span className="intro-2">I'm Venkat</span></div>
            <div className="intro-para"><p className="intro-para-2">I work with </p></div>
            <div className="intro-caption"><span className="intro-2"><Typewriter options={{strings: ['Data', 'Quantitative Methods', 'Machine Learning', 'Web Apps'], autoStart: true, loop: true}} /></span></div>
            <a href = {resume} target = "_blank" rel="noreferrer"><button className="resume-btn"><img src={resumeimg} alt="Resume" className="resume-btn-img"/>Resume</button></a>
        </div>
        <img src={venkatimg} alt="Venkat" className="home-img" />
      </section>
    );
  }
  
  export default Home;