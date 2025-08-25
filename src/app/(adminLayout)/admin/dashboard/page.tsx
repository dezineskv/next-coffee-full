import { Chartbar } from '@/app/components/Chartbar';
import { Chartsmall } from '@/app/components/Chartsmall';
import { Chartline } from '@/app/components/Chartline';
import Chartpie from '@/app/components/Chartpie';
import { ChartbarTwo } from '@/app/components/ChartbarTWo';

import React from 'react';

function page() {
  return (
    <>
      <div className="w-screen bg-slate-200 md:pl-20 flex flex-col gap-4">
        <h1 className="text-left mt-20 mb-10 text-2xl font-bold">Admin Dashboard</h1>
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

export default page;
