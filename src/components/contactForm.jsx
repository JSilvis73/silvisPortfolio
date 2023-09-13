import React from "react";
import '../components/contactForm.css';

export const ContactForm = () => {
    return (
        <div className="contactForm-container">
        <form action="" method="post" >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="_replyto" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <input type="submit" value="Send" />
        </form>
        </div>
    );
}