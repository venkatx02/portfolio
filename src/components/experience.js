import React from "react";
import "../styles.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import tataelxsi from "../assets/tataelxsi.png";
import phoenixglobal from "../assets/phoenixglobal.png";
import bsg from "../assets/bsg.png";

const Experience = () => {
    return (
        <section id="experience">
            <h1 className="section-title">Experience</h1>
            <div className="exp-timeline">
            <VerticalTimeline layout="1-column-left">
                <VerticalTimelineElement icon={<img className="company-logo" src={bsg} alt="bsg" />} date="January 2024 - June 2024">
                    <h1 className="exp-title">Growth & Technical Assistance</h1>
                    <h2 className="exp-company">Bharat Scouts & Guides, Rajahmundry</h2>
                    <h3 className="exp-desc">Generated reports and dashboards to help stakeholders in decision-making, resulting in an increase of member count by 125% within 3 months.<br /> Created, managed and updated more than 500 member profiles and members data.<br /> Coordinated cultural events, social and adventure programmes, in collaboration with Indian railways, public offices, schools and local clubs.</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<img className="company-logo" src={tataelxsi} alt="tata-elxsi" />} date="February 2023 - July 2023">
                    <h1 className="exp-title">Engineer Intern - Auto General</h1>
                    <h2 className="exp-company">TATA Elxsi, Trivandrum</h2>
                    <h3 className="exp-desc">Researched on embedded product engineering & networking concepts in the automotive design, reported to manager and team members with daily presentations.<br /> Designed and developed a responsive user interface for a resume parsing application which aims to improve the efficiency of HR and project management teams.</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<img className="company-logo" src={phoenixglobal} alt="phoenix-global" />} date="May 2022 - June 2022">
                    <h1 className="exp-title">Intern - Web Development</h1>
                    <h2 className="exp-company">Phoenix Global, Remote</h2>
                    <h3 className="exp-desc">Worked with a team of 5 and built a full-stack web application for event hosting.<br /> Learned cutting edge skills like React JS, Node JS, Express JS, MongoDB.</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        </section>
    );
  }
  
  export default Experience;