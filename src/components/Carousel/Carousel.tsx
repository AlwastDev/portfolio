import styles from './Carousel.module.scss';
import { FC } from 'react';
import { CarouselProps } from '@components/Carousel/types/types.ts';

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
