import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';
export default function fileuploadpage() {
  return (
    <>
      <main data-theme="nord" className='bg-base-200'>
        <Navbar />
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/snowymountain.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">File Upload</h1>
               <p className="mb-5">upload your archivable files here so that the world can become a better place. isn't this background pretty? now OFFER YOUR FILES IN RITUAL SACRIFICE TO OUR DIGITAL OVERLOARDS .... ~please</p>
               <input type="file" className="file-input file-justify-center file-input-bordered file-input-accent w-full max-w-xs" />
            </div>
        </div>
    </div>
      </main>
    </>
     
  
  );
}