import React from "react";
import Banner from "../images/coffee-banner.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Apps() {
  return (
    <>
      <div className="bg-white md:pt-5 mx-auto md:mb-20">
        <div className="flex sm:flex-col sm:pl-6 md:flex-row md:pl-12">
          <div className="md:w-1/2 md:max-w[300px] md:px-12">
            <h1 className="text-4xl font-bold sm:w-full sm:mx-auto sm:justify-center sm:px-6 text-left leading-11 mt-8">
              Instant coffee at your home<br></br>
            </h1>
            <p className="text-gray-900 sm:mx-6 py-4 md:pl-1  text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut labore et dolore magna aliqua.
            </p>

            <Button className="bg-gray-900 text-white sm:mx-6 py-4 md:px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
              Download App
            </Button>
          </div>
          <div className="flex flex-row sm:w-full sm:justify-center sm:mx-auto dm:items-center md:w-1/2 md:max-w[400px] mt-0 pt-0 pb-10 mb-10 md:ml-8">
          <div className="order-2 md:flex InstantCoffee_col relative mx-auto aos-init aos-animate">
            <Image width={250} height={250}  
          className="border-2 rounded-2xl border-gray-100 absolute top-0 left-20 z-20 md:w-[14rem] w-[10rem] max-h[350px]" 
          src={Banner} 
          alt="banner"/>
          <Image className="border-2 rounded-2xl border-gray-100 -rotate-12 z-10 md:w-[14rem] w-[10rem] max-h-[350px]" 
          alt="banner" src={Banner} 
          width={230} height={250}/> 
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apps;
