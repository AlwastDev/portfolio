import { FC } from 'react';
import { ProjectProps } from './types.ts';
import styles from './ProjectCard.module.scss';

const ProjectCard: FC<ProjectProps> = ({ name, description, viewLink, repositoryLink, language }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__projectName}>{name}</h2>
      <h3 className={styles.card__projectName}>{language}</h3>
      <p className={styles.card__description}>{description}</p>
      <div className={styles.card__linkWrapper}>
        {viewLink && (
          <a className={styles.card__linkWrapper__link} href={viewLink} target="_blank">
            view-project
          </a>
        )}
        <a className={styles.card__linkWrapper__link} href={repositoryLink} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
