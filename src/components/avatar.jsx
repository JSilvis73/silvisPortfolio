import React from "react";
import '../../src/components/avatar.css'


export const Avatar = (props) => {


    return (
        <div className="avatarContainer">
            <img src={props.img}  height={props.height}/>
        </div>
    )
}