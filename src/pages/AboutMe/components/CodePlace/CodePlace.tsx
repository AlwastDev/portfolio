import { memo } from 'react';

import { codeLines } from '../../static/static.tsx';

import styles from './CodePlace.module.scss';

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
