import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const updateTask = async (id: string, taskDone: string) => {
  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      taskDone: taskDone,
    },
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    position,
    company,
    startDate,
    endDate,
    description,
    id,
    taskArray,
    location,
  } = req.body;

  const updatedExperience = await prisma.experience.update({
    where: {
      id: id,
    },
    data: {
      position: position,
      company: company,
      startDate: startDate,
      endDate: endDate,
      aboutCompany: description,
      location: location,
    },
  });

  taskArray.map((task: any, key: number) => {
    updateTask(task.id, task.taskDone);
  });

  res.status(200).json({ message: "Experience Updated!" });
};

export default handler;
