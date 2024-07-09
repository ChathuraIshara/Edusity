import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <div>
        <nav>
          <img src={logo}></img>
          <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar