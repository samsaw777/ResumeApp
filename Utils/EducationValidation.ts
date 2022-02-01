export const validateCourseName = (value: any) => {
  const errors: any = {};
  if (value.courseName?.length < 3) {
    errors.courseName = "Course name must be at least 3 characters";
  } else if (value.courseName?.length > 15) {
    errors.courseName = "Course name must be less than 15 characters";
  } else if (typeof value.courseName === "number") {
    errors.courseName = "Course name must be a string";
  } else if (value.institute?.length < 3) {
    errors.institute = "Insitute must be at least 3 characters";
  } else if (value.institute?.length > 15) {
    errors.institute = "Institute must be less than 15 characters";
  } else if (typeof value.institute === "number") {
    errors.institute = "Institute must be a string";
  } else if (value.startDate > value.endDate) {
    errors.endDate = "Cannot complete course before start date";
  } else if (value.location?.length < 3) {
    errors.location = "Location must be at least 3 characters";
  } else if (value.location?.length > 15) {
    errors.location = "Location must be less than 15 characters";
  } else if (typeof value.location === "number") {
    errors.location = "Course name must be a string";
  }
  return errors;
};
