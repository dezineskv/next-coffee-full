import React from "react";
import Cups from "../images/coffee-mid.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "../globals.css";
import Link from "next/link";

function Favorite() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/01/07/03/58/coffee-5896116_1280.jpg')",
          opacity: 0.9,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      >
        <div className="my-container z-10 flex flex-col md:flex-row md:justify-between sm:px-6 py-20">
          <div className="sm:w-full sm:min-w[300px] md:w-1/2 z-10">
            <Image
              src={Cups}
              alt="coffee cups image"
              width={500}
              height={500}
              className="min-w-80 z-30"
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 md:mr-8">
            <h1 className="text-5xl font-bold sm:px-6 md:justify-start text-left md: pr-10 leading-11 text-yellow-50">
              Order your <br />
              favorite coffee today<br></br>
            </h1>
            <p className="text-white font-bold sm:px-6 m:px-6 md:px-8 py-6 text-lg">
              Best in town!
            </p>
            <Link href="/products">
              <Button className="bg-red-500 text-white sm:mx-6 py-6 md:px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-1/2">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorite;
