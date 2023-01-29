import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile.jpg";
import Resume from "../../assets/resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data"></div>
        <Info />
        <p className="about__description">
          Enterprising, self-motivated and teachable technology professional
          keen on leveraging full stack web development skills to build,
          maintain, and distribute computer software. Versatile problem-solver
          with strong interpersonal, communication, customer service, and design
          skills. Deep understanding of object-oriented programming and
          test-driven deployment.
        </p>
      </div>
    </section>
  );
};

export default About;
