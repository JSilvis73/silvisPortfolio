import React from "react";
import { Avatar } from "../../components/avatar";
import './personal.css';

export const Personal = () => {
    return (
        <div className="personalContainer">
            <header>
                <h1>Personal</h1>
            </header>

            <main>
                <div className="aboutMe">
                    <Avatar />
                    This section will be about me.
                </div>
            </main>
        </div>
    )
};