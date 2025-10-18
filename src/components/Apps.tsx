import React from 'react';
import Image from 'next/image';
import { Button } from '@/ui/button';
import '../../src/app/globals.css';

function Apps() {
  return (
    <>
      <div className="bg-secondary">
        <div className="bg-secondary my-container py-10 md:py-30">
          <div className="mx-auto flex flex-col pl-6 md:flex-row">
            <div className="md:ml-20 md:w-1/2 md:px-10">
              <h1 className="mt-8 text-left text-4xl leading-11 font-bold sm:mx-auto sm:w-full sm:justify-center sm:px-6">
                Instant coffee at your home
                <br />
              </h1>
              <p className="text-para py-4 text-base sm:mx-6 md:pl-1">
                Coffee production begins when the seeds from coffee cherries (the Coffea plant's
                fruits) are separated to produce unroasted green coffee beans. The "beans" are
                roasted and then ground into fine particles. Coffee is brewed from the ground
                roasted beans, which are typically steeped in hot water before being filtered out.
              </p>
              <p className="text-para py-4 text-base sm:mx-6 md:pl-1">
                Start using the app today!
              </p>
             
              <Image
                alt="download buttons"
                width={350}
                height={200}
                className="ml-5 cursor-pointer"
                src="https://i.ibb.co/vvgM8T17/download-buttons.png"
              />
              {/* <Button className="bg-gray-900 text-white sm:px-6 sm:mx-6 py-6 md:px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-1/2">
              Download App
            </Button> */}
            </div>
            <div className="mb-10 flex flex-row pt-10 pb-10 sm:w-full sm:justify-center sm:pt-10 md:w-1/2 md:items-center">
              <div className="mx-auto md:flex">
                <Image
                  width={350}
                  height={280}
                  className="rounded-2xl border-2 border-gray-100"
                  src="https://i.ibb.co/3m60M6wm/coffeecups-nobg.png"
                  alt="banner"
                />
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apps;
