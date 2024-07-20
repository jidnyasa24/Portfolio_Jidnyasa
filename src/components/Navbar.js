import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="intro" smooth={true} duration={500}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link to="intro" className="desktopMenuListItem" smooth={true} duration={500}>About Me</Link>
        <Link to="skills" className="desktopMenuListItem" smooth={true} duration={500}>Resume</Link>
        <Link to="projects" className="desktopMenuListItem" smooth={true} duration={500}>Projects</Link>
      </div>
      <Link to="contact" className="desktopMenuBtn" smooth={true} duration={500}>
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
