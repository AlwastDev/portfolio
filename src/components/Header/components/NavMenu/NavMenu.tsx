import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLink } from '@components/Header/static/static.ts';
import { HeaderContext } from '@components/Header/context/context.ts';

import styles from './NavMenu.module.scss';

interface NavMenuProps {
  isAside: boolean;
  navLinks: HeaderLink[];
}

const NavMenu: FC<NavMenuProps> = ({ isAside, navLinks }) => {
  const context = useContext(HeaderContext);

  const closeMenu = () => {
    if (isAside) {
      context.setIsOpen(false);
    }
  };

  const navMenuStyles = isAside ? styles.asideNavMenu : styles.headerNavMenu;

  return (
    <nav className={`${navMenuStyles} ${styles.navMenu}`}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.to} className={link.isActive ? styles.activeLink : ''}>
            <Link to={link.to} onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
