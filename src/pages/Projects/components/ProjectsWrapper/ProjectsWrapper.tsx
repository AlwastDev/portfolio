import styles from '@components/Carousel/Carousel.module.scss';
import ProjectCard from '../ProjectCard';
import { useProjectsCarousel } from '../../hooks/useProjectsCarousel.tsx';
import { Carousel, Loader } from '@components/index.ts';

const ProjectsWrapper = () => {
  const projectsCarousel = useProjectsCarousel();

  if (projectsCarousel.isLoading) {
    return <Loader />;
  }

  return (
    <Carousel {...projectsCarousel}>
      {projectsCarousel.currentProjects.map((project, i) => (
        <div key={`project_${i}`} className={styles.slide}>
          <ProjectCard {...project} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectsWrapper;
