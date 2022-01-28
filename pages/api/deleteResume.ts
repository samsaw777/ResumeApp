import { NextApiResponse, NextApiRequest } from "next";
import Prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { resumeId } = req.body;

  await Prisma.resume
    .delete({
      where: {
        id: resumeId,
      },
    })
    .then((response) => {
      res.status(200).json({
        status: "success",
        message: "Resume deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error deleting resume",
      });
    });
};

export default handler;
