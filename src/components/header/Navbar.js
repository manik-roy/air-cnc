import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="logo-ares">
        <h2>Aircnc</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Host your home</Link></li>
          <li><Link to="/homes">Host your experience</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup" className="active">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;