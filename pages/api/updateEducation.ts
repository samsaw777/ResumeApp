import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { educationId, courseName, institute, startDate, endDate, location } =
    req.body;

  await prisma.education.update({
    where: {
      id: educationId,
    },
    data: {
      courseName: courseName,
      institute: institute,
      startDate: startDate,
      endDate: endDate,
      location: location,
    },
  });

  res.status(200).json({
    message: "Projects updated!",
  });
};

export default handler;
