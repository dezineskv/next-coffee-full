import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "../globals.css";

function Apps() {
  return (
    <>
      <div className="my-container md:pb-2 pt-10">
        <div className="flex flex-col pl-6 md:flex-row mx-auto">
          <div className="md:w-1/2 md:px-10 md:ml-20">
            <h1 className="text-4xl font-bold sm:w-full sm:mx-auto sm:justify-center sm:px-6 text-left leading-11 mt-8">
              Instant coffee at your home
              <br />
            </h1>
            <p className="text-gray-900 sm:mx-6 py-4 md:pl-1 text-base">
              Coffee production begins when the seeds from coffee cherries (the
              Coffea plant's fruits) are separated to produce unroasted green
              coffee beans. The "beans" are roasted and then ground into fine
              particles. Coffee is brewed from the ground roasted beans, which
              are typically steeped in hot water before being filtered out.
            </p>
            <p className="text-gray-900 sm:mx-6 py-4 md:pl-1 text-base">
              Though coffee is now a global commodity, it has a long history
              tied closely to food traditions around the Red Sea. Credible
              evidence of coffee drinking as the modern beverage subsequently
              appears in modern-day Yemen in southern Arabia in the middle of
              the 15th century in Sufi shrines, where coffee seeds were first
              roasted and brewed in a manner similar to how it is now prepared
              for drinking.
            </p>
            <p className="text-gray-900 sm:mx-6 py-4 md:pl-1 text-base">
              The coffee beans were procured by the Yemenis from the Ethiopian
              Highlands via coastal Somali intermediaries, and cultivated in
              Yemen. By the 16th century, the drink had reached the rest of the
              Middle East and North Africa, later spreading to Europe.
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
          <div className="flex flex-row sm:w-full sm:justify-center md:items-center md:w-1/2 sm:pt-10 pt-10 pb-10 mb-10 ">
            <div className="order-2 md:flex InstantCoffee_col relative mx-auto aos-init aos-animate">
              <Image
                width={250}
                height={350}
                className="border-2 rounded-2xl border-gray-100 absolute sm:top-10 top-0 left-10 z-20 "
                src="https://i.ibb.co/WW2QmJt7/coffee-banner.webp"
                alt="banner"
              />
              <Image
                className="border-2 rounded-2xl border-gray-100 -rotate-12 z-10 "
                alt="banner"
                src="https://i.ibb.co/WW2QmJt7/coffee-banner.webp"
                width={230}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apps;
