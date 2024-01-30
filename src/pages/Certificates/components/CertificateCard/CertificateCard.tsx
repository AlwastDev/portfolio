import { FC, useState } from 'react';
import { Certificate } from '@models/models.ts';
import CertificatePopUp from '@pages/Certificates/components/CertificatePopUp';

import styles from './CertificateCard.module.scss';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: FC<CertificateCardProps> = ({ certificate }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.card__certificateName}>{certificate.name}</h2>
        <button id="buttonOpenPopUp" className={styles.card__seeButton} onClick={() => setIsOpen(true)}>
          See
        </button>
      </div>
      {isOpen && <CertificatePopUp isOpen={isOpen} setIsOpen={setIsOpen} certificate={certificate} />}
    </>
  );
};

export default CertificateCard;
