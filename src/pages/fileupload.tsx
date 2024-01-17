import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';
export default function fileuploadpage() {
  return (
    <>
      <main data-theme="retro" className='bg-base-200'>
        <Navbar />
        <h1 className = "font-mono text-justify-center">Upload thine files to the database if thou hast any</h1>
        <input type="file" className="file-input file-justify-center file-input-bordered file-input-accent w-full max-w-xs" />
        <div className="flex flex-col gap-4 w-4/5 justify-center items-center">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-3/4"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-4/5"></div>
        </div>
      </main>
    </>
     
  
  );
}