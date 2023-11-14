import styles from './CodePlace.module.scss';
import { codeLines } from '../../static/static.tsx';
import { memo } from 'react';

const CodePlace = memo(() => {
  return (
    <div className={styles.codePlace}>
      {codeLines.map((line, index) => (
        <div key={index} className={styles.codePlace__line}>
          <div className={styles.codePlace__line__number}>{index + 1}</div>
          <div className={styles.codePlace__line__text}>{line}</div>
        </div>
      ))}
    </div>
  );
});

export default CodePlace;
