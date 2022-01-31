import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Auth } from "@supabase/ui";
import { supabase } from "../Utils/initSupabase";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        });
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <NextNProgress color="#28BEBD" />
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
