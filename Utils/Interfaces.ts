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
