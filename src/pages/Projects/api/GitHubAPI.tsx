import axios from 'axios';
import { GitHubRepository } from '../types.ts';

const gitHubApi = {
  getRepositories: async () => {
    return await axios.get<GitHubRepository[]>(
      `${import.meta.env.VITE_gitHubAPI}/users/${import.meta.env.VITE_gitHubNickname}/repos`,
    );
  },
};

export default gitHubApi;
