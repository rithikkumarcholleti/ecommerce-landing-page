// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        {/* Use the custom logo from the public/images folder */}
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`} // Path to your logo
          alt="Logo"
          className="logo"
        />
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
