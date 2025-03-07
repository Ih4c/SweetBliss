import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img
            src="/images/sweet-bliss-logo.jpg" // Path to your logo
            alt="Sweet Bliss Logo"
            className="logo-image"
          />
          <div className="logo-text">
            <span className="sweet">Sweet</span>
            <span className="bliss">Bliss</span>
          </div>
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;