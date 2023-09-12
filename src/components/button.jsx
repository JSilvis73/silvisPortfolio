import React from "react";
import { GithubLogo } from "phosphor-react";

export const Button = (props) => {
    return (
        <div>
            
            <a href={props.url}><button>{props.icon}{props.name}</button></a>
        </div>
    )
}