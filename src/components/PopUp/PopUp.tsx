import { FC } from 'react';
import { PopUpProps } from './types.ts';
import { createPortal } from 'react-dom';
import styles from './PopUp.module.scss';

const PopUp: FC<PopUpProps> = ({ isOpen, onClose }) => {
  const children = document.getElementById('popup-root');

  if (!isOpen) return null;

  return (
    <>
      {children &&
        createPortal(
          <div className={styles.popUpOverlay}>
            <div className={styles.popUp}>
              <h2>Modal Title</h2>
              <p>This is the modal content.</p>
              <button onClick={onClose}>Close Modal</button>
            </div>
          </div>,
          children,
        )}
    </>
  );
};

export default PopUp;
