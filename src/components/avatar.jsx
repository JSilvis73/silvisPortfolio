import React from "react";
import '../../src/pages/personal/personal.css'


export const Avatar = (props) => {


    return (
        <div className="avatarContainer">
            <img src={props.img} />
        </div>
    )
}