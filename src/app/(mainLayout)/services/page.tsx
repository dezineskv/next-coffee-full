import Header from '../../../components/Header';
import Explore from '../../../components/Explore';
import Footer from '../../../components/Footer';
import Testimonials from '../../../components/Testimonials';
import { Button } from '@/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb';
import Link from 'next/link';
// import "../../global.css";

export default function Services() {
  return (
    <>
      <Header />
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
        <div className="my-container flex flex-col justify-center gap-6 py-12">
          <h1 className="text-center text-4xl font-bold">About Kimbotic Coffee</h1>
          <p className="text-para mx-auto max-w-2xl text-center text-xl">
            Kimbotic Coffee was established in 2025 by KimV. Since then, it has received rave
            support from local communities.
            <br></br>
            <br></br>Kimbotic Coffee offers fine tasting coffee beans and a variety of coffee
            products. It is a coffee shop that offers a wide range of coffee products, including
            coffee beans, coffee drinks, and coffee merchandise. <br></br>
            <br></br>The shop is located in a beautiful and cozy environment, with a friendly and
            welcoming atmosphere. The staff is knowledgeable and friendly, and they are always happy
            to answer any questions or provide recommendations. Kimbotic Coffee is a great place to
            enjoy a cup of coffee or if you can't make it in, delicious coffee products can be
            delivered to you for delivery.
          </p>
          {/* start cards */}
          <div className="flex flex-col items-center justify-center gap-4 py-10 sm:flex-wrap md:flex-row md:flex-nowrap">
            <Card className="w-[300px] shadow-lg sm:mx-auto">
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
                  className="mx-auto h-[200px] w-[200px]"
                />
              </CardContent>
              <CardFooter className="w-full text-center">
                <Button className="text-md w-full rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                  Order Catering
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-[300px] shadow-lg sm:mx-auto">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Menu</CardTitle>
                <CardDescription>
                  <p className="text-para max-w-2xl text-left line-clamp-2">
                    Alongside our delicious coffee, we also offer a variety of pastries and
                    breakfast foods and other snacks.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/hJ9QzSxx/icon2.png"
                  alt="icon"
                  width={200}
                  height={200}
                  className="mx-auto h-[200px] w-[200px]"
                />
              </CardContent>
              <CardFooter className="w-full text-center">
                <Button className="text-md w-full rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                  Food Menu
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-[300px] shadow-lg sm:mx-auto">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Delivery</CardTitle>
                <CardDescription>
                  <p className="text-para max-w-2xl text-left">Order beverages for delivery.</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.ibb.co/B2XZ6wvS/delivery.webp"
                  alt="icon"
                  width={200}
                  height={200}
                  className="h-[200px] w-[200px]"
                />
              </CardContent>
              <CardFooter className="w-full text-center">
                <Button className="text-md w-full rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                  Discover More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <div className="mt-10 bg-white">
        <Footer />
      </div>
    </>
  );
}
