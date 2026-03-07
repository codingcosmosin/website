import React from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../../configs/navbarLinks';
import ccLogo from '../../assets/ccLogo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={ccLogo} alt="logo" width="50" height="40" className="d-inline-block align-text-top me-2" />
          <span className="fw-bold">Coding Cosmos</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navbarLinks.map(link => (
              <li className="nav-item" key={link.label}>
                <Link className="nav-link" to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;