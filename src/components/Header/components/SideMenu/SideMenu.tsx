import { FC, useContext } from 'react';

import { NavMenu } from '@components/Header/components';
import { HeaderLink } from '@components/Header/static/static.ts';
import { HeaderContext } from '@components/Header/context/context.ts';

import styles from './SideMenu.module.scss';

export interface SideMenuProps {
  navLinks: HeaderLink[];
}

const SideMenu: FC<SideMenuProps> = ({ navLinks }) => {
  const context = useContext(HeaderContext);

  return (
    <div className={`${context.isOpen ? styles.sideMenu_open : styles.sideMenu_close}`}>
      <div className={`${styles.background} ${context.isOpen ? styles.open : styles.close}`}></div>
      <div className={`${styles.container} ${context.isOpen ? styles.open : styles.close}`}>
        <NavMenu isAside={true} navLinks={navLinks} />
      </div>
    </div>
  );
};

export default SideMenu;
