import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React from 'react';
import Navbar from './navbar'
export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
       <Head data-theme="retro" >
        <div className = "bg-primary">
        <Navbar />
        <p className = "justify-center font-mono">Explore the ruins of archiveterra while making your stamp on history</p>
         <div className="flex flex-col w-full lg:flex-row bg-accent">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">upload photos to be archived</div> 
          <div className="divider lg:divider-horizontal">OR</div> 
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">archive photos by playing the game</div>
         </div>
        </div>
       </Head>
       
    </>
  );
}
