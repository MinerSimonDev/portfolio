import React, { useRef } from 'react';
import './App.css';
import About from './components/About.jsx';
import Donut from './components/Donut.jsx';
import TimeLineItem from './components/TimeLineItem.tsx';
import Navbar from './components/Navbar.jsx';
import Project from './components/Projects.tsx';

import examplePicture from './images/grayscreen.jpg';
import { motion, useInView } from 'framer-motion';

function App() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="App" id="home">
      <Navbar />
      <div className="section-1">
        <About />
        <Donut />
      </div>
      <div className="section-2" id="experience">
        <TimeLineItem
          title="Portfolio"
          date="AUGUST 2024 - NOW"
          description="I am currently developing an interactive portfolio using React to showcase my web development skills, highlight my projects, technologies, and provide a structured overview of my experience."
          link="#home"
          linkName="Visit home"
        />
        <TimeLineItem
          title="HTL Dornbirn"
          date="SEPTEMBER 2022 - JULY 2027"
          description="I attend HTL Dornbirn, where I focus on computer science and business. This allows me to gain technical skills in areas like software development and IT systems, while also learning about business management and economics."
          link="https://htldornbirn.at"
          linkName="Visit HTL Dornbirn"
        />
        <TimeLineItem
          title="Internship at Valantic"
          date="JULY 2024 - AUGUST 2024"
          description="I completed a four-week internship at Valantic, a company specializing in SAP solutions. During my time there, I focused on SAP development and S/4HANA, which allowed me to deepen my skills in enterprise software and modern business management systems."
          link="https://valantic.com/"
          linkName="Visit Valantic"
        />
      </div>

      <div className="section-3" id="projects">
        <motion.div
          ref={ref}
          initial={{ x: '-15vw', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
        >
          <h1>My Projects</h1>
        </motion.div>
        <div className="projects-container-1">
          <Project
            imageSrc={examplePicture}
            projectName="EasySeat"
          />
          <Project
            imageSrc={examplePicture}
            projectName="Dajino.at"
          />
          <Project
            imageSrc={examplePicture}
            projectName="Shake-Clubbing.at"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
