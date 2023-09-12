import React from "react";
import '../contact/contact.css';

export const Contact = () => {
    return (
        <div className="contactContainer displayFlexColCenter">
            <header className="centerText mt-5">
                <h1>Contact</h1>
            </header>
            
            <main className="mainContainer displayFlexColCenter">
                <div className="phoneContainer">
                    330-940-9233
                </div>
                <div className="emailContainer">
                    JSilvis@yahoo.com
                </div>
                <div className="githubContainer">
                   <a href="https://github.com/JSilvis73"><button>Github</button></a>
                </div>
            </main>
        </div>
    )
};