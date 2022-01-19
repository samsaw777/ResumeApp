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
    resumeId,
  } = req.body;

  await prisma.introduction.create({
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
      resumeId: resumeId,
    },
  });

  res.status(200).json({ message: "Introduction Added into the database!" });
};

export default handler;
