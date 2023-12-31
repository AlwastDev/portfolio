import { createContext, Dispatch, SetStateAction } from 'react';

interface CertificateContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CertificateContext = createContext<CertificateContextProps | null>(null);
