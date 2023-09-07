import React from "react";

export const Project = (props) => {

    return (
        <div className="projectWrapper">
            <h3>{props.name}</h3>
            <img src={props.image} />
            <p><bold>{props.url}</bold></p>
        </div>
    )
}