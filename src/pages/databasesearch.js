import Link from 'next/link';
import Navbar from './navbar.js'
export default function databasesearchpage() {
    return (
      <>
        <main>
        <Navbar />
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">Archivii 2: Welcome to the Database</div>
          <input type="text" placeholder="search thine database" className="input justify-center input-bordered input-accent w-full max-w-xs" />
        </div>
        </main>
      </>
    );
  }