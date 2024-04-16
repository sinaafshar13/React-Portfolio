import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Sina Afshari</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer-link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://t.me/Cryptocoder19"
            className="footer-social-icon"
            target="_blank"
          >
            <i className="bi bi-telegram"></i>
          </a>
          <a
            href="https://github.com/sinaafshar13"
            className="footer-social-icon"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sina-afshari-32b3bb288/"
            className="footer-social-icon"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <span className="footer-copy">
          &#169; Cryptocoder19. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
