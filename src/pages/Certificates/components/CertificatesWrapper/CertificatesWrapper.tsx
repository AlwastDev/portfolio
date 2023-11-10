import styles from './CertificatesWrapper.module.scss';
import { useCertificatesCarousel } from '../../hooks/useCertificatesCarousel.tsx';
import CertificateCard from '../CertificateCard';

const CertificatesWrapper = () => {
  const { currentCertificates, isSwitchingLeft, isSwitchingRight, nextGroup, prevGroup } = useCertificatesCarousel();

  return (
    <div className={styles.certificatesWrapper}>
      <div className={styles.carousel}>
        {!isSwitchingLeft && !isSwitchingRight && (
          <button className={styles.previousButton} onClick={prevGroup}></button>
        )}
        <div
          className={`${styles.slides} ${
            isSwitchingLeft ? styles.slidesLeft : isSwitchingRight ? styles.slidesRight : ''
          }`}
        >
          {currentCertificates.map((certificate, i) => (
            <div key={`certificate_${i}`} className={styles.slide}>
              <CertificateCard certificate={certificate} />
            </div>
          ))}
        </div>
        {!isSwitchingLeft && !isSwitchingRight && <button className={styles.nextButton} onClick={nextGroup}></button>}
      </div>
    </div>
  );
};

export default CertificatesWrapper;
