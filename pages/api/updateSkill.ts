import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { skill, skillId } = req.body;

  const skills = await prisma.skills.update({
    where: {
      id: skillId,
    },
    data: {
      skillName: skill,
    },
  });

  res.status(200).json({ message: "Skill Updated!" });
};

export default handler;
