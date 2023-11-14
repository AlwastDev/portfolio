import { FC, useContext } from 'react';
import { CertificateCardProps } from './types.ts';
import styles from './CertificateCard.module.scss';
import { MyContext } from '@pages/Certificates/context/context.ts';
import CertificatePopUp from '@pages/Certificates/components/CertificatePopUp';

const CertificateCard: FC<CertificateCardProps> = ({ certificate }) => {
  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.card__certificateName}>{certificate.name}</h2>
        <button id="buttonOpenPopUp" className={styles.card__seeButton} onClick={() => context.setIsOpen(true)}>
          See
        </button>
      </div>
      {context.isOpen && <CertificatePopUp certificate={certificate} />}
    </>
  );
};

export default CertificateCard;
