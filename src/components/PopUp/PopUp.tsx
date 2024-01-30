import React, { FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './PopUp.module.scss';

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode[] | React.ReactNode;
}

const PopUp: FC<PopUpProps> = ({ isOpen, onClose, children }) => {
  const popUpElement = document.getElementById('popup');
  const popUpOverlayRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen || !popUpElement) return null;

  return createPortal(
    <div ref={popUpOverlayRef} className={styles.popUpOverlay} onClick={onClose}>
      <div className={styles.popUp} onClick={(e) => e.stopPropagation()}>
        <button className={styles.popUp__closeButton} onClick={onClose} />
        <div className={styles.popUp__children}>{children}</div>
      </div>
    </div>,
    popUpElement,
  );
};

export default PopUp;
