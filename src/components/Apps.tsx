import React from 'react';
import Image from 'next/image';
import { Button } from '@/ui/button';
import '../../src/app/globals.css';

function Apps() {
  return (
    <>
      <div className="bg-secondary">
        <div className="bg-secondary my-container pt-10 md:pb-20">
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
                Though coffee is now a global commodity, it has a long history tied closely to food
                traditions around the Red Sea. Credible evidence of coffee drinking as the modern
                beverage subsequently appears in modern-day Yemen in southern Arabia in the middle
                of the 15th century in Sufi shrines, where coffee seeds were first roasted and
                brewed in a manner similar to how it is now prepared for drinking.
              </p>
              <p className="text-para py-4 text-base sm:mx-6 md:pl-1">
                The coffee beans were procured by the Yemenis from the Ethiopian Highlands via
                coastal Somali intermediaries, and cultivated in Yemen. By the 16th century, the
                drink had reached the rest of the Middle East and North Africa, later spreading to
                Europe.
              </p>
              <Image
                alt="download buttons"
                width={350}
                height={200}
                className="ml-5"
                src="https://i.ibb.co/vvgM8T17/download-buttons.png"
              />
              {/* <Button className="bg-gray-900 text-white sm:px-6 sm:mx-6 py-6 md:px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-1/2">
              Download App
            </Button> */}
            </div>
            <div className="mb-10 flex flex-row pt-10 pb-10 sm:w-full sm:justify-center sm:pt-10 md:w-1/2 md:items-center">
              <div className="InstantCoffee_col aos-init aos-animate relative order-2 mx-auto md:flex">
                <Image
                  width={250}
                  height={350}
                  className="absolute top-0 left-10 z-20 rounded-2xl border-2 border-gray-100 sm:top-10"
                  src="https://i.ibb.co/WW2QmJt7/coffee-banner.webp"
                  alt="banner"
                />
                <Image
                  className="z-10 -rotate-12 rounded-2xl border-2 border-gray-100"
                  alt="banner"
                  src="https://i.ibb.co/WW2QmJt7/coffee-banner.webp"
                  width={230}
                  height={350}
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
