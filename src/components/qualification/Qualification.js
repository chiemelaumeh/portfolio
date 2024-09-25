import React from 'react';
import './qualification.css';

const Qualification = () => {
  return (
    <section className='qualification section-half' id='qualification'>
      <h2 className='section__title'>Qualifications</h2>
      <span className='section__subtitle'>My journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className='qualification__button qualification__active button--flex'>
            <i className='uil uil-graduation-cap qualification__icon'></i>{' '}
            Education
          </div>
          <div className='qualification__button qualification__active button--flex'>
            <i className='uil uil-briefcase-alt qualification__icon'></i>{' '}
            Experience
          </div>
        </div>

        <div className='qualification__data'>
          <div></div>
          <div>
            <span className='qualification__rounder'></span>
            <span className='qualification__line'></span>
          </div>
          <div>
            <h3 className='qualification__title'>Technical Support Agent </h3>
            <span className='qualification__subtitle'>Viasat</span>
            <div className='qualification__calender'>
              <i className='uil uil-calender-alt'></i>
              Feb. 2024 - Present
            </div>
            <div className='qual_mb'></div>
          </div>
        </div>

        <div className='qualification__data'>
          <div></div>
          <div>
            <span className='qualification__rounder'></span>
            <span className='qualification__line'></span>
          </div>
          <div>
            <h3 className='qualification__title'>Software Engineer </h3>
            <span className='qualification__subtitle'>Payday</span>
            <div className='qualification__calender'>
              <i className='uil uil-calender-alt'></i>
              May 2023 - Jul. 2023
            </div>
          </div>
        </div>

        <div className='qualification__sections'>
          <div className='qualification__content'>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Computer Science, (B.S.)
                </h3>
                <span className='qualification__subtitle'>
                  University of Houston
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i>
                  Jan. 2022 — Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Full Stack Development Projects</h3>
                <span className='qualification__subtitle'>
                  Furniture Store, Postboard, Athena App
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i>
                  Sep. 2022 — Feb. 2023
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Student Software Engineer
                </h3>
                <span className='qualification__subtitle'>
                  Galvanize Inc. (Bootcamp)
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i>
                  Jul. 2022 — Nov. 2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
           

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Operations Team Lead</h3>
                <span className='qualification__subtitle'>U.S Army</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i>
                  Aug. 2019 - Dec. 2022
                </div>
              </div>
            </div>
          </div>

          <div className='qualification__content'>
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

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Mechanical Engineering, (A.S.)
                </h3>
                <span className='qualification__subtitle'>
                  Southern Arkansas University
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i>
                  Jan. 2016 — Dec. 2017
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
