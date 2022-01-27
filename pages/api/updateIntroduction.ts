import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    name,
    profession,
    description,
    email,
    phone,
    githubLink,
    websiteLink,
    twitterLink,
    linkedinLink,
    instagramLink,
    id,
  } = req.body;

  await prisma.introduction.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      profession: profession,
      description: description,
      email: email,
      phone: phone,
      githubLink: githubLink ? githubLink : "",
      websiteLink: websiteLink ? websiteLink : "",
      twitterLink: twitterLink ? twitterLink : "",
      linkedinLink: linkedinLink ? linkedinLink : "",
      instagramLink: instagramLink ? instagramLink : "",
    },
  });

  res.status(200).json({ message: "Updated Introduction!" });
};

export default handler;
