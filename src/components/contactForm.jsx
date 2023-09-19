import React from "react";
import "../components/contactForm.css";
import { useState } from "react";

export const ContactForm = () => {
  const [isHoveredOver, setIsHoveredOver] = useState(false);

  const startHightlight = () => {
    setIsHoveredOver(true);
  };

  const stopHighlight = () => {
    setIsHoveredOver(false);
  };

  return (
    <div className="contactForm-container">
      <form action="https://formspree.io/f/xzblvdew" method="post">
        <label htmlFor="name">Contact</label>
        <input type="text" name="name" placeholder="Your Name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <label htmlFor="message">Message</label>
        <textarea
          className="messageBox"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <input
          className={`submitBttn mt-4 ${isHoveredOver ? "hoveredOver" : ""}`}
          type="submit"
          value="Send"
          onMouseEnter={startHightlight}
          onMouseLeave={stopHighlight}
        />
      </form>
    </div>
  );
};
