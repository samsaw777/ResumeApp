import { NextApiResponse, NextApiRequest } from "next";
import Prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { educationId } = req.body;

  await Prisma.education
    .delete({
      where: {
        id: educationId,
      },
    })
    .then((response) => {
      res.status(200).json({
        message: "Education deleted successfully",
      });
    })
    .catch((errrors) => {
      res.status(500).json({
        message: "Education deletion failed",
        error: errrors,
      });
    });
};

export default handler;
