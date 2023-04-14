import React, { useEffect } from "react";
import js from "../assets/js.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import npm from "../assets/npm.png";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <Element name="about" class="about-me container" id="about">
      <h2>About Me</h2>
      <div className="about_me_subcontainer">
        <div class="about-me-content">
          <div class="text-content">
            <p>
              I am a front end developer located in India. Since I was a kid I
              had a passion for tech. I joined engineering in Jorhat Engineering
              College located in Jorhat, Assam where I took my degree in
              Computer Science and Engineering.
              <br />
              <br />
              I took keen interest in web development specifically front end
              development. Being able to design and create perfect user
              experiences which are visually appealing is what excites me about
              front end development. <br />
              <br />
              I am open to any oppurtunity and join communities to add value. I
              am interested in the entire front end spectrum and working on
              ambitious projects with positive people. <br />
              <br />
            </p>
            <h4 style={{ color: "#c6f55a" }}>
              Here are few technologies I've been working with recently :
            </h4>
          </div>
          <div class="skill-section">
            <ul>
              <li data-aos="fade-up" data-aos-once data-aos-delay="100">
                <img class="skill-logo" src={js} alt="" />
              </li>
              <li data-aos="fade-up" data-aos-once data-aos-delay="200">
                <img class="skill-logo" src={html} alt="" />
              </li>
              <li data-aos="fade-up" data-aos-once data-aos-delay="300">
                <img class="skill-logo" src={css} alt="" />
              </li>

              <li data-aos="fade-up" data-aos-once data-aos-delay="400">
                <img class="skill-logo" src={bootstrap} alt="" />
              </li>
              <li data-aos="fade-up" data-aos-once data-aos-delay="500">
                <img class="skill-logo" src={react} alt="" />
              </li>
              <li data-aos="fade-up" data-aos-once data-aos-delay="600">
                <img class="skill-logo" src={git} alt="" />
              </li>
              <li data-aos="fade-up" data-aos-once data-aos-delay="700">
                <img class="skill-logo" src={sass} alt="" />
              </li>
              <li data-aos="fade-up" data-aos-once data-aos-delay="800">
                <img class="skill-logo" src={npm} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div class="image-section" data-aos="fade-up" data-aos-once>
          <div class="image-photo"></div>
          <div class="image-border"></div>
        </div>
      </div>
    </Element>
  );
};

export default About;
