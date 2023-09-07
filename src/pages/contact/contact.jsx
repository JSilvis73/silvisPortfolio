import React from "react";
import '../contact/contact.css';

export const Contact = () => {
    return (
        <div className="contactContainer">
            <header>
                <h1>Contact</h1>
            </header>
            
            <main className="mainContainer">
                <div className="phoneContainer">
                    330-940-9233
                </div>
                <div className="emailContainer">
                    JSilvis@yahoo.com
                </div>
                <div className="githubContainer">
                    Github
                </div>
            </main>
        </div>
    )
};