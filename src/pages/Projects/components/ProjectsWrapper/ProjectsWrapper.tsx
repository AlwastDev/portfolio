import styles from '@components/Carousel/Carousel.module.scss';
import ProjectCard from '../ProjectCard';
import { useProjectsCarousel } from '../../hooks/useProjectsCarousel.tsx';
import { Carousel, Loader } from '@components/index.ts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProjectsWrapper = () => {
  const navigate = useNavigate();
  const projectsCarousel = useProjectsCarousel();

  if (projectsCarousel.isLoading) {
    return <Loader />;
  }

  if (projectsCarousel.isError) {
    toast('Oops. There is been an unforeseen error!', {
      type: 'error',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    return navigate('/');
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
