import React from "react";
import { Avatar } from "../../components/avatar";
import './personal.css';
import avatarDefault from '../../assets/images/avatarDefault.jpg';

export const Personal = () => {
    return (
        <div className="personalContainer gradient">
            <header>
                <h1>Personal</h1>
            </header>

            <main>
                <div className="avatarContainer">
                    <Avatar 
                    img={avatarDefault}
                    />
                    
                </div>
                <div className="aboutMeContainer centerText">
                    This section will be about me.
                </div>
            </main>
        </div>
    )
};