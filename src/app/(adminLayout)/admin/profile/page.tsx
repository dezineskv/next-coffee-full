'use client';
import { Chartbar } from '@/components/Chartbar';
import { Chartsmall } from '@/components/Chartsmall';
import { Chartline } from '@/components/Chartline';
import Chartpie from '@/components/Chartpie';
import { ChartbarTwo } from '@/components/ChartbarTwo';
import React from 'react';

function Page() {
  return (
    <>
      <div className="flex w-screen flex-col gap-4 bg-slate-200 text-black md:pl-20">
        {/* <h1>Welcome, {user.name}!</h1> */}
        <h1 className="mt-20 mb-5 text-left text-2xl font-bold">Admin Dashboard</h1>
        <div className="row mt-10 flex w-2xl justify-between">
          <Chartline /> <Chartpie />
        </div>
        <div className="mt-10">
          <Chartbar />
        </div>
        <div className="row my-10 flex w-2xl justify-between">
          <Chartsmall /> <ChartbarTwo />
        </div>
      </div>
    </>
  );
}

export default Page;
