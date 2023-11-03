import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [navLinks, setNavLinks] = useState([
    { to: '/', label: '_home', isActive: false },
    { to: '/projects', label: '_projects', isActive: false },
    { to: '/certificates', label: '_certificates', isActive: false },
    { to: '/aboutMe', label: '_about-me', isActive: false },
    { to: '/contact', label: '_contact-me', isActive: false },
  ]);

  useEffect(() => {
    const updatedNavLinks = navLinks.map((link) => ({
      ...link,
      isActive: link.to === location.pathname,
    }));
    setNavLinks(updatedNavLinks);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <TypeAnimation
        sequence={['< Sasha Shapar / >', 2000, '', 2000]}
        wrapper="h2"
        className={styles.header__logoText}
        repeat={Infinity}
        speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
      />
      <nav className={styles.header__navigation}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to} className={link.isActive ? styles.activeLink : ''}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
