import React from "react";
import '../pages/projects/projects.css';

export const Project = (props) => {

    return (
        <div className="projectWrapper">
            
            <h3>{props.name}</h3>
            <img className="projectImage" src={props.image} />
            <p>{props.desc}</p>
            <a href={props.url}>{props.url}</a>
           
        </div>
    )
}