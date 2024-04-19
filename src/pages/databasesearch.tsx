import Link from 'next/link';
import React from 'react';
import Navbar from './navbar'
import Footer from "./footer";
import { api } from "~/utils/api";
export default function databasesearchpage() {
  const data = api.archive.getlatest.useQuery().data;
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
    <div className="collapse bg-base-200 text-center">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            Click me to show database content
          </div>
        <div className="collapse-content"> 
        <p>{data?.map(({id, ArchiveDATA, Uploader, Image}) => (<div key = {id}>Description: {ArchiveDATA} || Uploader:{Uploader} || Link: {Image}</div>))}</p>
      </div>
     </div>
    <Footer />
        </main>
      </>
    );
  }