import React, { useState, useEffect } from 'react';
import './fadeInSection.css'; // Create this CSS file for styling

export const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0. }); // Adjust threshold as needed

    observer.observe(document.querySelector('.fade-in'));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}


