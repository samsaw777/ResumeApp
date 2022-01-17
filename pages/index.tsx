import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import prisma from "../lib/prisma";
import { supabase } from "../Utils/initSupabase";
import Navbar from "../components/navigation/Navbar";
import Modal from "../components/ResumeModal";

const Home: NextPage = ({ user }: any) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  return (
    <div>
      <Navbar />
      <div
        className="cursor-pointer p-5 bg-purple-400 rounded w-fit ml-10 mt-10 h-16"
        onClick={() => setModelOpen(true)}
      >
        Create Resume
      </div>
      <Modal modalOpen={modelOpen} setModalOpen={setModelOpen} />
      {/* <Header /> */}
    </div>
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
