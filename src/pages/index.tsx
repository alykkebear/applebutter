import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React from 'react';

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
       <Head data-theme="retro">
       <div className="navbar bg-neutral text-neutral-content">
         <div className="navbar-start">
          <div className="dropdown">
           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
           </div>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a><Link href = "./playgame" target = "_blank">Play</Link></a></li>
            <li><a><Link href = "./fileupload" target = "_blank">File Upload</Link></a></li>
            <li><a><Link href = "./databasesearch" target = "_blank">Database</Link></a></li>
           </ul>
          </div>
         </div>
         <div className="navbar-center">
          <a className="font-mono">Archive 3</a>
         </div>
          <div className="navbar-end">
          </div>
        </div>
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
