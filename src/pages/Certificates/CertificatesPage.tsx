import { CertificatesWrapper } from './components';
import { useState } from 'react';
import { CertificateContext } from './context/context.ts';

const CertificatesPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <CertificateContext.Provider value={{ isOpen, setIsOpen }}>
      <CertificatesWrapper />
    </CertificateContext.Provider>
  );
};

export default CertificatesPage;
