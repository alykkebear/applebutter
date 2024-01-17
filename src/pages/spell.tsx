import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";
export default function spell() {
  return (
    <>
      <main data-theme = "retro">
        <Navbar />
        <div className="skeleton w-320 h-320"></div>
     </main>
    </>
  );
}