import React from 'react';

const HeroSection = ({ openForm }) => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Empowering the Next Generation of AI Innovators</h1>
        <p>Join Proviz School of AI to kickstart your AI career with world-class education.</p>
        <button className="btn-primary" onClick={openForm}>Apply Now</button>
      </div>
    </header>
  );
};

export default HeroSection;
