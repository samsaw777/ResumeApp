import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const taskDone = async (id: string, task: string) => {
  await prisma.task.create({
    data: {
      taskDone: task,
      experienceId: id,
    },
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    position,
    company,
    startDate,
    endDate,
    location,
    description,
    inputArr,
    resumeId,
  } = req.body;

  const Experience = await prisma.experience.create({
    data: {
      resumeId: resumeId,
      position: position,
      company: company,
      startDate: startDate,
      endDate: endDate,
      location: location,
      aboutCompany: description,
    },
  });

  inputArr.map((intput: any, key: number) => {
    taskDone(Experience.id, intput.value);
  });
  res.status(200).json({ message: "Experience Added" });
};

export default handler;
