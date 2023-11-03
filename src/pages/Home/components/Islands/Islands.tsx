import styles from './Islands.module.scss';

const Islands = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__mainIsland} />
      <div className={styles.content__topRightIsland} />
      <div className={styles.content__bottomRightIsland} />
      <div className={styles.content__topLeftIsland} />
      <div className={styles.content__cloudsTopLeft} />
      <div className={styles.content__cloudsTopRight} />
    </div>
  );
};

export default Islands;
