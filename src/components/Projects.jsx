import React, { useEffect } from "react";

import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <Element name="projects" class="projects-section container" id="projects">
      <h2>Projects</h2>
      <div class="projects-container">
        <div class="project-card netflix_card" data-aos="fade-up" data-aos-once>
          <h3>Netflix Clone</h3>

          <div class="project-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus incidunt nostrum accusantium quas eos hic ipsa,
              consectetur harum assumenda
            </p>
            <div className="projectcard_techstack">
              <h4>Tech Stack</h4>
              <p>
                React, React Router, React Hooks, Local Storage, CSS Modules,
                Git
              </p>
            </div>
            <a
              href="https://github.com/rituraj-pathak-code/netflix-clone"
              target="_blank"
              className="project_github"
            >
              Github Link
            </a>
            <a
              href="https://netflix-clone-666.netlify.app/"
              target="_blank"
              class="btn-primary project_btn"
            >
              Go to site
            </a>
          </div>
        </div>
        <div
          class="project-card todo_card"
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="300"
        >
          <h3>Todo App</h3>

          <div class="project-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus incidunt nostrum accusantium quas eos hic ipsa,
              consectetur harum assumenda
            </p>
            <div className="projectcard_techstack">
              <h4>Tech Stack</h4>
              <p>React, React Hooks, Local Storage, CSS Modules, Git</p>
            </div>
            <a
              href="https://github.com/rituraj-pathak-code/Todo-App"
              target="_blank"
              className="project_github"
            >
              Github Link
            </a>
            <a
              href="https://todoko.vercel.app/"
              target="_blank"
              class="btn-primary project_btn"
            >
              Go to site
            </a>
          </div>
        </div>
        <div
          class="project-card portfolio_card"
          data-aos="fade-up"
          data-aos-once
        >
          <h3>Portfolio Website</h3>

          <div class="project-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus incidunt nostrum accusantium quas eos hic ipsa,
              consectetur harum assumenda
            </p>
            <div className="projectcard_techstack">
              <h4>Tech Stack</h4>
              <p>React, React Router, Chakra UI, Git</p>
            </div>
            <a
              href="https://github.com/rituraj-pathak-code/netflix-clone"
              target="_blank"
              className="project_github"
            >
              Github Link
            </a>
            <a href="#" class="btn-primary project_btn">
              Go to site
            </a>
          </div>
        </div>
        <div
          class="project-card gamingheaven_card"
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="300"
        >
          <h3>Gaming Heaven</h3>

          <div class="project-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus incidunt nostrum accusantium quas eos hic ipsa,
              consectetur harum assumenda
            </p>
            <div className="projectcard_techstack">
              <h4>Tech Stack</h4>
              <p>HTML , CSS, Vanilla JavaScript, Git</p>
            </div>
            <a
              href="https://github.com/rituraj-pathak-code/Gaming-heaven"
              target="_blank"
              className="project_github"
            >
              Github Link
            </a>
            <a
              href="https://gameheaven.netlify.app/"
              target="_blank"
              class="btn-primary project_btn"
            >
              Go to site
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
