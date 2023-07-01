import React from 'react';
import '../home.css';

const Header = () => {
  const handleButtonClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header>
      <button className="logo" onClick={() => handleButtonClick('headline')}>Portfolio</button>
      <nav>
        <button className="nav-option" onClick={() => handleButtonClick('projects')}>Projects</button>
        <button className="nav-option" onClick={() => handleButtonClick('about')}>About</button>
        <button className="nav-option" onClick={() => handleButtonClick('contact-title')}>Contact</button>
      </nav>
    </header>
  );
}
export default Header;
