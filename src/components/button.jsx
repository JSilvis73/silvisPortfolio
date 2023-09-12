import React, { useState } from "react";
import { GithubLogo } from "phosphor-react";

export const Button = (props) => {
    const [isHoveredOver, setIsHoveredOver] = useState(false);


    const startHighlight = () => setIsHoveredOver(true);
    const stopHighlight = () => setIsHoveredOver(false);

    return (
        <div>
            
            <a href={props.url}><button className={`${isHoveredOver? 'hoveredOver': ''}`} onMouseEnter={startHighlight} onMouseLeave={stopHighlight}>{<GithubLogo/>}{props.name}</button></a>
        </div>
    )
}