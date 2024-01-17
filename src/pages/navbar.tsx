import Link from 'next/link';
import React from 'react';
export default function Navbar() {
  return (
    <>
      <main data-theme = "retro">
      <div className="navbar bg-secondary text-neutral-content">
         <div className="navbar-start">
          <div className="dropdown">
           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
           </div>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-200 text-neutral-500 rounded-box w-52">
            <li><a><Link href = "./playgame" target = "_self">Play</Link></a></li>
            <li><a><Link href = "./fileupload" target = "_self">File Upload</Link></a></li>
            <li><a><Link href = "./databasesearch" target = "_self">Database</Link></a></li>
            <li><a><Link href = "./" target = "_self">Home</Link></a></li>
            <li><a><Link href = "./spell" target= "_self">Spells</Link></a></li>
            <li><a><Link href = "./leaderboard" target= "_self">Leaderboard</Link></a></li>
           </ul>
          </div>
         </div>
         <div className="navbar-center">
          <a className="font-mono">Archive 3</a>
         </div>
          <div className="navbar-end font-mono">
          </div>
        </div>
     </main>
    </>
     
  
  );
}