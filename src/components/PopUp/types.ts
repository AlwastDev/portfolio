import { ReactNode } from 'react';

export interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode[] | ReactNode;
}
