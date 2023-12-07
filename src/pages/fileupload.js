import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <input type="file" className="file-input file-input-bordered bg-[#C3E0E5] justify-center w-full max-w-xs" />
      </h2>
    </>
  );
}