import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
       <Head data-theme="retro">
       <div className="navbar bg-base-100">
        <div className="navbar-start">
         <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
         </div>
        </div>
        <div className="navbar-center">
         <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
         <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
         </button>
         <button className="btn btn-ghost btn-circle">
          <div className="indicator">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
         </button>
        </div>
       </div>
        <title>Archive 3: Back in Black</title>
        <meta name="Game Title" content="super cringy thing that i couldn't come up with" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
       <main data-theme="retro" className="flex min-h-screen flex-col items-center justify-center">
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-mono tracking-tight text-white sm:text-[5rem]">
            Archive 3 Back in Black
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
             <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4  hover:bg-white/20"
              href="/fileupload"
              target="_blank"
             >
               <h3 className="text-2xl font-mono">File Upload →</h3>
               <div className="text-lg">
                 a nice starter pack- and certainly cooler than that other page :
               </div>
             </Link>
            <Link
               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4  hover:bg-white/20"
               href="/databasesearch"
               target="_blank"
            >
               <h3 className="text-2xl font-mono">Database →</h3>
               <div className="text-lg">
                Welcome to Kaui's page ^-^
               </div>
            </Link>
           </div>
         </div>
      </main>
    </>
  );
}
