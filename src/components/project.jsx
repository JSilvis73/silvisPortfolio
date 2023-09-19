import React, { useState } from "react";
import "../pages/projects/projects.css";
import { GithubLogo } from "phosphor-react";

export const Project = (props) => {
  const [isShaking, setIsShaking] = useState(false);
  const [isHoveredOver, setIsHoveredOver] = useState(false);

  const startShaking = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 1000);
  };

  const startHighlight = () => setIsHoveredOver(true);
  const stopHighlight = () => setIsHoveredOver(false);

  return (
    <div className={`projectContainer`}>
      <div
        className={`projectWrapper displayFlexColCenter marginTop10perc  ${
          isShaking ? "shake-animation" : ""
        }`}
        onMouseEnter={startShaking}
      >
        <h5 className="projectHeader">{props.name}</h5>
        <img className="projectImage" src={props.image} />
        <div className="card-inner displayFlexColCenter">
          <p className="project-desc">{props.desc}</p>
          <a href={props.url}>
            <button
              className={`projectURL ${isHoveredOver ? "hoveredOver" : ""}`}
              onMouseEnter={startHighlight}
              onMouseLeave={stopHighlight}
            >
              {" "}
              <GithubLogo />
              {props.urlDesc}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
