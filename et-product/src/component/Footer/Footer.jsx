import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">EthioLocal</h2>
          <p className="footer-description">
            Your trusted marketplace for local Ethiopian products. Shop local, support local!
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@ethiolocal.com</li>
            <li>Phone: +251 123 456 789</li>
            <li>Address: Addis Ababa, Ethiopia</li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EthioLocal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 