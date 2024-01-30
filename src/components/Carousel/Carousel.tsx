import React, { FC } from 'react';

import styles from './Carousel.module.scss';

interface CarouselProps {
  isSwitchingLeft: boolean;
  isSwitchingRight: boolean;
  isDisabledLeft: boolean;
  isDisabledRight: boolean;
  prevGroup: () => void;
  nextGroup: () => void;
  children: React.ReactNode | React.ReactNode[];
}

const Carousel: FC<CarouselProps> = ({
  isSwitchingLeft,
  isSwitchingRight,
  isDisabledLeft,
  isDisabledRight,
  prevGroup,
  nextGroup,
  children,
}) => {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {!isDisabledLeft && !isSwitchingLeft && !isSwitchingRight && (
          <button className={styles.previousButton} onClick={prevGroup}></button>
        )}
        <div
          className={`${styles.slides} ${
            isSwitchingLeft ? styles.slidesLeft : isSwitchingRight ? styles.slidesRight : ''
          }`}
        >
          {children}
        </div>
        {!isSwitchingLeft && !isSwitchingRight && !isDisabledRight && (
          <button className={styles.nextButton} onClick={nextGroup}></button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
