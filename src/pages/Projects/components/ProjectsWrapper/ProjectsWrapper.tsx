import styles from '@components/Carousel/Carousel.module.scss';
import ProjectCard from '../ProjectCard';
import { useProjectsCarousel } from '../../hooks/useProjectsCarousel.tsx';
import { Carousel, Loader } from '@components/index.ts';

const ProjectsWrapper = () => {
  const { isLoading, currentProjects, isSwitchingLeft, isSwitchingRight, nextGroup, prevGroup } = useProjectsCarousel();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Carousel
      isSwitchingLeft={isSwitchingLeft}
      isSwitchingRight={isSwitchingRight}
      nextGroup={nextGroup}
      prevGroup={prevGroup}
    >
      {currentProjects.map((project, i) => (
        <div key={`project_${i}`} className={styles.slide}>
          <ProjectCard {...project} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectsWrapper;
