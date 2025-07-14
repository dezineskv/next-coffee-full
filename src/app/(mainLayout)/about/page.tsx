import Header from "../../components/Header";
import Explore from "../../components/Explore";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import Menus from "../../components/Menus";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Girl1 from "../../images/girl1.png";
import Girl2 from "../../images/girl2.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
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
            About Kimbotic Coffee
          </h1>
          <p className="mx-auto text-gray-900 text-center max-w-2xl text-xl">
            Kimbotic Coffee was established in 2025 by KimV. Since then, it has
            received rave support from local communities.
            <br></br>
            <br></br>Kimbotic Coffee offers fine tasting coffee beans and a
            variety of coffee products. It is a coffee shop that offers a wide
            range of coffee products, including coffee beans, coffee drinks, and
            coffee merchandise. <br></br>
            <br></br>The shop is located in a beautiful and cozy environment,
            with a friendly and welcoming atmosphere. The staff is knowledgeable
            and friendly, and they are always happy to answer any questions or
            provide recommendations. Kimbotic Coffee is a great place to enjoy a
            cup of coffee or if you can't make it in, delicious coffee products
            can be delivered to you for delivery.
          </p>
          <h2 className="text-center font-bold text-2xl">Meet the team</h2>
          {/* start cards */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center sm:flex-wrap pt-2">
            <Card className="w-[350px] shadow-lg py-0 rounded-xl overflow-hidden pb-5">
              <div className="mx-auto p-0 h-full">
                <Image
                  src={Girl2}
                  alt="Girl2"
                  width={350}
                  height={300}
                  className="md:max-h-[280px]"
                />
              </div>
              <CardFooter className="flex flex-col justify-center px-8">
                <h3 className="text-lg">CEO, COO</h3>
                <p className="font-bold ">Kim</p>
              </CardFooter>
              <CardContent>
                <p className="text-gray-900 text-left max-w-2xl px-2">
                  Kim is the CEO and COO of Kimbotic Coffee. She is the head of the project and also responsible for day to day functioning.
                </p>
              </CardContent>
            </Card>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center sm:flex-wrap py-10 ">
            <Card className="w-[350px] shadow-lg py-0 rounded-xl overflow-hidden pb-5">
              <div className="mx-auto p-0 h-full">
                <Image
                  src={Girl1}
                  alt="Girl1"
                  width={350}
                  height={300}
                  className="md:max-h-[280px]"
                />
              </div>
              <CardFooter className="flex flex-col justify-center px-8">
                <h3 className="text-lg">CMO</h3>
                <p className="font-bold ">Chelsea</p>
              </CardFooter>
              <CardContent>
                <p className="text-gray-900 text-left max-w-2xl px-2">
                  Chelsea is our Chief Marketing Officer and plays an important
                  role in shaping the marketing strategy and brand identity of
                  the company.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </main>
      <div className="bg-white pt-16 mt-20">
        <Footer />
      </div>
    </>
  );
}
