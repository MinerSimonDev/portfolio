// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="#experience" className="navbar-link">Experience</a></li>
          <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
          <li className="navbar-item"><a href="#services" className="navbar-link">Services</a></li>
          <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
