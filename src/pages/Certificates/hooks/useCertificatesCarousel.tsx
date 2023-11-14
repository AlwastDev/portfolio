import { useEffect, useState } from 'react';
import { certificates } from '../static/static.ts';
import { Certificate } from '@pages/Certificates/types/types.ts';

export const useCertificatesCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCertificates, setCurrentCertificates] = useState<Certificate[]>([]);
  const [isSwitchingLeft, setIsSwitchingLeft] = useState(false);
  const [isSwitchingRight, setIsSwitchingRight] = useState(false);

  const nextGroup = () => {
    if (!isSwitchingLeft) {
      const remainingCertificates = certificates.length - currentPage * 3;

      if (remainingCertificates > 0) {
        setIsSwitchingLeft(true);
        setTimeout(() => {
          setCurrentPage((prev) => prev + 1);
          setIsSwitchingLeft(false);
        }, 500);
      }
    }
  };

  const prevGroup = () => {
    if (!isSwitchingRight && currentPage - 1 > 0) {
      setIsSwitchingRight(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsSwitchingRight(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (certificates.length > 0) {
      const startIndex = (currentPage - 1) * 3;
      const endIndex = startIndex + 3;
      setCurrentCertificates(certificates.slice(startIndex, endIndex));
    }
  }, [currentPage]);

  return {
    currentCertificates,
    isSwitchingLeft,
    isSwitchingRight,
    nextGroup,
    prevGroup,
  };
};
