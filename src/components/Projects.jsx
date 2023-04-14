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
              A fully responsive clone of movie streaming website Netflix
              developed using React. It has functionalities like add movie to
              list. Used TMDB API for all movies.
            </p>
            <div className="projectcard_techstack">
              <h4>Tech Stack</h4>
              <p>
                React, React Router, React Hooks, Context API, vanilla CSS , Git
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
              A fully responsive Todo App developed using React. It has
              functionalities like add todo, deleted todo, complete todo. Used
              local storage to save previous data.
            </p>
            <div className="projectcard_techstack">
              <h4>Tech Stack</h4>
              <p>React, React Hooks, Local Storage, vanilla CSS, Git</p>
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
              A visually appealing personal portfolio website developed using
              react. Used libraries like Chakra UI, animation on scroll for
              making it visually appealing.
            </p>
            <div className="projectcard_techstack">
              <h4>Tech Stack</h4>
              <p>React, React Router, Chakra UI, vanilla CSS, Git</p>
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
              A fully responsive landing page of a gaming website. It has two
              games - Snake and tictactoe developed using JavaScript, HTML and
              CSS
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
