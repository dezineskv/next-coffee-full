import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import '../globals.css';
import Link from 'next/link';

function Explore() {
  return (
    <>
      <div className="bg-background">
        <div className="my-container flex flex-col justify-center gap-6 pt-18 md:pb-18">
          <h1 className="text-center text-4xl font-bold">Explore Kimbotic Coffee Services</h1>
          <p className="text-para mx-auto max-w-2xl text-center">
            Our roaster starts with 100% Arabica coffee beans from Mexico
          </p>
          {/* start cards */}
          <div className="flex flex-col items-center justify-center gap-4 pt-10 pb-2 sm:flex-wrap md:flex-row md:flex-nowrap">
            <Card className="max-w-70 shadow-lg sm:mx-auto md:w-1/4">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Catering</CardTitle>
                <CardDescription>
                  <p className="text-para max-w-2xl text-left">
                    Make your next event a success with our fresh coffee and breakfast.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/R4G4Z5pv/icon1.png"
                  alt="icon"
                  width={200}
                  height={200}
                  className="h-auto w-auto"
                />
              </CardContent>
            </Card>
            <Card className="max-w-70 shadow-lg sm:mx-auto md:w-1/4">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Menu</CardTitle>
                <CardDescription>
                  <p className="text-para max-w-2xl text-left">
                    Alongside delicious coffee, we offer pastries, breakfast foods and more.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/hJ9QzSxx/icon2.png"
                  alt="icon"
                  width={200}
                  height={200}
                  className="h-auto w-auto"
                />
              </CardContent>
            </Card>
            <Card className="max-w-70 shadow-lg sm:mx-auto md:w-1/4">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">The Cafe</CardTitle>
                <CardDescription>
                  <p className="text-para max-w-2xl text-left">
                    Our roaster starts with 100% Arabica coffee beans from Mexico
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/xKmjW2Ry/images-cup-removebg-preview.png"
                  alt="icon"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </CardContent>
            </Card>
            <Card className="max-w-70 shadow-lg sm:mx-auto md:w-1/4">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Delivery</CardTitle>
                <CardDescription>
                  <p className="text-para max-w-2xl text-left">
                    Order beverages for delivery from your local location.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/TMGmgXkB/delivery-icon-21.png"
                  alt="icon"
                  width={200}
                  height={170}
                  className="mx-auto h-auto max-h-[200px] w-auto max-w-[170px]"
                />
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link href="/services">
              <Button className="h-12 bg-gray-900 text-lg text-white sm:w-auto">Services</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
