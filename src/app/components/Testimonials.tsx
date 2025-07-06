import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Man from "../images/man.jpg";
import Girl1 from "../images/girl1.png";
import Girl2 from "../images/girl2.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Testimonials() {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center mx-auto pt-5 pb-10">
        <h1 className="text-4xl text-center font-bold">Client Testimonials</h1>
        <p className="flex justify-center mx-auto text-gray-900 text-center max-w-1/2">
          lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
          dolor sit amet, consectetur adipiscing elit
        </p>
        {/* avatars section */}
        <div className="my-4 flex items-center justify-center gap-x-6 pb-4"><div className="hidden sm:block -space-x-2 overflow-hidden"><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt=""/><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/></div><div className="boder-none sm:border-l-2 border-black sm:pl-8"><div className="flex justify-center sm:justify-start items-center"><h3 className="text-2xl font-semibold mr-2">4.6</h3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div><div><h3 className="text-sm">Rated by 25k on google.</h3></div></div></div>

        {/* start 3 cards */}
        <div className="flex flex-row gap-8 justify-center mx-auto pb-10 sm:flex-wrap bg-white">
          <Card className="sm:w-1/2 md:w-1/3 md:max-w-80 shadow-lg py-0 rounded-xl overflow-hidden pb-5">
            <div className="m-0 p-0 w-full h-full">
              <Image
                src={Girl1}
                alt="Girl1"
                width={250}
                height={250}
                className="w-full md:max-h-[250px]"
              />
            </div>
            <CardFooter className="flex flex-row justify-between gap-4 ">
              <h3 className="text-left font-bold text-lg">About Customer</h3>
              Ratings
            </CardFooter>
            <CardContent>
              <p className="text-gray-900 text-left max-w-2xl">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
          <Card className="sm:w-1/2 md:w-1/3 md:max-w-80 shadow-lg py-0 rounded-xl overflow-hidden pb-5">
            <div className="m-0 p-0 w-full h-full">
              <Image
                src={Girl2}
                alt="Girl2"
                width={250}
                height={250}
                className="w-full md:max-h-[250px]"
              />
            </div>
            <CardFooter className="flex flex-row justify-between gap-4 ">
              <h3 className="text-left font-bold text-lg">About Customer</h3>
              Ratings
            </CardFooter>
            <CardContent>
              <p className="text-gray-900 text-left max-w-2xl">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
          <Card className="sm:w-1/2 md:w-1/3 md:max-w-80 shadow-lg py-0 rounded-xl overflow-hidden pb-5">
            <div className="m-0 p-0 w-full h-full">
              <Image
                src={Man}
                alt="Man"
                width={250}
                height={250}
                className="w-full min-h-[250px]"
              />
            </div>
            <CardFooter className="flex flex-row justify-between gap-4 ">
              <h3 className="text-left font-bold text-lg">About Customer</h3>
              Ratings
            </CardFooter>
            <CardContent>
              <p className="text-gray-900 text-left max-w-2xl">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
