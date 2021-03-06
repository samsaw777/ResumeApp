import {
  educationValidation,
  projectValidation,
  skillError,
  SkillValidation,
} from "./Interfaces";

export const validateCourseName = ({
  courseName,
  institute,
  startDate,
  endDate,
  location,
}: educationValidation | any) => {
  const errors: any = {};
  if (courseName?.length < 3) {
    errors.courseName = "Course name must be at least 3 characters";
  } else if (courseName?.length > 15) {
  } else if (courseName?.length > 15) {
    errors.courseName = "Course name must be less than 15 characters";
  } else if (typeof courseName === "number") {
    errors.courseName = "Course name must be a string";
  } else if (institute?.length < 3) {
    errors.institute = "Insitute must be at least 3 characters";
  } else if (institute?.length > 15) {
    errors.institute = "Institute must be less than 15 characters";
  } else if (typeof institute === "number") {
    errors.institute = "Institute must be a string";
  } else if (startDate > endDate) {
    errors.endDate = "Cannot complete course before start date";
  } else if (location?.length < 3) {
    errors.location = "Location must be at least 3 characters";
  } else if (location?.length > 15) {
    errors.location = "Location must be less than 15 characters";
  } else if (courseName === "") {
    errors.courseName = "Course name is required";
  } else if (institute === "") {
    errors.institute = "Institute is required";
  } else if (startDate === "") {
    errors.startDate = "Start date is required";
  } else if (endDate === "") {
    errors.endDate = "End date is required";
  } else if (location === "") {
    errors.location = "Location is required";
  }
  return errors;
};

//validating the url.
const validateUrl = (url: string | undefined) => {
  var res = url?.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
};

export const projectValidate = ({
  projectName,
  description,
  githubLink,
  liveLink,
}: projectValidation | any) => {
  const errors: any = {};
  if (projectName === "") {
    errors.projectName = "Project name cannot be empty!";
  } else if (projectName?.length < 3) {
    errors.projectName = "Project Name should be alteast 3 characters";
  } else if (description === "") {
    errors.description = "Description cannot be empty!";
  } else if (description?.length < 3) {
    errors.description = "Description should be atleast 3 characters";
  } else if (githubLink && !validateUrl(githubLink)) {
    errors.githubLink = "Github link is not valid!";
  } else if (liveLink && !validateUrl(liveLink)) {
    errors.liveLink = "Live link is not valid!";
  }

  return errors;
};

export const skillValidation = ({ skillName }: SkillValidation | any) => {
  const errors: skillError = {
    skillName: "",
  };
  if (skillName === "") {
    errors.skillName = "Skill name cannot be empty!";
  } else if (skillName?.length < 3) {
    errors.skillName = "Skill name should be atleast 3 characters";
  }

  return errors;
};

/* else if (
    courseName?.split("").map((letter: any, index: number) => {
      if (typeof letter == "number") {
        return true;
      }
    })
  ) {
    errors.courseName = "Course name must not contain numbers";
  }*/

export const ExperienceValidation = ({
  position,
  company,
  description,
  startDate,
  endDate,
  location,
}: any) => {
  const errors: any = {};
  if (position === "") {
    errors.position = "Position cannot be empty!";
  } else if (position?.length < 3) {
    errors.position = "Position should be atleast 3 characters";
  } else if (company === "") {
    errors.company = "Company cannot be empty!";
  } else if (company?.length < 3) {
    errors.company = "Company should be atleast 3 characters";
  } else if (description === "") {
    errors.description = "Description cannot be empty!";
  } else if (description?.length < 3) {
    errors.description = "Description should be atleast 3 characters";
  } else if (startDate === "") {
    errors.startDate = "Start date cannot be empty!";
  } else if (endDate === "") {
    errors.endDate = "End date cannot be empty!";
  } else if (location === "") {
    errors.location = "Location cannot be empty!";
  } else if (location?.length < 3) {
    errors.location = "Location should be atleast 3 characters";
  }
  return errors;
};
