import Link from 'next/link';
import React from 'react';
import Navbar from './navbar'
export default function databasesearchpage() {
    return (
      <>
        <main data-theme="retro" className='bg-secondary' >
        <Navbar />
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
        </div>
          <div className="flex justify-center px-4 py-16 font-mono bg-base-200">Archivii 2: Welcome to the Database</div>
          <div className="join">
        </div>
        </main>
      </>
    );
  }