import styles from './ProjectsPage.module.scss';
import { ProjectsWrapper } from './components';

const ProjectsPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <ProjectsWrapper />
    </div>
  );
};

export default ProjectsPage;
