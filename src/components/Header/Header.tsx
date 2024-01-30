import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

import { headerLinks } from './static/static.ts';
import BurgerMenuIcon from '@assets/images/burgerMenu.svg';
import CloseIcon from '@assets/images/closeIcon.svg';
import { useWindowWidth } from '@hooks/useWindowWidth.ts';
import { NavMenu, SideMenu } from '@components/Header/components';
import { HeaderContext } from '@components/Header/context/context.ts';

import styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  const width = useWindowWidth();

  const [navLinks, setNavLinks] = useState(headerLinks);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  useEffect(() => {
    if (!navLinks.some((link) => link.to === location.pathname)) {
      const updatedNavLinks = navLinks.map((link) => ({
        ...link,
        isActive: link.to === location.pathname,
      }));
      setNavLinks(updatedNavLinks);
    }
  }, [location.pathname, navLinks]);

  return (
    <HeaderContext.Provider value={{ isOpen: isBurgerMenuOpen, setIsOpen: setBurgerMenuOpen }}>
      <header className={styles.header}>
        <TypeAnimation
          sequence={['< Sasha Shapar / >', 2000, '', 2000]}
          wrapper="h2"
          className={styles.header__logoText}
          repeat={Infinity}
          speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
        />
        {width > 1366 ? (
          <NavMenu isAside={false} navLinks={navLinks} />
        ) : (
          <>
            {isBurgerMenuOpen ? (
              <img
                className={styles.header__burgerMenu_close}
                src={CloseIcon}
                onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
                width={32}
                height={32}
                alt="BurgerMenu"
              />
            ) : (
              <img
                className={styles.header__burgerMenu_open}
                src={BurgerMenuIcon}
                onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
                width={32}
                height={32}
                alt="CloseIcon"
              />
            )}
            <SideMenu navLinks={navLinks} />
          </>
        )}
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
