import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar =() => {
 


  // useEffect(() => {
  //   loadUser();
  //   // eslint-disable-next-line
  // }, []);

  // const onLogout = () => {
  //   logout();
  //   clearContacts();
  // };


  return (
    
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className=" hide-on-med-and-down navbar">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/" className="brand-logo">Logo</Link></li>
            <li className="center"><Link to="/resumes">Resume</Link></li>
            <li className="right"><Link to="/about">About Me</Link></li>
          </ul>
        </div>
      </nav>
   
  );
};


export default Navbar;
