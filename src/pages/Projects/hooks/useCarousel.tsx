import { useEffect, useState } from 'react';
import { Project } from '../types.ts';
import gitHubApi from '../api/GitHubAPI.tsx';
import { sortByLanguageWithCSharpLast } from '../helpers/sortByLanguageWithCSharpLast.ts';
import axios from 'axios';
import { calculatePercentagesLanguages } from '../helpers/calculatePercentagesLanguages.ts';

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

      const newRepositories: Project[] = [];

      for (const repository of repositories.data) {
        const languagesResponse = await axios(repository.languages_url);

        const project: Project = {
          name: repository.name,
          description: repository.description,
          repositoryLink: repository.html_url,
          viewLink: repository.homepage,
          mainLanguage: repository.language,
          languages: calculatePercentagesLanguages(languagesResponse.data),
        };

        newRepositories.push(project);
      }

      const sortedRepositories = sortByLanguageWithCSharpLast(newRepositories, 'mainLanguage', 'C#');

      setProjects(sortedRepositories);
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
