import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { resumeId } = req.body;

  const educationList = await prisma.education.findMany({
    where: {
      resumeId: resumeId,
    },
  });
  res.status(200).send(educationList);
};

export default handler;
