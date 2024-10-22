// src/components/Donut.jsx
import React from "react";
import profilePicture from '../images/david-ammon.png';
import '../styles/Donut.css'
import { motion } from 'framer-motion'; 

const Donut = () => {
  return (
    <div style={{ marginLeft: '5vw', marginTop: '5vh' }} className="spinning-donut">
      <motion.div
          initial={{ x: '10vh', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 2 }}
      >
        <img src={profilePicture} alt="david-ammon" className="profilePicture"/>
      </motion.div>
    </div>
  );
};

export default Donut;
