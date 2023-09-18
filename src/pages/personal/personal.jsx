import React from "react";
import "./personal.css";
import avatarDefault from "../../assets/images/Me2.png";
import fEndLanguage from "../../assets/images/front-end-stack.png";
import frameworks from "../../assets/images/Frameworks.png";
import github from "../../assets/images/github.png";

export const Personal = () => {
  return (
    <div className="personalContainer displayFlexColCenter">
      <header className="centerText mt-5">
        <h1>Jason Silvis</h1>
        <br />
        <h3>Software Developer</h3>
      </header>

      <div className="personalContainerMain">
        <div className="personalContainerUpper">
          <div className="personalUpperLeft text-center">
            Hello, I'm Jason L Silvis,
            <br />
            a passionate software engineer on a mission to craft exceptional
            digital experiences.
            <br />
            With expertise in JavaScript, React, and Node.js, I bring creativity
            and precision to every project.
            <br />
            My journey in coding is driven by a deep love for problem-solving
            and a commitment to user-centric design.
            <br />
            When I'm not coding, you'll find me spending time with my family,
            which fuels my creativity and keeps me inspired.
            <br />
            Let's collaborate and create something extraordinary!
          </div>

          <div className="personalUpperRight ">
            <img src={avatarDefault} />
          </div>
        </div>
      </div>

      <section className="skillsSection">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img
                src={fEndLanguage}
                class="d-block w-100"
                alt="Font-end languages logo"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5> Coding Languages</h5>
                <p>
                  Unlock the potential of your online presence with expertise in
                  HTML, CSS and JavaScript.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={frameworks} class="d-block w-100" alt="React logo" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Frameworks</h5>
                <p>
                  Empower your digital presence with my mastery of versatile web
                  frameworks.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={github} class="d-block w-100" alt="Github Logo" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Skills</h5>
                <p>
                  Transforming code collaboration into an art form, I leverage
                  the power of GitHub.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};
