import type { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../Utils/initSupabase";
import axios from "axios";
import prisma from "../../lib/prisma";
import Navbar from "../../components/navigation/Navbar";
import { Header } from "../../components/ResumePage";
const Resume: NextPage = ({ user }: any) => {
  const [id, setId] = useState<string | undefined | string[]>("");
  const [resumeData, setResumeData] = useState<any>({});
  const [fetchPointer, setFectchPointer] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady, router.query.id]);

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
  }, [id]);

  useEffect(() => {
    const body = {
      resumeId: id,
    };

    axios
      .post("http://localhost:3000/api/fetchResumeInfo", body)
      .then((res) => {
        console.log(res.data);
        setResumeData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetchPointer]);

  return (
    <>
      <Navbar />
      {!loading && resumeData && (
        <Header
          id={id}
          resumeData={resumeData}
          fetchPointer={fetchPointer}
          setFectchPointer={setFectchPointer}
        />
      )}
    </>
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
