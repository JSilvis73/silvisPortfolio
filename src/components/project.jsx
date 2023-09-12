import React, { useState } from "react";
import '../pages/projects/projects.css';

export const Project = (props) => {
 const [isShaking, setIsShaking] = useState(false);

 const startShaking = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 1000);
 }


    return (
       <div className={`projectContainer`}>
            <div className={`projectWrapper displayFlexColCenter marginTop10perc  ${isShaking ? 'shake-animation' : ''}`}  onMouseEnter={startShaking}>
                <h5 className="projectHeader">{props.name}</h5>
                <img className="projectImage" src={props.image} />
                <div className="card-inner displayFlexColCenter">
                 <p className="project-desc">{props.desc}</p>
                 <button><a className="projectURL" href={props.url}>{props.urlDesc}</a></button>
                </div>
            </div>
        </div> 

    )
}



 