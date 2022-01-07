import type { NextPage } from "next";
import Link from "next/link";
import { Header } from "../components/ResumePage";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/resume">
        <div className="cursor-pointer p-5 bg-purple-400 rounded w-fit ml-10 mt-10 h-16">
          Create Resume
        </div>
      </Link>
      {/* <Header /> */}
    </div>
  );
};

export default Home;
