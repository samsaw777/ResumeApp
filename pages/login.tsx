import { Auth } from "@supabase/ui";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { supabase } from "../Utils/initSupabase";

const Login: NextPage = () => {
  const { user } = Auth.useUser();
  const router = useRouter();

  //User is present send to / route.
  if (user) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="min-h-screen max-w-xl mx-auto flex items-center justify-between">
        <Auth
          providers={["google"]}
          supabaseClient={supabase}
          socialColors
          socialLayout="horizontal"
        />
      </main>
    </>
  );
};

export default Login;
