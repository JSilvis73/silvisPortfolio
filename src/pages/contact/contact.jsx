import React from "react";
import "../contact/contact.css";
import { Button } from "../../components/button";
import { Phone, Envelope, GithubLogo } from "phosphor-react";
import { Avatar } from "../../components/avatar";
import avatarDefault from "../../assets/images/Me2.png";
import { ContactForm } from "../../components/contactForm";
import { FadeInSection } from "../../fadeInSection";

export const Contact = () => {
  return (
    <div className="contactContainer displayFlexColCenter">
      <header className="centerText">
        <h1>Contact</h1>
      </header>

      <main className="mainContainer grid">
        <div className="leftItem">
          <h4 className="mt-2">Jason Silvis</h4>

          <h5> Software Developer</h5>

          <Avatar img={avatarDefault} height="150px" />

          <div className="text-center">
            <Phone /> Phone:
            <br />
            330-940-9233
          </div>

          <div className="text-center">
            <Envelope /> Email:
            <br />
            SilvisDevelopment@gmail.com
            <br />
            JSilvis030592@yahoo.com
          </div>

          <Button
            name="MyGitHub"
            url="https://github.com/JSilvis73"
            icon={<GithubLogo />}
          />
        </div>

        <div className="rightItem">
          <ContactForm />
        </div>
      </main>
    </div>
  );
};
