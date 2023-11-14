import styles from '@components/Carousel/Carousel.module.scss';
import { useCertificatesCarousel } from '../../hooks/useCertificatesCarousel.tsx';
import CertificateCard from '../CertificateCard';
import { Carousel } from '@components/index.ts';

const CertificatesWrapper = () => {
  const certificatesCarousel = useCertificatesCarousel();

  return (
    <Carousel {...certificatesCarousel}>
      {certificatesCarousel.currentCertificates.map((certificate, i) => (
        <div key={`certificate_${i}`} className={styles.slide}>
          <CertificateCard certificate={certificate} />
        </div>
      ))}
    </Carousel>
  );
};

export default CertificatesWrapper;
