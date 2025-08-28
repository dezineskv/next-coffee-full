import Header from '../../../components/Header';
import Explore from '../../../components/Explore';
import Footer from '../../../components/Footer';
import Testimonials from '../../../components/Testimonials';
import { Button } from '@/ui/button';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';

export default function FindUs() {
  return (
    <>
      <div className="w-screen bg-yellow-50 opacity-90">
        <div className="mb-5 flex flex-col gap-16 bg-white md:pt-10">
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
                <Link href="/find">Find Us</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="">
        <div className="my-container flex flex-col justify-center gap-6 py-12">
          <h1 className="text-center text-4xl font-bold">Kimbotic Coffee HQ Location</h1>
          <p className="mx-auto max-w-2xl text-center text-xl text-gray-900">
            Kimbotic Coffee was established in 2025 by KimV. Since then, it has received rave
            support from local communities.
          </p>
          {/* start cards */}
          <div className="flex flex-col items-center justify-center gap-4 py-10 sm:flex-wrap md:flex-row md:flex-nowrap">
            <Card className="max-w-100 shadow-lg sm:mx-auto md:w-1/2">
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">Location</CardTitle>
                <CardDescription>
                  <p className="max-w-2xl text-left text-gray-900">
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
              <CardFooter className="w-full text-center">
                <Button className="text-md w-full rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                  Contact Us
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <div className="mt-20 bg-white pt-16">
        <Footer />
      </div>
    </>
  );
}
