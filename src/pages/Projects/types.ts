export interface Project {
  name: string;
  description?: string;
  viewLink?: string;
  repositoryLink: string;
  mainLanguage: string;
  languages: { [key: string]: number };
}

export interface GitHubRepository {
  name: string;
  html_url: string;
  description?: string;
  homepage?: string;
  language: string;
  languages_url: string;
}
