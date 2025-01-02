import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Ritik Mathur. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/RITIKMATHUR442/callbackhell-project" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/ngitbub.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/mr_mathur.902?igsh=MTI0OXhsYnBiNDU2eA==" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/Instagram_icon.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/ritik.mathur.902/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/Facebook logo.svg" alt="Facebook" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;