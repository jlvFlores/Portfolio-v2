import React from 'react';
import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';

const Header = () => (
  <header>
    <a href="#headline">
      <img src={viteLogo} alt="Logo" />
    </a>
    <ul>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><img src={reactLogo} alt="Bar" /></li>
    </ul>
  </header>
);

export default Header;
