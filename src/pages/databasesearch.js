import Link from 'next/link';

export default function FirstPost() {
    return (
      <>
        <h1> Second Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
          <input type="text" placeholder="Type database" className="input input-bordered justify-center w-full max-w-xs" />
        </h2>
      </>
    );
  }