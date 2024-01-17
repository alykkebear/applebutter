import Link from 'next/link';
import React from 'react';
import Navbar from './navbar'
export default function databasesearchpage() {
    return (
      <>
        <main data-theme="business" className='bg-secondary' >
        <Navbar />
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/servers.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Search the Database</h1>
               <p className="mb-5">search our vast and empty non-exsistent database for beautifully crisp archived data straight from our cheap outsourced labor farms - i mean game. people playing our game. shut up and search it idk</p>
               <input type="text" placeholder="search me UwU" className="input input-bordered w-full max-w-xs" />
            </div>
        </div>
    </div>
        </main>
      </>
    );
  }