import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_menu">
    
            <Link to="/skills" className="links">
              <li>Skills</li>
            </Link>
            <Link to="/certification" className="links">
              <li>Certification</li>
            </Link>
            <Link to="/education" className="links">
              <li>Education</li>
            </Link>
            <Link to="/experience" className="links">
              <li>Expereince</li>
            </Link>
      </div>
      <div className="icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-github"></i>
        <i clasName="fab fa-linkedin-in"></i>
      </div>
      <div className="contact_info">
        <div className="email">Email email.com</div>
        <div className="phone">Phone +78945613</div>
      </div>
    </div>
  );
};

export default Footer;
