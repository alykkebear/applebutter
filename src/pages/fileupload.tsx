import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';
export default function fileuploadpage() {
  return (
    <>
      <main data-theme="retro" className='bg-secondary'>
        <Navbar />
        <h1 className = "font-mono text-justify-center">Upload thine files to the database if thou hast any</h1>
        <input type="file" className="file-input file-justify-center file-input-bordered file-input-accent w-full max-w-xs" />
      </main>
    </>
     
  
  );
}