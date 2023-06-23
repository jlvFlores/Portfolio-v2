import React from 'react';
import viteLogo from '../assets/vite.svg';

const Header = () => (
  <header>
    <a href="#headline">
      <span className="logo">Portfolio</span>
    </a>
    <ul className="navbar">
      <li><a className="nav-option" href="#projects">Projects</a></li>
      <li><a className="nav-option" href="#about">About</a></li>
      <li><a className="nav-option" href="#contact">Contact</a></li>
      <li><img src={viteLogo} alt="Bar" /></li>
    </ul>
  </header>
);

export default Header;
