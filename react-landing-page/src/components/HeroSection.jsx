// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Use the image from the public/images folder */}
      <img src={`${process.env.PUBLIC_URL}/images/hero-image.webp`} alt="Hero Section" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Our Store</h1>
        <p>Discover the best products at unbeatable prices!</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
