import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
export default function playgamepage() {
  return (
    <>
      <main data-theme = "retro">
        <Navbar />
        <div className="hero font-mono min-h-screen" style={{backgroundImage: 'url(./rickyou.gif)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Get Rickked</h1>
              <p className="mb-5">jsut a placeholder for when we eventually have a super awesome epic game that you are going to enjoy so much it'll be epic and im running on my last brain cels hoping i ca finally get friggin tailwind to actually justify-center ಥ‿ಥ</p>
              <button className="btn btn-primary"><Link href = "./loginbeta" target = "_self">login (beta)</Link></button>
            </div>
          </div>
        </div>
        <Footer />
     </main>
    </>
  );
}