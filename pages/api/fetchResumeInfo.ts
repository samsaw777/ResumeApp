import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { resumeId } = req.body;

  const resumeData = await prisma.resume.findFirst({
    where: {
      id: resumeId,
    },
    include: {
      userIntroduction: true,
      userEducation: true,
    },
  });

  res.status(200).json(resumeData);
};

export default handler;
