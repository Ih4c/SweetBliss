import React from 'react';
import '../styles/global.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import Instagram and Mail icons

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Sweet Bliss. All rights reserved.</p>
      <div className="social-links">
        <a href="https://instagram.com/sweetbliss_25" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} /> {/* Instagram icon */}
        </a>
        <a href="mailto:egyasi122@gmail.com"> {/* Mailto link */}
          <FaEnvelope size={24} /> {/* Mail icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;