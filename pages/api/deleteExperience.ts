import { NextApiResponse, NextApiRequest } from "next";
import Prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { experienceId } = req.body;
  console.log(experienceId);
  await Prisma.experience
    .delete({
      where: {
        id: experienceId,
      },
    })
    .then(() => {
      res.status(200).json({
        message: "Experience deleted successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Experience deletion failed",
        error,
      });
    });
};

export default handler;
