import { Islands, MainContent } from './components';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <MainContent />
      <Islands />
    </div>
  );
};

export default HomePage;
