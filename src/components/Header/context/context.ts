import { createContext, Dispatch, SetStateAction } from 'react';

interface HeaderContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderContext = createContext<HeaderContextProps | null>(null);
