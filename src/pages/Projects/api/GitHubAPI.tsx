import axios from 'axios';
import { sortByLanguageWithCSharpLast } from '@pages/Projects/helpers/sortByLanguageWithCSharpLast.ts';
import { Languages, Project } from '@pages/Projects/types/types.ts';
import { calculatePercentagesLanguages } from '@pages/Projects/helpers/calculatePercentagesLanguages.ts';

const gitHubAPI = {
  getRepositories: async () => {
    return await axios
      .get<Project[]>(`${import.meta.env.VITE_gitHubAPI}/users/${import.meta.env.VITE_gitHubNickname}/repos`)
      .then((response) => sortByLanguageWithCSharpLast(response.data, 'language', 'C#'));
  },
  getLanguages: async (languages_url: string) => {
    return await axios.get<Languages>(languages_url).then((response) => calculatePercentagesLanguages(response.data));
  },
};

export default gitHubAPI;
