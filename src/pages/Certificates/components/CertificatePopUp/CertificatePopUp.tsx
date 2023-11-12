import { FC, useContext, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PopUp } from '@components/index.ts';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { MyContext } from '@pages/Certificates/context.ts';
import { CertificatePopUpProps } from '@pages/Certificates/components/CertificatePopUp/types.ts';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const CertificatePopUp: FC<CertificatePopUpProps> = ({ certificate }) => {
  const context = useContext(MyContext);

  const [pagesCount, setPagesCount] = useState<number>(1);

  if (!context) {
    return null;
  }

  return (
    <PopUp isOpen={context.isOpen} onClose={() => context.setIsOpen(false)}>
      <Document
        file={certificate.certificatePdfLink}
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

export default CertificatePopUp;
