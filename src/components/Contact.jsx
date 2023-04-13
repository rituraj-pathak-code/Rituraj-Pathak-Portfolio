import React, { useEffect } from "react";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <Element name="contact" className="contact_section" id="contact">
      <h2>Contact</h2>
      <div className="contact__container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at rem ab
          iste accusantium tenetur eius id! Provident, eum officiis! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Modi, voluptas.
        </p>
        <a
          href="mailto:riturajpathak1998@gmail.com"
          className="btn-primary btn-contact"
          data-aos="fade-up"
          data-aos-once
        >
          Say Hello!!
        </a>
      </div>
    </Element>
  );
};

export default Contact;
