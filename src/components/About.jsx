// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

import InstagramLogo from '../icons/icons8-instagram.svg';
import LinkedInLogo from '../icons/icons8-linkedin.svg';

const About = () => {
  return (
    <div className='About'>
    <motion.div
      initial={{ x: '-10vw', opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
    >
      <h1 className='h1-1'>David Ammon</h1>
      <p className='p-1'>Schüler aus Österreich</p>
      <span>Leidenschaft für <b>Innovation</b>, <b>Nachhaltigkeit</b> und <b>Digitalisierung</b></span><br/>
      <span>Schüler an der HTL Dornbirn: <b>Produktmanagement</b> und <b>FutureTecs</b></span><br/>
      <div className='socials'>
        <div className='linkedin-button'>
          <a href="https://www.linkedin.com/in/david-ammon-18b008264/" rel='noreferrer' className='nolink' target='_blank'>LinkedIn</a>
          <img src={LinkedInLogo} alt='LinkedIn' />
        </div>
        <div className='github-button'>
          <a href="https://www.instagram.com/davidmagsushi/" rel='noreferrer' className='nolink' target='_blank'>Instagram</a>
          <img src={InstagramLogo} alt='GitHub' />
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default About;
