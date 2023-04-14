import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";
import resume from "../assets/Rituraj_resume.pdf";
const Hero = () => {
  return (
    <Element name="home" class="hero-section container" id="home">
      <div class="text-section">
        <p>Welcome! My name is</p>

        <h1>
          <span className="hero_headerline">Rituraj Pathak.</span>
          <span className="hero_subheaderline">
            and I love building for the web
          </span>
        </h1>

        <p id="my-info">
          An enthusiastic and ambitious front-end developer. I am proficient in
          <span style={{ color: "#bbe45d" }}> JavaScript</span>,
          <span style={{ color: "#bbe45d" }}> React</span> and
          <span style={{ color: "#bbe45d" }}> Responsive Design</span>. I love
          to network, join new communities and add value.
        </p>
        <div class="button-resume">
          <a class="btn-primary" href={resume} target="_blank">
            Check out my resume!
          </a>
        </div>
      </div>
      <div class="social-icons">
        <a href={"https://github.com/rituraj-pathak-code"} target="_blank">
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/rituraj-pathak-0983191a0/"
          target="_blank"
        >
          <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
        </a>
      </div>
    </Element>
  );
};

export default Hero;
