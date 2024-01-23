import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";
export default function playgamepage() {
  return (
    <>
      <main data-theme = "pastel">
        <Navbar />
        <img src = '/rickyou.gif' className = 'h-screen w-screen flex items-center justify-center' />
     </main>
    </>
  );
}