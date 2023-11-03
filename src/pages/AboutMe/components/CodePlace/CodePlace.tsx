import styles from './CodePlace.module.scss';
import { codeLines } from '../../static.tsx';

const CodePlace = () => {
  return (
    <div className={styles.codePlace}>
      {codeLines.map((line, index) => (
        <div key={index} className={styles.codePlace__line}>
          <div className={styles.codePlace__line__number}>{index + 1}</div>
          <div className={styles.codePlace___line__text}>{line}</div>
        </div>
      ))}
    </div>
  );
};

export default CodePlace;
