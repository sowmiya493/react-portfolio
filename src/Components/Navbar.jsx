import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">SOWMIYA S</div>
        <ul className="nav-list">
          <li><NavLink to="/" className="nav-link" activeClassName="active" exact>About</NavLink></li>
          <li><NavLink to="/about" className="nav-link" activeClassName="active">Skills</NavLink></li>
          <li><NavLink to="/portfolio" className="nav-link" activeClassName="active">Certifications</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
