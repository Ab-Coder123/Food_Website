import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFaceAngry,
  faMarker,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "../componant/Contact.css";
import Footer from "../section/Foot";
import Nav from "../section/Nav";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 emailjs.sendForm(  "service_phwilfv",  "template_yhd0f36",  form.current, "h9oCciDNMhvuSfEHi").then(
        (result) => {
          form.current.reset();
          alert("Your message was sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Nav />

      <div className="contact-form-container">
        <div className="contact-us">
          <div className="contact-header">
            <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US</h1>
          </div>
          <div className="social-bar">
            <ul>
              <li>
                <FontAwesomeIcon className="fab fa-facebook-f" />
              </li>
              <li>
                <FontAwesomeIcon className="fab fa-twitter" />
              </li>
              <li>
                <FontAwesomeIcon className="fab fa-instagram" />
              </li>
              <li>
                <FontAwesomeIcon className="fab fa-dribbble" />
              </li>
            </ul>
          </div>
        </div>

        <div className="header">
          <h2>Contact</h2>
        </div>
        <div className="address">
          <FontAwesomeIcon className="fas fa-map-marker-alt" />
          <h3>City-CAiro</h3>
        </div>
        <div className="phone">
          <FontAwesomeIcon className="fas fa-phone-alt" />
          <h3>+0111-868-2951</h3>
        </div>
        <div className="email">
          <FontAwesomeIcon className="fas fa-envelope" />
          <h3>Foodie@gmail.com</h3>
        </div>
        <div className="contact-form">


    <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="email" />
            <textarea
              placeholder="Tell us about your project..."
              rows="4"
            ></textarea>
            <button type="submit"  >Send</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
