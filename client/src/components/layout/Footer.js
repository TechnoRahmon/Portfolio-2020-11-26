import React from "react";
import { Link } from "react-router-dom";
import '../../css/styleV1.css'
const Footer = () => {
  return (
    <footer className="page-footer  text-grey darken-4">
      <div className="container">
        <div className="row">
          <div className=" colmns">
            <div className="col l4 offset-l2 s12">
              <ul className="footer_list">
                <li>
                  <Link className="grey-text text-lighten-3" to="/skills">
                    skills
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link className="grey-text text-lighten-3" to="/experience">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    className="grey-text text-lighten-3"
                    to="/certification"
                  >
                    Certification
                  </Link>
                </li>
                <li>
                  <Link className="grey-text text-lighten-3" to="/education">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icons">
              <i className="material-icons">facebook</i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact_info">
              <div className="email">
                <i className="far fa-envelope"></i> email.com
              </div>
              <div className="phone">
                <i className="fas fa-mobile-alt"></i> +78945613
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright ">
        <div className="container">
          © 2020 Copyright AE
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
