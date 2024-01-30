export interface Certificate {
  name: string;
  certificatePdfLink: string;
}

export interface Project {
  name: string;
  html_url: string;
  description?: string;
  homepage?: string;
  language: string;
  languages_url: string;
}

export interface Languages {
  [key: string]: number;
}
