export interface Education {
  courseName: string;
  institute: string;
  startDate: number;
  endDate: number;
  location: string;
}

export interface Skill {
  skill: string;
}

export interface educationValidation {
  courseName: string | undefined;
  institute: string | undefined;
  startDate: number | undefined;
  endDate: number | undefined;
  location: string | undefined;
}

export interface projectValidation {
  projectName: string | undefined;
  description: string | undefined;
  githubLink?: string | undefined;
  liveLink?: string | undefined;
}

export interface Project {
  projectName: string | undefined;
  description: string | undefined;
  liveLink: string | undefined;
  githubLink: string | undefined;
}

export interface Error {
  projectName: string | undefined;
  description: string | undefined;
  liveLink?: string | undefined;
  githubLink?: string | undefined;
}
