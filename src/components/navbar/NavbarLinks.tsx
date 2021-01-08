import React from 'react';
import classNames from 'classnames';
import './navbarLinks.scss';

interface INavLinksProps {
  navItems: string[];
  activeLink: string;
  onNavLinkSelect: (navItem: string) => void;
}

const NavbarLinks: React.FC<INavLinksProps> = ({
  navItems,
  activeLink,
  onNavLinkSelect,
}) => {
  return (
    <ul className="navbar-nav">
      {navItems.map((item, idx) => {
        return (
          <li key={idx} className="nav-item  navbar__links">
            <a
              className={classNames(
                'nav-link',
                { selected: activeLink === item },
                'navbar__customLinks'
              )}
              onClick={() => {
                onNavLinkSelect(item);
              }}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
