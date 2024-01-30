import { createPortal } from 'react-dom';

import styles from './Loader.module.scss';

const Loader = () => {
  const loaderElement = document.getElementById('loader');

  if (!loaderElement) return null;

  return createPortal(
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div></div>
      </div>
    </div>,
    loaderElement,
  );
};

export default Loader;
