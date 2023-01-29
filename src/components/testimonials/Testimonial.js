import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">"My clients say"</h2>
      <span className="section_subtitle">Testimonial</span>
      <div className="testimonial_container">
        {Data.map(({id, image, title, description}) => {

          return (
          <div className="testimonial__card" key={id}>
            <img src={image} alt="" />


          </div>
          )
         
        })}
      </div>
    </section>
  );
};

export default Testimonial;
