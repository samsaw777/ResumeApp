import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { skillId } = req.body;

  await prisma.skills
    .delete({
      where: {
        id: skillId,
      },
    })
    .then((response) => {
      res.status(200).json({ message: "Skill deleted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting skill" });
    });
};

export default handler;
