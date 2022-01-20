import type { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../Utils/initSupabase";
import axios from "axios";
import prisma from "../../lib/prisma";
import { Header } from "../../components/ResumePage";
const Resume: NextPage = ({ user, findPorfile }: any) => {
  const [id, setId] = useState<string | undefined | string[]>("");
  const [resumeData, setResumeData] = useState<any>({});
  const [fetchPointer, setFectchPointer] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const body = {
      resumeId: id,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/api/fetchResumeInfo", body)
      .then((res) => {
        console.log(res.data);
        setResumeData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id, fetchPointer]);
  return (
    <div>
      <Header
        id={id}
        resumeData={resumeData}
        fetchPointer={fetchPointer}
        setFectchPointer={setFectchPointer}
        loading={loading}
      />
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
      findPorfile,
    },
  };
};

export default Resume;
