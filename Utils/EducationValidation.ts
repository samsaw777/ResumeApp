import { educationValidation } from "./Interfaces";

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
  } else if (
    courseName?.split("").map((letter: any, index: number) => {
      if (typeof letter == "number") {
        return true;
      }
    })
  ) {
    errors.courseName = "Course name must not contain numbers";
  } else if (courseName?.length > 15) {
  } else if (courseName?.length > 15) {
    errors.courseName = "Course name must be less than 15 characters";
  } else if (
    institute?.split("").map((letter: any, index: number) => {
      if (typeof letter == "number") {
        return true;
      }
    })
  ) {
    errors.institute = "Institute must not contain numbers";
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
  } else if (
    location?.split("").map((letter: any, index: number) => {
      if (typeof letter == "number") {
        return true;
      }
    })
  ) {
    errors.location = "Location should not include numbers";
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
