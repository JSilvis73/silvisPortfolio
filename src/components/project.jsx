import React from "react";
import '../pages/projects/projects.css';

export const Project = (props) => {

    return (
       <div className="projectContainer ">
            <div className="projectWrapper displayFlexColCenter marginTop10perc">
                <h3 className="projectHeader">{props.name}</h3>
                <img className="projectImage" src={props.image} />
                 <p >{props.desc}</p>
                 <a className="projectURL" href={props.url}>{props.urlDesc}</a>
            </div>
        </div> 

    )
}



 