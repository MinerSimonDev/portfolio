// src/components/About.jsx

import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className='About'>
      <h1 className='h1-1'>Simon Grimm</h1>
      <p className='p-1'>A Full Stack Developer from 🇦🇹</p>
      <span>Passionate about innovation and Open Source, with a love for Linux.</span><br />
      <span>Creating <b>clean</b>, <b>minimalist designs</b> and <b>efficient solutions</b>.</span><br />
      <span>Committed to making a meaningful impact through simplicity.</span><br />
      <div className='socials'>
        <button><a href="https://github.com/MinerSimonDev/" rel='noreferrer' className='nolink' target='_blank'>GitHub</a></button>
        <button><a href="https://www.linkedin.com/in/simon-grimm-6627a1256" rel='noreferrer' className='nolink' target='_blank'>LinkedIn</a></button>
      </div>
    </div>
  );
};

export default About;
