import { createContext, Dispatch, SetStateAction } from 'react';

interface MyContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextProps | null>(null);
