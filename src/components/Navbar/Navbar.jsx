import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menuicon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

function Navbar() {

  const [isMobileMenu,setIsMobileMenu]=useState(true);

  const [sticky,setSticky]=useState(false);
  useEffect(()=>
  {
    window.addEventListener('scroll',()=>
    {
      window.scrollY>50 ? setSticky(true) :  setSticky(false);
    })

  },[])

  const handleToggle=()=>
  {
    isMobileMenu?setIsMobileMenu(false):setIsMobileMenu(true);

  }

  return (
    <div>
        <nav className={`container ${sticky?'darknav':''}`}>
          <img className="logo" src={logo}></img>
          <ul className={isMobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
          </ul>
          <img onClick={handleToggle} src={menuicon} className='menuicon'></img>
        </nav>
    </div>
  )
}

export default Navbar