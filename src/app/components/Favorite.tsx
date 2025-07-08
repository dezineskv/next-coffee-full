import React from "react";
import Cups from "../images/coffee-mid.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "../globals.css";

function Favorite() {
  return (
    <>
      <div className="my-container flex flex-col md:flex-row md:justify-between bg-white sm:px-6 py-20">
        <div className="sm:w-full sm:min-w[300px] md:w-1/2 ">
          <Image
            src={Cups}
            alt="coffee cups image"
            width={500}
            height={500}
            className="min-w-80"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 md:mr-8">
          <h1 className="text-4xl font-bold sm:w-full sm:mx-auto sm:justify-center sm:px-6 md:justify-start text-left md: pr-10 leading-11">
            Order your favorite coffee<br></br>
          </h1>
          <p className="text-gray-900 sm:px-6 m:px-6 md:px-8 py-6 text-base">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="text-gray-900 sm:px-6 m:px-6 md:px-8 py-6 text-base">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Button className="bg-gray-900 text-white sm:mx-6 py-4 md:px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
            Order Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default Favorite;
