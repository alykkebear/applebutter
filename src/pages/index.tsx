import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Archive 3: Back in Black</title>
        <meta name="Game Title" content="super cringy thing that i couldn't come up with" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/fileupload"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">File Upload →</h3>
              <div className="text-lg">
                a nice starter pack- and certainly cooler than that other page :
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/databasesearch"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Database →</h3>
              <div className="text-lg">
                Welcome to Kaui's page ^-^
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
