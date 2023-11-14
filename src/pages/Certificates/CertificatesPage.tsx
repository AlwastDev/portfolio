import { CertificatesWrapper } from './components';
import { useState } from 'react';
import { MyContext } from './context/context.ts';

const CertificatesPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ isOpen, setIsOpen }}>
      <CertificatesWrapper />
    </MyContext.Provider>
  );
};

export default CertificatesPage;
