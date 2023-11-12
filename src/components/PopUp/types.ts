import React from 'react';

export interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode[] | React.ReactNode;
}
