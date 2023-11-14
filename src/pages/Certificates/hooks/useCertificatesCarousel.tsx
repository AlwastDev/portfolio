import { useEffect, useState } from 'react';
import { certificates } from '../static/static.ts';
import { Certificate } from '@pages/Certificates/types/types.ts';
import { useWindowWidth } from '@hooks/useWindowWidth.ts';

export const useCertificatesCarousel = () => {
  const [countOnPage, setCountOnPage] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCertificates, setCurrentCertificates] = useState<Certificate[]>([]);
  const [isSwitchingLeft, setIsSwitchingLeft] = useState<boolean>(false);
  const [isSwitchingRight, setIsSwitchingRight] = useState<boolean>(false);
  const [isDisabledRight, setIsDisabledRight] = useState<boolean>(false);
  const [isDisabledLeft, setIsDisabledLeft] = useState<boolean>(false);

  const width = useWindowWidth();

  const nextGroup = () => {
    if (!isSwitchingLeft) {
      const remainingCertificates = certificates.length - currentPage * countOnPage;

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
      setIsDisabledRight(certificates.length - currentPage * countOnPage <= 0);
      setIsDisabledLeft(currentPage - 1 <= 0);

      const startIndex = (currentPage - 1) * countOnPage;
      const endIndex = startIndex + countOnPage;
      setCurrentCertificates(certificates.slice(startIndex, endIndex));
    }
  }, [countOnPage, currentPage]);

  useEffect(() => {
    if (width < 776) {
      setCountOnPage(1);
    } else if (width < 1366) {
      setCountOnPage(2);
    } else {
      setCountOnPage(3);
    }
  }, [width]);

  return {
    currentCertificates,
    isSwitchingLeft,
    isSwitchingRight,
    isDisabledRight,
    isDisabledLeft,
    nextGroup,
    prevGroup,
  };
};
