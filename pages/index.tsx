import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import prisma from "../lib/prisma";
import { motion } from "framer-motion";
import { supabase } from "../Utils/initSupabase";
import Navbar from "../components/navigation/Navbar";

import Landing from "../components/landing/Landing";
const Home: NextPage = ({ user }: any) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>ESYResume</title>
      </Head>
      <Navbar />
      <Landing />
    </motion.div>
  );
};

//Getting the serversideProps.
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Redirect unauthenticated users to login page
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  //Fetch the user Profile
  const findPorfile = await prisma.profile.findFirst({
    where: { id: user.id },
  });

  //Create a new profile for the user.
  if (!findPorfile) {
    await prisma.profile.create({
      data: {
        id: user.id,
        name: user.user_metadata.full_name,
        email: user.user_metadata.email,
        image: user.user_metadata.avatar_url,
      },
    });
  }

  return {
    props: {
      user,
    },
  };
};

export default Home;
