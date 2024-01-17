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
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/snowymountain.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">File Upload</h1>
               <p className="mb-5">upload your archivable files here so that the world can become a better place. isn't this background pretty? now OFFER YOUR FILES IN RITUAL SACRIFICE TO OUR DIGITAL OVERLOARDS .... ~please</p>
               <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
      </main>
    </>
     
  
  );
}