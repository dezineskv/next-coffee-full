import React from "react";
import Banner from "../images/coffee-banner.webp";
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
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-gray-900 sm:mx-6 py-4 md:pl-1 text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-gray-900 sm:mx-6 py-4 md:pl-1 text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Button className="bg-gray-900 text-white sm:mx-6 py-6 md:px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-1/2">
              Download App
            </Button>
          </div>
          <div className="flex flex-row sm:w-full sm:justify-center md:items-center md:w-1/2 sm:pt-10 pt-10 pb-10 mb-10 ">
            <div className="order-2 md:flex InstantCoffee_col relative mx-auto aos-init aos-animate">
              <Image
                width={250}
                height={350}
                className="border-2 rounded-2xl border-gray-100 absolute sm:top-10 top-0 left-10 z-20 "
                src={Banner}
                alt="banner"
              />
              <Image
                className="border-2 rounded-2xl border-gray-100 -rotate-12 z-10 "
                alt="banner"
                src={Banner}
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
