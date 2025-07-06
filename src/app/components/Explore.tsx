import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";

function Explore() {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center mx-auto py-10 w-full md:max-w-2xl">
        <h1 className="text-4xl text-center font-bold">
          Explore Kimbotic Coffee
        </h1>
        <p className="flex justify-center mx-auto text-gray-900 text-center max-w-2xl">
          lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
          dolor sit amet, consectetur adipiscing elit
        </p>
        {/* start 3 cards */}
        <div className="flex sm:flex-col md:flex-row gap-6 justify-center md:mx-auto py-10 sm:w-full sm:px-8 sm:flex-wrap md:flex-nowrap">
          <Card className="sm:w-full sm:w-[300px] sm:mx-auto md:w-1/3 md:max-w-80 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">
                Our Catering
              </CardTitle>
              <CardDescription>
                <p className="text-gray-900 text-left max-w-2xl">
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={Icon1}
                alt="icon"
                width={200}
                height={200}
                className="mx-auto"
              />
            </CardContent>
            <CardFooter className="text-center mx-auto">
              <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
                Order Catering
              </Button>
            </CardFooter>
          </Card>
          <Card className="sm:w-full sm:w-[300px] sm:mx-auto sm:px-8 md:w-1/3 md:max-w-80 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">The Food</CardTitle>
              <CardDescription>
                <p className="text-gray-900 text-left max-w-2xl">
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={Icon2}
                alt="icon"
                width={200}
                height={200}
                className="mx-auto"
              />
            </CardContent>
            <CardFooter className="text-center mx-auto">
              <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
                Food Menu
              </Button>
            </CardFooter>
          </Card>
          <Card className="sm:w-full sm:w-[300px] sm:mx-auto sm:px-8 md:w-1/3 md:max-w-80 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">
                The Gelato
              </CardTitle>
              <CardDescription>
                <p className="text-gray-900 text-left max-w-2xl">
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={Icon3}
                alt="icon"
                width={200}
                height={200}
                className="mx-auto"
              />
            </CardContent>
            <CardFooter className="text-center mx-auto">
              <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
                Discover More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Explore