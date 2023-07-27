import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile2.jpg";
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
            Enterprising and self-motivated technology professional keen on
            leveraging software development skills to build, maintain, and
            distribute computer software. Ready to contribute to team success
            through attention to detail, excellent organizational skills, and a
            can-do attitude.
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
