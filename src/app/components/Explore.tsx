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
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import "../globals.css";
import Link from "next/link";

function Explore() {
  return (
    <>
      <div className="my-container flex flex-col gap-6 justify-center pt-12 md:pb-18">
        <h1 className="text-4xl text-center font-bold">
          Explore Kimbotic Coffee Services
        </h1>
        <p className="mx-auto text-gray-900 text-center max-w-2xl">
          Our roaster starts with 100% Arabica coffee beans from Mexico
        </p>
        {/* start cards */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center sm:flex-wrap md:flex-nowrap pt-10 pb-2">
          <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">Catering</CardTitle>
              <CardDescription>
                <p className="text-gray-900 text-left max-w-2xl">
                  Make your next event a success with our fresh coffee and
                  breakfast.
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
          </Card>
          <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">Menu</CardTitle>
              <CardDescription>
                <p className="text-gray-900 text-left max-w-2xl">
                  Alongside delicious coffee, we offer pastries, breakfast foods
                  and more.
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
          </Card>
          <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">The Cafe</CardTitle>
              <CardDescription>
                <p className="text-gray-900 text-left max-w-2xl">
                  Our roaster starts with 100% Arabica coffee beans from Mexico
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
          </Card>
          <Card className="sm:mx-auto md:w-1/4 max-w-70 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">Delivery</CardTitle>
              <CardDescription>
                <p className="text-gray-900 text-left max-w-2xl">
                  Order beverages for delivery from your local location.
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
          </Card>
        </div>
        <div className="text-center">
        <Link href="/services"><Button className="h-12 bg-gray-900 text-lg sm:w-auto">
            Services
          </Button></Link>
        </div>
      </div>
    </>
  );
}

export default Explore;
