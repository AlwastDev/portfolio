import { useEffect, useState } from 'react';
import { Project } from '../types/types.ts';
import gitHubApi from '../api/GitHubAPI.tsx';
import { useAppQuery } from '@hooks/useAppQuery.ts';
import { useWindowWidth } from '@hooks/useWindowWidth.ts';

export const useProjectsCarousel = () => {
  const [countProjectOnPage, setCountProjectOnPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [isSwitchingLeft, setIsSwitchingLeft] = useState(false);
  const [isSwitchingRight, setIsSwitchingRight] = useState(false);

  const width = useWindowWidth();

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
      const remainingProjects = projects.length - currentPage * countProjectOnPage;

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
      const startIndex = (currentPage - 1) * countProjectOnPage;
      const endIndex = startIndex + countProjectOnPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
    }
  }, [countProjectOnPage, currentPage, projects]);

  useEffect(() => {
    if (width < 776) {
      setCountProjectOnPage(1);
    } else if (width < 1366) {
      setCountProjectOnPage(2);
    } else {
      setCountProjectOnPage(3);
    }
  }, [width]);

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
