import React, { FC, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { Loader, PopUp } from '@components/index.ts';
import { Certificate } from '@models/models.ts';
import { useWindowWidth } from '@hooks/useWindowWidth.ts';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

interface CertificatePopUpProps {
  certificate: Certificate;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CertificatePopUp: FC<CertificatePopUpProps> = ({ certificate, isOpen, setIsOpen }) => {
  const width = useWindowWidth();

  const [pagesCount, setPagesCount] = useState<number>(1);

  return (
    <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Document
        file={certificate.certificatePdfLink}
        onLoadSuccess={(data) => {
          setPagesCount(data._pdfInfo.numPages);
        }}
        loading={<Loader />}
      >
        {Array.from(new Array(pagesCount), (_, index) => (
          <Page
            canvasBackground={'inherit'}
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={width < 550 ? 300 : 500}
          />
        ))}
      </Document>
    </PopUp>
  );
};

export default CertificatePopUp;
