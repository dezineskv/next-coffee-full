import Header from "../../components/Header";
import Explore from "../../components/Explore";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className=" bg-yellow-50 w-screen opacity-90 ">
        <div className="bg-white flex flex-col md:pt-10 mb-6 gap-16">
          <Header />
        </div>
      </div>
      <div className="my-container md:pl-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
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
          {/* start cards */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center sm:flex-wrap md:flex-nowrap py-10 ">
            <Card className="sm:mx-auto md:w-1/3 max-w-80 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">
                  Catering
                </CardTitle>
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
              <CardFooter className="text-center w-full">
                <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-full">
                  Order Catering
                </Button>
              </CardFooter>
            </Card>
            <Card className="sm:mx-auto md:w-1/2 max-w-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Menu</CardTitle>
                <CardDescription>
                  <p className="text-gray-900 text-left max-w-2xl">
                    Alongside our delicious coffee, we also offer a variety of
                    pastries and breakfast foods and other snacks.
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
              <CardFooter className="text-center w-full">
                <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-full">
                  Food Menu
                </Button>
              </CardFooter>
            </Card>
            <Card className="sm:mx-auto md:w-1/3 max-w-80 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">
                  Delivery
                </CardTitle>
                <CardDescription>
                  <p className="text-gray-900 text-left max-w-2xl">
                    Order beverages for delivery from your local location.
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
              <CardFooter className="text-center w-full">
                <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-full">
                  Discover More
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
