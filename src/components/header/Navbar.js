import React from 'react';
import './navbar.scss';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <header>
      <div className="warper">
        <div className="logo-ares">
          <h2 onClick={() => props.history.push('/')}>Aircnc</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Host your home</Link></li>
            <li><Link to="/experiences">Host your experience</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup" className="active">Sign up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navbar);