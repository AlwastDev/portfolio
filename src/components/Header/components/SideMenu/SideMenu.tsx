import { FC, useContext } from 'react';
import { SideMenuProps } from './types/types.ts';
import styles from './SideMenu.module.scss';
import { NavMenu } from '@components/Header/components';
import { HeaderContext } from '@components/Header/context/context.ts';

const SideMenu: FC<SideMenuProps> = ({ navLinks }) => {
  const context = useContext(HeaderContext);

  if (!context) {
    return null;
  }

  return (
    <div className={`${context.isOpen ? styles.sideMenu_open : styles.sideMenu_close}`}>
      <div className={`${styles.background} ${context.isOpen ? styles.open : styles.close}`}></div>
      <div className={`${styles.container}`}>
        <NavMenu isAside={true} navLinks={navLinks} />
      </div>
    </div>
  );
};

export default SideMenu;
