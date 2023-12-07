import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      
      <main className= "flex min-h-screen flex-col items-center justify-center bg-[#C3E0E5]">
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
          <input type="file" className="file-input file-input-bordered bg-[#C3E0E5] justify-center w-full max-w-xs" />
        </h2>
     </main>
    </>
  );
}