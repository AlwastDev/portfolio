import styles from './HomePage.module.scss';
import { Islands, MainContent } from './components';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <MainContent />
      <Islands />
    </div>
  );
};

export default HomePage;
