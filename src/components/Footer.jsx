import React from 'react';
import '../styles/global.css';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; // Import the icons you need

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Sweet Bliss. All rights reserved.</p>
      <div className="social-links">
        <a href="https://instagram.com/sweetbliss_25" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} /> {/* Instagram icon */}
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} /> {/* Facebook icon */}
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={24} /> {/* TikTok icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;