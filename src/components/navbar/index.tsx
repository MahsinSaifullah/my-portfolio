import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';

import './index.scss';

const navItems = [
  'Home',
  'About',
  'Portfolio',
  'Experience',
  'Education',
  'Contact',
];

const Navbar: React.FC = () => {
  const [currentLink, setCurrentLink] = useState('Home');

  const handleNavLinkSelect = (navLink: string) => {
    setCurrentLink(navLink);
  };
  return (
    <>
      <nav className="navbar navbar_custom  navbar-expand-lg">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar__customIcon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar_collapse-background"
          id="navbarNav"
        >
          <NavbarLinks
            activeLink={currentLink}
            onNavLinkSelect={handleNavLinkSelect}
            navItems={navItems}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
