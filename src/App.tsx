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
          link="#home"
          linkName="Visit home"
        />
        <TimeLineItem
          title="EasySeat"
          date="AUGUST - OCTOBER"
          description="EasySeat is a seat reservation system for HTL Dornbirn's annual fashion show, held during the open house event. It allows visitors to book seats in advance, ensuring a smooth and organized experience for all attendees, with easy seat selection and management."
          link="https://easyseat.at"
          linkName="Visit EasySeat"
        />
      </div>
    </div>
  );
}

export default App;