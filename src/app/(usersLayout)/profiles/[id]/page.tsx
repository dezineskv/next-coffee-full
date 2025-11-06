import * as React from 'react';
import { getProfileById } from '@/actions/profile';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const profile = await getProfileById(id);
  console.log('[profile page] id:', id, 'profile:', !!profile);

  if (!profile) return notFound();

  return (
    <>
      {/* user details */}
      <div className="bg-secondary mb-5 w-screen border-b-2 border-gray-900">
        <div className="my-container flex flex-col justify-center gap-6 py-6">
          <h1 className="text-center text-4xl font-bold">User Profile</h1>

          {/* start cards */}
          <div className="flex flex-row flex-wrap items-center justify-center pb-10 sm:flex-col">
            {/* map through data */}

            <div className="flex flex-wrap items-center gap-8 pt-2 pb-10 md:flex-row">
              <Card className="h-[480px] w-[320px] rounded-lg shadow-lg">
                <CardHeader className="">
                  <CardTitle>User Information</CardTitle>
                </CardHeader>
                <CardContent className="mb-0">
                  <div className="my-4 text-center">
                    <Image
                      src="https://i.ibb.co/HLvvv4gy/girl0.jpg"
                      alt="Girl"
                      width={150}
                      height={150}
                      className="mx-auto my-4 h-32 w-32 rounded-full border-4 border-white dark:border-gray-800"
                    />
                    <div className="py-2">
                      <h3 className="mb-1 text-2xl font-bold text-gray-800 dark:text-white">
                        {profile?.name}
                      </h3>
                      <div className="inline-flex items-center text-gray-700 dark:text-gray-300">
                        {profile?.email}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <div className="mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-300">
                      <svg
                        className="h-6 w-6 text-gray-600 dark:text-gray-400"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          className=""
                          d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                        />
                      </svg>
                      <span>
                        <strong className="text-black dark:text-white">10</strong> Followers you
                        know
                      </span>
                    </div>
                    <div className="flex">
                      <div className="mr-2 flex justify-end">
                        <Image
                          className="-mr-2 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="icon"
                          width={40}
                          height={40}
                        />

                        <Image
                          className="-mr-2 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                          src="https://randomuser.me/api/portraits/women/31.jpg"
                          alt="icon"
                          width={40}
                          height={40}
                        />

                        <Image
                          className="-mr-2 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                          src="https://randomuser.me/api/portraits/men/33.jpg"
                          alt="icon"
                          width={40}
                          height={40}
                        />

                        <Image
                          className="-mr-2 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                          src="https://randomuser.me/api/portraits/women/32.jpg"
                          alt="icon"
                          width={40}
                          height={40}
                        />

                        <Image
                          className="-mr-2 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                          src="https://randomuser.me/api/portraits/men/44.jpg"
                          alt="icon"
                          width={40}
                          height={40}
                        />

                        <Image
                          className="-mr-2 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                          src="https://randomuser.me/api/portraits/women/42.jpg"
                          alt="icon"
                          width={40}
                          height={40}
                        />

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-semibold text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                          +4
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
