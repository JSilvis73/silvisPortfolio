import React from "react";
import { Avatar } from "../../components/avatar";
import './personal.css';
import avatarDefault from '../../assets/images/avatarDefault.jpg';

export const Personal = () => {
    return (
        <div className="personalContainer marginTop15">
            <header>
                <h1>Jason Silvis</h1>
            </header>

            <main className="mainContainer ">
                <div className="avatarContainer ">
                    <Avatar 
                    img={avatarDefault}
                    />
                    
                </div>

                <div className="aboutMeContainer centerText marginTop15">
                    This section will be about me.
                </div>
            </main>
        </div>
    )
};