import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>
  {
    window.addEventListener('scroll',()=>
    {
      window.scrollY>50 ? setSticky(true) :  setSticky(false);
    })

  },[])

  return (
    <div>
        <nav className={`container ${sticky?'darknav':''}`}>
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