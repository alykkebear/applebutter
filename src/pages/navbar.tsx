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
           </ul>
          </div>
         </div>
         <div className="navbar-center">
          <a className="font-mono">Archive 3</a>
         </div>
          <div className="navbar-end">
          <div className="dropdown mb-72">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
            </ul>
          </div>
          </div>
        </div>
     </main>
    </>
     
  
  );
}