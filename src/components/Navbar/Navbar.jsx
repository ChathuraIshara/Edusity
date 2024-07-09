import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <div>
        <nav className="container">
          <img className="logo" src={logo}></img>
          <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className="btn">Contact Us</button></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar