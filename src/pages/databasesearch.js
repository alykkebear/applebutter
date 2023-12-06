import Link from 'next/link';

export default function FirstPost() {
    return (
      <>
        <h1> Second Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </h2>
      </>
    );
  }