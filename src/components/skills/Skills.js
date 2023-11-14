import React, { useContext } from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import GeneralContext from "../../context/GeneralContext";
import Devops from "./Devops";

const Skills = () => {

  return (
    <section className="skills section-half mb-main" id="skills">
      <h2 className="section__title section__mb ">Skills</h2>


      <div className="skills__container container grid">
        <Frontend />
        <Backend /> 
        <Devops />
      </div>
    </section>
  );
};

export default Skills;
