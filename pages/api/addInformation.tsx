import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/initSupabase";

const addInformation = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    name,
    profession,
    email,
    description,
    phone,
    github,
    linkedin,
    twitter,
    instagram,
    website,
  } = req.body;

  // const {data: information, errors} = await supabase.

  res.status(200).json("send something");
};

export default addInformation;
