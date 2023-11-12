import { useEffect, useState } from 'react';
import { Project } from '../types.ts';
import gitHubApi from '../api/GitHubAPI.tsx';
import { useAppQuery } from '../../../hooks/useAppQuery.ts';

export const useProjectsCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [isSwitchingLeft, setIsSwitchingLeft] = useState(false);
  const [isSwitchingRight, setIsSwitchingRight] = useState(false);

  const {
    data: projects,
    isLoading,
    isError,
  } = useAppQuery<Project[]>({
    request: async () => await gitHubApi.getRepositories(),
    keys: ['repositories'],
  });

  const nextGroup = () => {
    if (!isSwitchingLeft && projects) {
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
    if (projects && projects.length > 0) {
      const startIndex = (currentPage - 1) * 3;
      const endIndex = startIndex + 3;
      setCurrentProjects(projects.slice(startIndex, endIndex));
    }
  }, [currentPage, projects]);

  return {
    isLoading,
    isError,
    currentProjects,
    isSwitchingLeft,
    isSwitchingRight,
    nextGroup,
    prevGroup,
  };
};
