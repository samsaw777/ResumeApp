import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    projectName,
    projectDescription,
    projectGithubLink,
    projectWebsiteLink,
    projectId,
  } = req.body;

  await prisma.projects.update({
    where: {
      id: projectId,
    },
    data: {
      projectName: projectName,
      projectDescription: projectDescription,
      projectGithubLink: projectGithubLink,
      projectWebsiteLink: projectWebsiteLink,
    },
  });

  res.status(200).json({
    message: "Projects updated!",
  });
};

export default handler;
