import styles from './MainContent.module.scss';
import { TypeAnimation } from 'react-type-animation';

const MainContent = () => {
  return (
    <div className={styles.content__left}>
      <h2 className={styles.text__welcome}>Hi everyone. My name is Alexander Shapar</h2>
      <h2 className={styles.text__location}>
        I am from <span className={styles.text__location__country}>Ukraine</span>,{' '}
        <span className={styles.text__location__city}>Kharkiv</span>
      </h2>
      <TypeAnimation
        sequence={['> Back-end', 500, '> Front-end developer', 1000]}
        wrapper="h1"
        speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
        className={styles.text__position}
        repeat={Infinity}
      />
      <p className={styles.text__comment}>// welcome to my portfolio</p>
      <p className={styles.text__comment}>// you can also see my projects on my Github page</p>
      <p className={styles.text__code}>
        <span className={styles.text__code__const}>const</span>{' '}
        <span className={styles.text__code__nameVariable}>githubLink</span> <span>=</span>{' '}
        <a
          className={styles.text__code__linkText}
          href={`https://github.com/${import.meta.env.VITE_gitHubNickname}`}
          target="_blank"
        >
          “https://github.com/{import.meta.env.VITE_gitHubNickname}”
        </a>
      </p>
      <a className={styles.cvLink} href={import.meta.env.VITE_cvLink} target="_blank">
        Curriculum
      </a>
      <div className={styles.leftBottomSideIsland}></div>
    </div>
  );
};

export default MainContent;
