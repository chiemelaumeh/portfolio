import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";


const Contact = () => {

  const [nameField, setNameField] = useState("") 
  const [emailField, setEmailField] = useState("") 
  const [messageField, setMessageField] = useState("") 


  const changeNameField = (e)=> {
    setNameField(e.target.value)
  }
  const changeEmailField = (e)=> {
    setEmailField(e.target.value)
  }
  const changeMessageField = (e)=> {
    setMessageField(e.target.value)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fz12117",
        "template_76upbxf",
        form.current,
        "lVRALwcoYwx4XuO9-"
      )
    e.target.reset()
  };

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
          <h3 className="contact__title">Send a message</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
                value={nameField}
                onChange={changeNameField}
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
                onChange={changeEmailField}
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                onChange={changeMessageField}
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