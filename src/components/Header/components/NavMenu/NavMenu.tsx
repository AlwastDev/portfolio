import styles from './NavMenu.module.scss';
import { Link } from 'react-router-dom';
import { FC, useContext } from 'react';
import { NavMenuProps } from './types/types.ts';
import { HeaderContext } from '@components/Header/context/context.ts';

const NavMenu: FC<NavMenuProps> = ({ isAside, navLinks }) => {
  const context = useContext(HeaderContext);

  if (!context) {
    return null;
  }

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
