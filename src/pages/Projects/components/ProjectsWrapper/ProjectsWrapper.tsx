import styles from './ProjectsWrapper.module.scss';
import ProjectCard from '../ProjectCard';
import { useProjectsCarousel } from '../../hooks/useProjectsCarousel.tsx';
import { Loader } from '@components/index.ts';

const ProjectsWrapper = () => {
  const { isLoading, currentProjects, isSwitchingLeft, isSwitchingRight, nextGroup, prevGroup } = useProjectsCarousel();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.carousel}>
        {!isSwitchingLeft && !isSwitchingRight && (
          <button className={styles.previousButton} onClick={prevGroup}></button>
        )}
        <div
          className={`${styles.slides} ${
            isSwitchingLeft ? styles.slidesLeft : isSwitchingRight ? styles.slidesRight : ''
          }`}
        >
          {currentProjects.map((project, i) => (
            <div key={`project_${i}`} className={styles.slide}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        {!isSwitchingLeft && !isSwitchingRight && <button className={styles.nextButton} onClick={nextGroup}></button>}
      </div>
    </div>
  );
};

export default ProjectsWrapper;