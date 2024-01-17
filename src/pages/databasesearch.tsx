import Link from 'next/link';
import React from 'react';
import Navbar from './navbar'
export default function databasesearchpage() {
    return (
      <>
        <main data-theme="retro" className='bg-secondary' >
        <Navbar />
        <div className="mockup-browser border size-4/5 object-center h-full bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
        </div>
          <div className="flex justify-center px-4 py-16 font-mono bg-base-200">Archive 2: Welcome to the Database</div>
          <div className="join">
        </div>
        </main>
      </>
    );
  }