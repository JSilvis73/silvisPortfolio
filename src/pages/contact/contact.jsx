import React from "react";
import '../contact/contact.css';
import { Button } from "../../components/button";
import {Phone, Envelope, GithubLogo} from 'phosphor-react';
import { Avatar } from "../../components/avatar";
import avatarDefault from '../../assets/images/walking.jpg';
import { ContactForm } from "../../components/contactForm";

export const Contact = () => {
    return (
        <div className="contactContainer displayFlexColCenter">
            <header className="centerText mt-5">
                <h1>Contact</h1>
            </header>

        
            
            <main className="mainContainer grid mt-4">

                <div className="leftItem">
                    <h4>Jason Silvis</h4>

                    <h5> Software Developer</h5>
                
                 <Avatar
                    img={avatarDefault}
                    height='150px'
                 />
               
                 <div className="text-center">
                    <Phone /> Phone:
                    <br />
                    330-940-9233
                 </div>

                
                 <div className="text-center">
                    <Envelope /> Email:
                    <br />
                    JSilvis73@gmail.com
                    <br />
                    JSilvis@yahoo.com
                 </div>
                
                    <Button name="MyGitHub" url='https://github.com/JSilvis73' icon={<GithubLogo />}/>
                
                </div>
                
                <div className="rightItem">
                <ContactForm />
                </div>
            
            </main>
            

        </div>
    )
};