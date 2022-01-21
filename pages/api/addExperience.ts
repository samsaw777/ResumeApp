import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    position,
    company,
    startDate,
    endDate,
    location,
    description,
    inputArr,
  } = req.body;
  console.log(
    position,
    company,
    startDate,
    endDate,
    location,
    description,
    inputArr[0].value,
    inputArr.length
  );

  inputArr.map((intput: any, key: number) => {
    console.log(intput.value);
  });
  //   res.status(200).json({ message: "Education Added" });
};

export default handler;
