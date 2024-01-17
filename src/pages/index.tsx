import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React from 'react';
import Navbar from './navbar'
export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
       <main data-theme="coffee" class-name = "bg-primary font-mono" >
        <Navbar />
        
        <div className="hero min-h-screen" style={{backgroundImage: `url(/map.jpeg)`}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to ArchiveTerra</h1>
                <p className="mb-5">Archiveterra is a state-of-the art system meant to make archiving fun!!! IK it lookes like crap now but come back in a few months and it'll probably work. Believe in teh belief that it can worrrrkkkkkk idk this is just filler text tbh. i really wanna buy a resin printer ~</p>
                <button className="btn btn-primary">Play</button>
              </div>
            </div>
          </div>
       </main>
       
    </>
  );
}
