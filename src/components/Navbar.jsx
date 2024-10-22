// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-container">
        <motion.div
          initial={{ y: '-5vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 1 }}
        >
          <ul className="navbar-menu">
            <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
            <li className="navbar-item"><a href="#berufserfahrung" className="navbar-link">Berufserfahrung</a></li>
            <li className="navbar-item"><a href="#aboutme" className="navbar-link">Über mich</a></li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
