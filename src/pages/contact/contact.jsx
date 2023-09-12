import React from "react";
import '../contact/contact.css';
import { Button } from "../../components/button";
import {Phone, Envelope,} from 'phosphor-react';

export const Contact = () => {
    return (
        <div className="contactContainer displayFlexColCenter">
            <header className="centerText mt-5">
                <h1>Contact</h1>
            </header>
            
            <main className="mainContainer displayFlexColCenter mt-4">

                

                <div className="phoneContainer text-center mt-4">
                    <Phone /> Phone:
                    <br />
                    330-940-9233
                </div>

                <br />

                <div className="emailContainer text-center">
                    <Envelope /> Email:
                    <br />
                    JSilvis73@gmail.com
                    <br />
                    JSilvis@yahoo.com
                </div>
                <br />

                

                <Button name="MyGitHub" url='https://github.com/JSilvis73'/>
            </main>
        </div>
    )
};