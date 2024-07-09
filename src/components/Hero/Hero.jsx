import React from 'react'
import './Hero.css';
import darkarrow from '../../assets/dark-arrow.png';

function Hero() {
  return (
    <div className="hero container">
        <div className="herotext">
            <h1>We ensure better education for a better world</h1>
            <p>our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={darkarrow}></img></button>
        </div>
    </div>
  )
}

export default Hero