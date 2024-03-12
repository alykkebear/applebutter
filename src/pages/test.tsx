import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';
import Footer from "./footer";
import DisplayData from "./displaydata";

export default function fileuploadpage() {
  return (
    <>
      <main data-theme="nord" className='bg-base-200'>
        <Navbar />
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/snowymountain.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">read</h1>
               <p className="mb-5">hi</p>
               <DisplayData></DisplayData>
               <input type="file" className="file-input file-justify-center file-input-bordered file-input-accent w-full max-w-xs" />
            </div>
        </div>
    </div>
    <Footer />
      </main>
    </>
     
  
  );
}