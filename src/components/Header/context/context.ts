import { createContext, Dispatch, SetStateAction } from 'react';

interface HeaderContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultValues: HeaderContextProps = {
  isOpen: false,
  setIsOpen: () => {},
};

export const HeaderContext = createContext<HeaderContextProps>(defaultValues);
