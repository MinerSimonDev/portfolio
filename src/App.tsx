import React from 'react'


import './App.css';
import About from './components/About.jsx';
import Donut from './components/Donut.jsx';
import TimeLineItem from './components/TimeLineItem.tsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className='App' id='home'>
      <Navbar />
      <div className='section-1'>
        <About />
        <Donut />
      </div>
      <div className="section-2" id='experience'>
        <TimeLineItem
          title="Portfolio"
          date="AUGUST - NOW"
          description="I am currently developing an interactive portfolio using React to showcase my web development skills, highlight my projects, technologies, and provide a structured overview of my experience."
          link="https://www.google.com"
        />
        <TimeLineItem
          title="Test"
          date="AUGUST - OCTOBER"
          description="I am currently developing an interactive portfolio using React to showcase my web development skills, highlight my projects, technologies, and provide a structured overview of my experience."
          link="https://www.google.com"
        />
      </div>
    </div>
  );
}

export default App;