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
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
         {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};


export default Navbar;
