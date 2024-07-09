import React from 'react';
import './About.css';
import about from '../../assets/about.png';
import play from '../../assets/play-icon.png';

function About() {
  return (
    <div className='about'>
        <div className="aboutleft">
            <img src={about} className='aboutimg'>
            </img>
            <img src={play} className="playimg"></img>
        </div>
        <div className='aboutright'>
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Edusity University is a renowned institution committed to providing exceptional education and fostering innovation. Located in the heart of a vibrant academic community, Edusity University offers a wide range of undergraduate, graduate, and professional programs designed to prepare students for the challenges of the modern world.</p>
          <p>The university boasts a diverse and inclusive campus culture, where students from all backgrounds come together to learn, grow, and collaborate. Edusity University prides itself on its state-of-the-art facilities, including advanced research laboratories, modern classrooms, and comprehensive libraries.</p>
          <p>At Edusity University, student success is at the forefront of its mission. Through a wide array of support services, including academic advising, career counseling, and wellness programs, the university ensures that every student has the resources and opportunities to thrive.</p>
        </div>
    </div>
  )
}

export default About