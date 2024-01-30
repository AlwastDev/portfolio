import { Carousel } from '@components/index.ts';
import CertificateCard from './components/CertificateCard';
import { useCertificatesCarousel } from '@pages/Certificates/hooks/useCertificatesCarousel.tsx';

import styles from '@components/Carousel/Carousel.module.scss';

const CertificatesPage = () => {
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

export default CertificatesPage;
