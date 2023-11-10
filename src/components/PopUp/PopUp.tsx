import { FC } from 'react';
import { PopUpProps } from './types.ts';
import { createPortal } from 'react-dom';
import styles from './PopUp.module.scss';

const PopUp: FC<PopUpProps> = ({ isOpen, onClose, children }) => {
  const popUpElement = document.getElementById('popup-root');

  if (!isOpen) return null;

  return (
    <>
      {popUpElement &&
        createPortal(
          <div className={styles.popUpOverlay}>
            <div className={styles.popUp}>
              <button className={styles.popUp__closeButton} onClick={onClose} />
              <div className={styles.popUp__children}>{children}</div>
            </div>
          </div>,
          popUpElement,
        )}
    </>
  );
};

export default PopUp;
