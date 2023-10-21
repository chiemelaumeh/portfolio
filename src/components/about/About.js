import React from "react";
import "./about.css";

import Resume from "../../assets/resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      {/* <span className="section__subtitle">My introduction</span> */}
      <div className="about__container container grid">
        {/* <img src={AboutImg} alt="" className="about__img" /> */}
        <div className="about__data">
          {/* <Info /> */}
          <p className="about__description">
           
          As a software developer and cloud Engineer,
           my goal is to deliver working software, on time and within budget,
            according to client requirements, and provide value to business. Currently, 
            I am ready to contribute to team success through attention to detail,
             excellent organizational skills, and a can-do attitude.
          </p>
          <a download="" href={Resume} className="button button--flex">
            <div>
              Download Resume <i class="uil uil-file-download-alt"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
