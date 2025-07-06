import React from "react";
import Cups from "../images/coffee-mid.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Favorite() {
  return (
    <>
      <div className="bg-white md:pt-5 mx-auto">
        <div className="flex sm:flex-col sm:px-6 md:flex-row md:px-12">
          <div className="flex sm:justify-center sm:w-full sm:mx-auto md:w-1/2 md:min-w[400px] md:max-w[500px] mt-0 pt-0 pb-10 mb-10">
            <Image
              src={Cups}
              alt="coffee cups image"
              width={500}
              height={500}
              className="sm:min-w[300px] md:max-w-[500px]"
            />
          </div>
          <div className="sm:w-full md:w-1/2 min-w[400px] md:max-w[500px] md:mx-10">
            <h1 className="text-4xl font-bold sm:w-full sm:mx-auto sm:justify-center sm:px-6 md:justify-start text-left md: pr-10 leading-11">
              Order your favorite coffee<br></br>
            </h1>
            <p className="text-gray-900 sm:px-6 m:px-6 md:px-8 py-6 text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Button className="bg-gray-900 text-white sm:mx-6 py-4 md:px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorite;
