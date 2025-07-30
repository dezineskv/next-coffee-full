import React from "react";
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
import "../globals.css";
import Link from "next/link";

function Explore() {
  return (
    <>
      <div className="bg-secondary">
        <div className="my-container bg-secondary flex flex-col gap-6 justify-center pt-12 md:pb-18">
          <h1 className="text-4xl text-center font-bold">
            Explore Kimbotic Coffee Services
          </h1>
          <p className="mx-auto text-para text-center max-w-2xl">
            Our roaster starts with 100% Arabica coffee beans from Mexico
          </p>
          {/* start cards */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center sm:flex-wrap md:flex-nowrap pt-10 pb-2">
            <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">
                  Catering
                </CardTitle>
                <CardDescription>
                  <p className="text-para text-left max-w-2xl">
                    Make your next event a success with our fresh coffee and
                    breakfast.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/R4G4Z5pv/icon1.png"
                  alt="icon"
                  width={200}
                  height={200}
                  className=""
                />
              </CardContent>
            </Card>
            <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Menu</CardTitle>
                <CardDescription>
                  <p className="text-para text-left max-w-2xl">
                    Alongside delicious coffee, we offer pastries, breakfast
                    foods and more.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/hJ9QzSxx/icon2.png"
                  alt="icon"
                  width={200}
                  height={200}
                  className=""
                />
              </CardContent>
            </Card>
            <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">
                  The Cafe
                </CardTitle>
                <CardDescription>
                  <p className="text-para text-left max-w-2xl">
                    Our roaster starts with 100% Arabica coffee beans from
                    Mexico
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
            <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">
                  Delivery
                </CardTitle>
                <CardDescription>
                  <p className="text-para text-left max-w-2xl">
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
                  className="mx-auto max-h-[200px] max-w-[170px]"
                />
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link href="/services">
              <Button className="h-12 bg-gray-900 text-lg text-white sm:w-auto">
                Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
