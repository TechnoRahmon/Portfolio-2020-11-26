import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './../../css/styleV1.css'
//import './../../css/mediaQ/MQHome.css'

const Navbar =() => {
 

  const M = window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  useEffect(() => {
    //loadUser();


  },[]);

  // const onLogout = () => {
  //   logout();
  //   clearContacts();
  // };

 // I added background colorm padding and height to the navbar
  return (
    <>
  <div className="navbar-fixed">

    <nav>

      <div className=" indigo accent-4 nav-wrapper">

        <ul id="nav-mobile" className=" hide-on-med-and-down navbar">
          <li >
            <NavLink exact activeClassName="activeNav" to="/">Home</NavLink>
                      
          </li>
          <li >
            <NavLink exact activeClassName="activeNav" to="/projects">Projects</NavLink>
          </li>
          <li >
            <NavLink exact to="/" activeClassName="activeNav">
              Porfolio
            </NavLink>
          </li>
          <li className="center">
            <NavLink to="/resumes" activeClassName="activeNav">Resume</NavLink>
          </li>
          <li className="right">
            <NavLink to="/about" activeClassName="activeNav">About Me</NavLink>
          </li>
        </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger "><i className="material-icons">menu</i></a>
      <li className="  center title">Sara Marabo</li>
      </div>
    </nav>
  </div>

    <ul id="slide-out" className="sidenav">
      <li className="center sidenav-close">
            <Link to="/">Home</Link>
          </li >
          <li className="center sidenav-close">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="center sidenav-close">
            <Link to="/" >
              Porfolio
            </Link>
          </li>
          <li className="center sidenav-close">
            <Link to="/resumes">Resume</Link>
          </li>
          <li className="center sidenav-close">
            <Link to="/about">About Me</Link>
          </li>
  </ul>
        


 
  </>
  );
};


export default Navbar;
