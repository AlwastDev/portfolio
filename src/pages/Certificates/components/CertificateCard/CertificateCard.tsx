import { FC, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

interface CertificateCardProps {
  certificate: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const CertificateCard: FC<CertificateCardProps> = ({ certificate }) => {
  const [pagesCount, setPagesCount] = useState(1);

  console.log({ certificate: certificate, count: pagesCount });

  return (
    <div style={{ display: 'flex', width: '200px', height: '300px' }}>
      <Document
        file={certificate}
        onLoadSuccess={(data) => {
          setPagesCount(data._pdfInfo.numPages);
        }}
      >
        {Array.from(new Array(pagesCount), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={500} />
        ))}
      </Document>
    </div>
  );
};

export default CertificateCard;
