import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import prisma from "../lib/prisma";
import { Header } from "../components/ResumePage";
import { supabase } from "../Utils/initSupabase";

const Home: NextPage = ({ user }: any) => {
  return (
    <div>
      <div>{user.user_metadata.name}</div>
      <div>{user.email}</div>
      <Link href="/resume">
        <div className="cursor-pointer p-5 bg-purple-400 rounded w-fit ml-10 mt-10 h-16">
          Create Resume
        </div>
      </Link>
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
