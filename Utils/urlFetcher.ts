export const urlFetcher = () => {
  //check if environment variable is development url localhost else producntion link
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://nextjs-samsaw777.vercel.app";
};
