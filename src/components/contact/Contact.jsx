import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b6nug3o",
        "template_gu4qraf",
        form.current,
        "XIc7WHpt5Cj7g1lQI"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert('Thank you for your message. I will get back to you very soon!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title"> Let's talk about everything!</h3>
          <p className="contact__details">Feel free to send me an email.👋🏻 </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                name="user_name"
                placeholder="Insert your name"
              ></input>
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                name="user_email"
                placeholder="Insert your email"
              ></input>
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
            ></input>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
