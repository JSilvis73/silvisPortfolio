import React from "react";
import "../projects/projects.css";
import { Project } from "../../components/project";
import { projectList } from "../../projectList";
import { FadeInSection } from "../../fadeInSection";

export const Projects = () => {
  return (
    <div className="projectsContainer displayFlexColCenter">

      <header className="centerText">
        <h1>Projects</h1>
      </header>

      <main>
        <div className="projectsListContainer displayFlexRow mt-5">
          {projectList.map((project) => (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              desc={project.desc}
              url={project.url}
              urlDesc={project.urlDesc}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
