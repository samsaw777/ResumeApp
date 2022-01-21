import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { skill, resumeId } = req.body;

  await prisma.skills.create({
    data: {
      skillName: skill,
      resumeId: resumeId,
    },
  });

  res.status(200).json({ message: "Education Added" });
};

export default handler;
