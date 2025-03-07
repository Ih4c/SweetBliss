import React from 'react';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Sweet Bliss. All rights reserved.</p>
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
      </div>
    </footer>
  );
};

export default Footer;