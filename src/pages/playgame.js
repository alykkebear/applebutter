import Link from 'next/link';
import Navbar from './navbar.js'
export default function playgamepage() {
  return (
    <>
      <main>
        <Navbar />
        <div className="skeleton w-320 h-320"></div>
     </main>
    </>
  );
}