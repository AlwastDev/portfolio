import { FC, useState } from 'react';
import { PopUp } from '@components/index.ts';
import { CertificateCardProps } from './types.ts';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const CertificateCard: FC<CertificateCardProps> = ({ certificate }) => {
  const [pagesCount, setPagesCount] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <PopUp isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <Document
        file={certificate}
        onLoadSuccess={(data) => {
          setPagesCount(data._pdfInfo.numPages);
        }}
      >
        {Array.from(new Array(pagesCount), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </PopUp>
  );
};

export default CertificateCard;
