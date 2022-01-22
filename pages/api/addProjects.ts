import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    resumeId,
    projectName,
    projectDescription,
    projectGithubLink,
    projectWebsiteLink,
  } = req.body;

  await prisma.projects.create({
    data: {
      projectName: projectName,
      projectDescription: projectDescription,
      projectGithubLink: projectGithubLink,
      projectWebsiteLink: projectWebsiteLink,
      resumeId: resumeId,
    },
  });

  res.status(200).json("Project added into the database.");
};

export default handler;
