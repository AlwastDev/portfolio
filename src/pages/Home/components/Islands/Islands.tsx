import styles from './Islands.module.scss';
import mainIsland from '@assets/bigLandComputer.png';
import land1 from '@assets/land1.png';
import land3 from '@assets/land3.png';
import land4 from '@assets/land4.png';
import cloud1 from '@assets/cloud1.png';
import cloud2 from '@assets/cloud2.png';

const Islands = () => {
  return (
    <div className={styles.content}>
      <img className={styles.content__mainIsland} src={mainIsland} width={100} height={100} alt={'mainIsland'} />
      <img className={styles.content__topRightIsland} src={land1} width={100} height={100} alt={'topRightIsland'} />
      <img
        className={styles.content__bottomRightIsland}
        src={land3}
        width={100}
        height={100}
        alt={'bottomRightIsland'}
      />
      <img className={styles.content__topLeftIsland} src={land1} width={100} height={100} alt={'topLeftIsland'} />
      <img className={styles.content__cloudsTopLeft} src={cloud1} width={100} height={100} alt={'cloudsTopLeft'} />
      <img className={styles.content__cloudsTopRight} src={cloud2} width={100} height={100} alt={'cloudsTopRight'} />
      <img className={styles.content__leftBottomSide} src={land4} width={100} height={100} alt={'cloudsTopRight'} />
    </div>
  );
};

export default Islands;
