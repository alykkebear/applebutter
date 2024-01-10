import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React from 'react';
import Navbar from './navbar';
export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
       <Head data-theme="retro" >
        <div className = "bg-primary">
        <Navbar />
        <p className = "justify-center font-mono">welcome to the home page lol</p>
        </div>
       </Head>
       
    </>
  );
}
