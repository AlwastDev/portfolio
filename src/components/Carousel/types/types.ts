import React from 'react';

export type CarouselProps = {
  isSwitchingLeft: boolean;
  isSwitchingRight: boolean;
  prevGroup: () => void;
  nextGroup: () => void;
  children: React.ReactNode | React.ReactNode[];
};
