'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === 'authenticated') {
      return (
        <div className="mx-auto h-screen w-full bg-slate-200 pt-10">
          <button
            className="mt-10 w-25 rounded border border-solid border-black p-2 text-center"
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push('/admin');
              });
            }}
          >
            Sign Out
          </button>
        </div>
      );
    } else if (status === 'loading') {
      return <span className="mt-7 text-sm text-[#888]">Loading...</span>;
    } else {
      return (
        <div className="mx-auto h-screen w-full bg-slate-200 pt-10">
          <Link
            href="/login"
            className="mt-10 w-25 rounded border border-solid border-black p-2 text-center"
          >
            Sign In
          </Link>
        </div>
      );
    }
  };
  return (
    <main className="flex h-full w-full flex-col justify-start bg-slate-200 text-center">
      <h1 className="mt-10 text-xl">Admin Home</h1>
      {showSession()}
    </main>
  );
}
