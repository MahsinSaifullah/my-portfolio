import React from 'react';
import './index.scss';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__items">
          <div className="navbar__links selected">Home</div>
          <div className="navbar__links">About</div>
          <div className="navbar__links">Portfolio</div>
          <div className="navbar__links">Experience</div>
          <div className="navbar__links">Education</div>
          <div className="navbar__links">Contact</div>
        </div>
        <i className="mdi mdi-menu"></i>
      </nav>
    </>
  );
};

export default Navbar;
