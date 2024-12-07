import React from "react";
import "../styles.css";
import pshimg from "../assets/phishingdetection.png"
import gfimg from "../assets/gforum.png"

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="section-title">Projects</h1>
            <div className="project-items">
                <div className="project-container">
                    <img src={pshimg} alt="project-image" className="project-img" /><br />Phishing Detection Using Machine Learning<br />
                    <a href="https://github.com/venkatx02/project_phishing_detection" target="_blank" rel="noreferrer" className="prj-link">
                        <button className="prj-view-btn">View Project</button>
                    </a>
                </div>
                <div className="project-container">
                    <img src={gfimg} alt="project-image" className="project-img" /><br />Gforum - A Forum Web Application<br />
                    <a href="https://github.com/venkatx02/project_gforum" target="_blank" rel="noreferrer" className="prj-link">
                        <button className="prj-view-btn">View Project</button>
                    </a>
                </div>
            </div>
            <a href="https://github.com/venkatx02/" target="_blank" rel="noreferrer" className="prj-link">
                <button className="prj-more-btn">View More</button>
            </a>
        </section>
    );
  }
  
  export default Projects;