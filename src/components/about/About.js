import React from "react";
import "./about.css";

import Resume from "../../assets/resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about " id="about">
      <div className="about__container about__data container grid">
        
        <div className="about__data">
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
