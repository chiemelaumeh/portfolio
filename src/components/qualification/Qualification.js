import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__data">
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div>
            <h3 className="qualification__title">Software Engineer</h3>
            <span className="qualification__subtitle">Payday</span>
            <div className="qualification__calender">
              <i className="uil uil-calender-alt"></i>
              AUG 2022 - Present
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science, B.S,</h3>
                <span className="qualification__subtitle">
                  Universitty of Houston
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  JAN 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Galvanize Inc.</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  JAN 2022 — JUN 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Student-Software Engineer
                </h3>
                <span className="qualification__subtitle">
                  Operation Level-Up
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Jul 2021 — Nov 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Team Lead</h3>
                <span className="qualification__subtitle">U.S Army</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  AUG 2018 - DEC 2021
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Associates, General Engineering
                </h3>
                <span className="qualification__subtitle">
                  Southern Arkansas University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  JAN 2016 — DEC 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2018 - 202
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;