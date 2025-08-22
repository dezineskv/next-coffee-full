import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function Testimonials() {
  return (
    <>
      <div className="bg-secondary mt-0">
        <div className="my-container flex flex-col justify-center gap-6 pb-10">
          <h1 className="text-center text-4xl font-bold">Client Testimonials</h1>
          <p className="text-para mx-auto flex max-w-1/2 justify-center text-center">
            Check out what our customers have to say about us. We are rocking it.
          </p>
          {/* avatars section */}
          <div className="my-4 flex items-center justify-center gap-x-6">
            <div className="hidden -space-x-2 overflow-hidden sm:block">
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://i.ibb.co/YB8V5YxL/avatar1.jpg"
                width={25}
                height={25}
                alt="avatars"
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://i.ibb.co/XHKLmNB/avatar3.jpg"
                width={25}
                height={25}
                alt="avatars"
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://i.ibb.co/MDvsKFDv/avatar4.jpg"
                width={25}
                height={25}
                alt="avatars"
              />
            </div>
            <div className="boder-none border-black sm:border-l-2 sm:pl-8">
              <div className="flex items-center justify-center sm:justify-start">
                <h3 className="mr-2 text-2xl font-semibold">4.9</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div>
                <h3 className="text-sm">Rated by 25k on google.</h3>
              </div>
            </div>
          </div>
          {/* start 3 cards carousel*/}
          <Carousel className="mb-8 md:mx-auto md:w-2xl">
            <CarouselContent className="mx-auto">
              <CarouselItem className="mx-auto basis-full">
                <Card className="mx-auto w-[350px] overflow-hidden rounded-xl py-0 pb-5 shadow-lg">
                  <div className="mx-auto h-full p-0">
                    <Image
                      src="https://i.ibb.co/bjjy4Gn4/girl1.png"
                      alt="Girl1"
                      width={350}
                      height={300}
                      className="md:max-h-[280px]"
                    />
                  </div>
                  <CardFooter className="flex flex-row justify-between gap-4 px-8">
                    <h3 className="text-left text-lg font-bold">About Customer</h3>
                    <div className="flex items-center justify-center sm:justify-start">
                      <h3 className="mr-2 text-2xl font-semibold">4.9</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                  </CardFooter>
                  <CardContent>
                    <p className="text-para max-w-2xl px-2 text-left">
                      Check out what our customers have to say about us. We are rocking it.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="mx-auto basis-full">
                <Card className="mx-auto w-[350px] overflow-hidden rounded-xl py-0 pb-5 shadow-lg">
                  <div className="mx-auto h-full p-0">
                    <Image
                      src="https://i.ibb.co/yBmFc1C2/girl2.png"
                      alt="Girl2"
                      width={350}
                      height={300}
                      className="w-full md:max-h-[280px]"
                    />
                  </div>
                  <CardFooter className="flex flex-row justify-between gap-4 px-8">
                    <h3 className="text-left text-lg font-bold">About Customer</h3>
                    <div className="flex items-center justify-center sm:justify-start">
                      <h3 className="mr-2 text-2xl font-semibold">4.0</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                  </CardFooter>
                  <CardContent>
                    <p className="max-w-2xl px-3 text-left text-gray-900">
                      Check out what our customers have to say about us. We are rocking it.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="mx-auto basis-full">
                <Card className="mx-auto w-[350px] overflow-hidden rounded-xl py-0 pb-5 shadow-lg">
                  <div className="mx-auto h-full p-0">
                    <Image
                      src="https://i.ibb.co/2Yv2xMWd/man.jpg"
                      alt="Man"
                      width={350}
                      height={250}
                      className="min-h-[250px] w-full"
                    />
                  </div>
                  <CardFooter className="flex flex-row justify-between gap-4 px-8">
                    <h3 className="text-left text-lg font-bold">About Customer</h3>
                    <div className="flex items-center justify-center sm:justify-start">
                      <h3 className="mr-2 text-2xl font-semibold">4.1</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                  </CardFooter>
                  <p className="px-8 text-left text-gray-900">
                    Check out what our customers have to say about us. We are rocking it.
                  </p>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious style={{ backgroundColor: '#000000', marginLeft: '64px' }} />
            <CarouselNext style={{ backgroundColor: '#000000', marginRight: '64px' }} />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
