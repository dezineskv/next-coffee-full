import Header from "../../components/Header";
import Explore from "../../components/Explore";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FindUs() {
  return (
    <>
      <div className=" bg-yellow-50 w-screen opacity-90 ">
        <div className="bg-white flex flex-col md:pt-10 mb-10 gap-16">
          <Header />
        </div>
      </div>
      <main className="">
        <div className="my-container flex flex-col gap-6 justify-center py-12">
          <h1 className="text-4xl text-center font-bold">
            Kimbotic Coffee HQ Location
          </h1>
          <p className="mx-auto text-gray-900 text-center max-w-2xl text-xl">
            Kimbotic Coffee was established in 2025 by KimV. Since then, it has
            received rave support from local communities.
          </p>
          {/* start cards */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center sm:flex-wrap md:flex-nowrap py-10 ">
            <Card className="sm:mx-auto md:w-1/2 max-w-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">
                  Location
                </CardTitle>
                <CardDescription>
                  <p className="text-gray-900 text-left max-w-2xl">
                    Our headquarters cafe is located in San Francisco, CA.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://th.bing.com/th/id/R.89186bdbc92213089a2ca2f38b55a040?rik=tKvWrJjv1lfseg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2facq%2fLAa%2facqLAa9Ki.png&ehk=9L0a3CvQLNFrjB%2btFPzKg2rmY%2bC9rE9gqEZI4dhMe%2fQ%3d&risl=&pid=ImgRaw&r=0"
                  alt="icon"
                  width={130}
                  height={130}
                  className="mx-auto"
                />
              </CardContent>
              <CardFooter className="text-center w-full">
                <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-full">
                  Contact Us
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <div className="bg-white pt-16 mt-20">
        <Footer />
      </div>
    </>
  );
}
