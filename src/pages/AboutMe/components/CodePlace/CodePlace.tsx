import styles from './CodePlace.module.scss';
import { codeLines } from '../../static/static.tsx';
import { memo } from 'react';

const CodePlace = memo(() => {
  return (
    <div className={styles.codePlace}>
      {codeLines.map((line, index) => (
        <div key={`codeLine_${index}`} className={styles.codePlace__line}>
          {line}
        </div>
      ))}
    </div>
  );
});

export default CodePlace;
