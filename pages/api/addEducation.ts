import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { courseName, institute, startDate, location, endDate, resumeId } =
    req.body;

  await prisma.education.create({
    data: {
      courseName: courseName,
      institute: institute,
      startDate: startDate,
      endDate: endDate,
      location: location,
      resumeId: resumeId,
    },
  });

  res.status(200).json({ message: "Education Added" });
};

export default handler;
