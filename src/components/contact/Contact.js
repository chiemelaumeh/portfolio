import React from "react";
import "./contact.css"
const Contact = () => {
  return (
    <section className="contact section" id="section">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                franklynumeh06gmail.com{" "}
              </span>
              <a
                href="mailto:franklyumeh06@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contsct__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Mobile</h3>
              <span className="contact__card-data">(508)-825 6171 </span>
              <a href="" className="contact__button">
                Call me
                <i className="bx bx-right-arrow-alt contsct__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me you project</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="button button--flex">
              <p>Send message</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
