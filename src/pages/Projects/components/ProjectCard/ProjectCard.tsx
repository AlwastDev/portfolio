import { FC } from 'react';
import { ProjectProps } from './types.ts';
import styles from './ProjectCard.module.scss';
import { useAppQuery } from '@hooks/useAppQuery.ts';
import { Languages } from '@pages/Projects/types/types.ts';
import { Loader } from '@components/index.ts';
import gitHubAPI from '@pages/Projects/api/GitHubAPI.tsx';

const ProjectCard: FC<ProjectProps> = ({ name, description, html_url, homepage, languages_url }) => {
  const { data: languages, isLoading } = useAppQuery<Languages>({
    request: async () => await gitHubAPI.getLanguages(languages_url),
    keys: ['repositories', name],
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.card__projectName}>{name}</h2>
      <h3 className={styles.card__language}>
        {languages &&
          Object.keys(languages).map((language) => (
            <div key={`language_${language}`}>
              {language} {languages[language]}%
            </div>
          ))}
      </h3>
      <p className={styles.card__description}>{description}</p>
      <div className={styles.card__linkWrapper}>
        {homepage && (
          <a className={styles.card__linkWrapper__link} href={homepage} target="_blank">
            view-project
          </a>
        )}
        <a className={styles.card__linkWrapper__link} href={html_url} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
