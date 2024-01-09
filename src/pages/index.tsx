import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React from 'react';
import Navbar from './navbar';
export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
       <Head data-theme="retro">
        <Navbar />
        <p className = "justify-center font-mono">welcome to the home page lol</p>
       </Head>
       <main data-theme="retro" className="flex min-h-screen flex-col items-center justify-center">
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
           <h1 className="text-5xl font-mono tracking-tight text-white sm:text-[5rem]">
            Archive 3 Back in Black
           </h1>
          </div>
       </main>
    </>
  );
}
