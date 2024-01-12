import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React from 'react';
import Navbar from './navbar'
export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
       <main data-theme="retro" class-name = "bg-primary" >
        <Navbar />
        <p className = "justify-self-center font-mono">Explore the ruins of archiveterra while making your stamp on history</p>
         <span /> <span /> <span /> <span /> <span /> <span />
         <div className="flex flex-col gap-4 w-4/5 git justify-self-center">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-3/4"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-4/5"></div>
         </div>
       </main>
       
    </>
  );
}
