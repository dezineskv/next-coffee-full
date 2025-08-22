import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import '../globals.css';
import Link from 'next/link';

function Favorite() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/01/07/03/58/coffee-5896116_1280.jpg')",
          opacity: 0.9,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      >
        <div className="my-container z-10 flex flex-col py-20 sm:px-6 md:flex-row md:justify-between">
          <div className="sm:min-w[300px] z-10 sm:w-full md:w-1/2">
            <Image
              src="https://i.ibb.co/Tjgj4hh/coffee-mid.png"
              alt="coffee cups image"
              width={500}
              height={500}
              className="h-auto w-auto"
            />
          </div>
          <div className="flex flex-col justify-center md:mr-8 md:w-1/2">
            <h1 className="md: pr-10 text-left text-5xl leading-11 font-bold text-yellow-50 sm:px-6 md:justify-start">
              Order your <br />
              favorite coffee today<br></br>
            </h1>
            <p className="m:px-6 py-6 text-lg font-bold text-white sm:px-6 md:px-8">
              Best in town!
            </p>
            <Link href="/products">
              <Button className="text-md w-1/2 rounded-md bg-red-500 py-6 text-white shadow-lg transition-all hover:scale-105 sm:mx-6 md:px-5">
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
