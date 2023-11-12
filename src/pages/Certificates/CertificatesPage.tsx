import styles from './CertificatesPage.module.scss';
import { CertificatesWrapper } from './components';
import { useState } from 'react';
import { MyContext } from './context';

const CertificatesPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={styles.pageWrapper}>
        <CertificatesWrapper />
      </div>
    </MyContext.Provider>
  );
};

export default CertificatesPage;
