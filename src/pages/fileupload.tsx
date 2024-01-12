import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';
export default function fileuploadpage() {
  return (
    <>
      <main data-theme="retro" className='bg-ACCENT'>
        <Navbar />
        <h1 className = "font-mono text-justify-center">Upload thine files to the database if thou hast any</h1>
        <input type="file" className="file-input file-justify-center file-input-bordered file-input-accent w-full max-w-xs" />
        <div className="flex flex-col gap-4 w-52 bg-secondary">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        </div>
      </main>
    </>
     
  
  );
}