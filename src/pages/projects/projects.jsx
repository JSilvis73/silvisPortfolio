import React from "react";
import '../projects/projects.css';
import { Project } from "../../components/project";
import { projectList } from "../../projectList";

export const Projects = () => {
    return (
        <div className="projectsContainer">
        <header>
            <h1>Projects</h1>
        </header>
        
        <main>
            <div className="projectsListContainer">
                {projectList.map((project) => <Project 
                key={project.id}
                name={project.name} 
                image={project.image}
                desc={project.desc}
                url={project.url}
                />)}
            </div>
        </main>
    </div>
    )
}