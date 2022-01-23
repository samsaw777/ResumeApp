import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import prisma from "../lib/prisma";
import { supabase } from "../Utils/initSupabase";
import Navbar from "../components/navigation/Navbar";
import Modal from "../components/ResumeModal";
import axios from "axios";
import ResumeSkeleton from "../components/ResumeSkeleton";

const Home: NextPage = ({ user }: any) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [refetchResume, setRefetchResume] = useState<boolean>(false);
  const [resumeList, setResumeList] = useState<any>([]);
  const fetchresume = async () => {
    const body = {
      userId: user.id,
    };
    await axios
      .post("http://localhost:3000/api/fetchResume", body)
      .then((res) => {
        setResumeList(res.data);
      });
  };
  useEffect(() => {
    fetchresume();
  }, [refetchResume]);

  return (
    <div className="bg-gray-300 h-screen">
      <Head>
        <title>Resume App</title>
      </Head>
      <Navbar />
      <div
        className="cursor-pointer p-5 bg-purple-400 rounded w-fit ml-10 mt-10 h-16"
        onClick={() => setModelOpen(true)}
      >
        Create Resume
      </div>
      <Modal
        modalOpen={modelOpen}
        setModalOpen={setModelOpen}
        refetchResume={refetchResume}
        setRefetchResume={setRefetchResume}
      />
      {/* <Header /> */}
      <div className="grid grid-cols-3 gap-4 mx-10 mt-10">
        {resumeList.map((resume: any, key: number) => {
          return (
            <ResumeSkeleton title={resume.title} key={key} id={resume.id} />
          );
        })}
      </div>
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
