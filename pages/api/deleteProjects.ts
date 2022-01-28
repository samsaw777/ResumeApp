import { NextApiResponse, NextApiRequest } from "next";
import Prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { projectId } = req.body;

  await Prisma.projects
    .delete({
      where: {
        id: projectId,
      },
    })
    .then((response) => {
      res.status(200).json({
        message: "Project Deleted successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Project Deletion failed!",
        error,
      });
    });
};

export default handler;
