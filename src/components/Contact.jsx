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
          I am open to to work as a front end developer. Do not hesitate to
          contact if you have project ideas and want to collaborate with me. I
          am open to work as a full time developer (remote or on-site) as well.
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
