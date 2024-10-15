// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

import GitHubLogo from '../icons/icons8-github.svg';
import LinkedInLogo from '../icons/icons8-linkedin.svg';

const About = () => {
  return (
    <div className='About'>
    <motion.div
      initial={{ x: '-10vw', opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, duration: 3 }}
    >
      <h1 className='h1-1'>Simon Grimm</h1>
      <p className='p-1'>A Full Stack Developer from 🇦🇹</p>
      <span>Passionate about innovation and Open Source, with a love for Linux.</span><br />
      <span>Creating <b>clean</b>, <b>minimalist designs</b> and <b>efficient solutions</b>.</span><br />
      <span>Committed to making a meaningful impact through simplicity.</span><br />
      <div className='socials'>
        <div className='github-button'>
          <a href="https://github.com/MinerSimonDev/" rel='noreferrer' className='nolink' target='_blank'>GitHub</a>
          <img src={GitHubLogo} alt='GitHub' />
        </div>
        <div className='linkedin-button'>
          <a href="https://www.linkedin.com/in/simon-grimm-6627a1256" rel='noreferrer' className='nolink' target='_blank'>LinkedIn</a>
          <img src={LinkedInLogo} alt='LinkedIn' />
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default About;
