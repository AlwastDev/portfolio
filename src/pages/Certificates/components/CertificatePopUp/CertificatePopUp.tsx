import { FC, useContext, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loader, PopUp } from '@components/index.ts';
import { CertificateContext } from '@pages/Certificates/context/context.ts';
import { CertificatePopUpProps } from '@pages/Certificates/components/CertificatePopUp/types/types.ts';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const CertificatePopUp: FC<CertificatePopUpProps> = ({ certificate }) => {
  const context = useContext(CertificateContext);

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
        loading={<Loader />}
      >
        {Array.from(new Array(pagesCount), (_, index) => (
          <Page canvasBackground={'inherit'} key={`page_${index + 1}`} pageNumber={index + 1} width={500} />
        ))}
      </Document>
    </PopUp>
  );
};

export default CertificatePopUp;
