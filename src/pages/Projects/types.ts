export interface Project {
  name: string;
  description?: string;
  viewLink?: string;
  repositoryLink: string;
  language: string;
}

export interface GitHubRepository {
  name: string;
  html_url: string;
  description?: string;
  homepage?: string;
  language: string;
}
