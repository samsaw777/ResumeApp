import type { NextApiRequest, NextApiResponse } from "next";
// // import { Resume } from "@prisma/client";
// import Prisma from "../../lib/prisma";
// import axios from "axios";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, userId } = req.body;
  await prisma.resume.create({
    data: {
      title: title,
      userId: userId,
    },
  });

  res.status(200).json({ message: "Resume created!" });
}
