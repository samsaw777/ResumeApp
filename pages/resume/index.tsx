import type { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { supabase } from "../../Utils/initSupabase";
import Navbar from "../../components/navigation/Navbar";
import Modal from "../../components/ResumeModal";
import axios from "axios";
import ResumeSkeleton from "../../components/ResumeSkeleton";

const Resume: NextPage = ({ user }: any) => {
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
            <ResumeSkeleton
              title={resume.title}
              key={key}
              id={resume.id}
              refetchResume={refetchResume}
              setRefetchResume={setRefetchResume}
            />
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

  return {
    props: {
      user,
    },
  };
};

export default Resume;
