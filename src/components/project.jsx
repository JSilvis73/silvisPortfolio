import React from "react";
import '../pages/projects/projects.css';

export const Project = (props) => {

    return (
       <div className="projectContainer ">
            <div className="projectWrapper displayFlexColCenter marginTop10perc">
                <h5 className="projectHeader">{props.name}</h5>
                <img className="projectImage" src={props.image} />
                <div className="card-inner displayFlexColCenter">
                 <p >{props.desc}</p>
                 <a className="projectURL" href={props.url}>{props.urlDesc}</a>
                </div>
            </div>
        </div> 

    )
}



 