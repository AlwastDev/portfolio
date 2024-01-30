import { useEffect, useState } from 'react';

import { Project } from '@models/models.ts';
import gitHubApi from '../api/GitHubAPI.tsx';
import { useAppQuery } from '@hooks/useAppQuery.ts';
import { useWindowWidth } from '@hooks/useWindowWidth.ts';

export const useProjectsCarousel = () => {
  const [countOnPage, setCountOnPage] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [isSwitchingLeft, setIsSwitchingLeft] = useState<boolean>(false);
  const [isSwitchingRight, setIsSwitchingRight] = useState<boolean>(false);
  const [isDisabledRight, setIsDisabledRight] = useState<boolean>(false);
  const [isDisabledLeft, setIsDisabledLeft] = useState<boolean>(false);

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
      const remainingProjects = projects.length - currentPage * countOnPage;

      setIsSwitchingLeft(true);
      if (remainingProjects > 0) {
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
      setIsDisabledRight(projects.length - currentPage * countOnPage <= 0);
      setIsDisabledLeft(currentPage - 1 <= 0);

      const startIndex = (currentPage - 1) * countOnPage;
      const endIndex = startIndex + countOnPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
    }
  }, [countOnPage, currentPage, projects]);

  useEffect(() => {
    if (width < 776) {
      setCountOnPage(1);
    } else if (width < 1366) {
      setCountOnPage(2);
    } else {
      setCountOnPage(3);
    }
  }, [width]);

  return {
    isLoading,
    isError,
    currentProjects,
    isSwitchingLeft,
    isSwitchingRight,
    isDisabledRight,
    isDisabledLeft,
    nextGroup,
    prevGroup,
  };
};
