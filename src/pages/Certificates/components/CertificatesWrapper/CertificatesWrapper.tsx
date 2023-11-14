import styles from '@components/Carousel/Carousel.module.scss';
import { useCertificatesCarousel } from '../../hooks/useCertificatesCarousel.tsx';
import CertificateCard from '../CertificateCard';
import { Carousel } from '@components/index.ts';

const CertificatesWrapper = () => {
  const { currentCertificates, isSwitchingLeft, isSwitchingRight, nextGroup, prevGroup } = useCertificatesCarousel();

  return (
    <Carousel
      isSwitchingLeft={isSwitchingLeft}
      isSwitchingRight={isSwitchingRight}
      nextGroup={nextGroup}
      prevGroup={prevGroup}
    >
      {currentCertificates.map((certificate, i) => (
        <div key={`certificate_${i}`} className={styles.slide}>
          <CertificateCard certificate={certificate} />
        </div>
      ))}
    </Carousel>
  );
};

export default CertificatesWrapper;
