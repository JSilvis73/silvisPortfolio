import React from "react";

export const Button = (props) => {
    return (
        <div>
            <a href={props.url}><button>{props.name}</button></a>
        </div>
    )
}