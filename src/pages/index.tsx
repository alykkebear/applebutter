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
        <p className = "justify-center font-mono">Explore the ruins of archiveterra while making your stamp on history</p>
         <span /> <span /> <span /> <span /> <span /> <span />
         <div className="flex flex-col gap-4 w-144 justify-center">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-100"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
         </div>
       </main>
       
    </>
  );
}
