import { useEffect, useState } from 'react';
import { Project } from '../types.ts';
import gitHubApi from '../api/GitHubAPI.tsx';

export const useCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [isSwitchingLeft, setIsSwitchingLeft] = useState(false);
  const [isSwitchingRight, setIsSwitchingRight] = useState(false);

  const nextGroup = () => {
    if (!isSwitchingLeft) {
      const remainingProjects = projects.length - currentPage * 3;

      if (remainingProjects > 0) {
        setIsSwitchingLeft(true);
        setTimeout(() => {
          setCurrentPage((prev) => prev + 1);
          setIsSwitchingLeft(false);
        }, 500);
      }
    }
  };

  const prevGroup = () => {
    if (!isSwitchingRight && currentPage - 1 > 0) {
      setIsSwitchingRight(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsSwitchingRight(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (projects.length > 0) {
      const startIndex = (currentPage - 1) * 3;
      const endIndex = startIndex + 3;
      setCurrentProjects(projects.slice(startIndex, endIndex));
    }
  }, [currentPage, projects]);

  useEffect(() => {
    (async () => {
      const repositories = await gitHubApi.getRepositories();

      const newRepositories: Project[] = repositories.data.map((repository) => ({
        name: repository.name,
        description: repository.description,
        repositoryLink: repository.html_url,
        viewLink: repository.homepage,
        language: repository.language,
      }));

      setProjects(sortRepositories);
    })();
  }, []);

  return {
    currentProjects,
    isSwitchingLeft,
    isSwitchingRight,
    nextGroup,
    prevGroup,
  };
};
