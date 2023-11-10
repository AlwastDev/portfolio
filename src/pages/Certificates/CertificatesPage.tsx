import styles from './CertificatesPage.module.scss';
import { CertificatesWrapper } from './components';

const CertificatesPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <CertificatesWrapper />
    </div>
  );
};

export default CertificatesPage;
