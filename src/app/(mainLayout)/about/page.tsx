import Header from '../../../components/Header';
import Explore from '../../../components/Explore';
import Footer from '../../../components/Footer';
import Testimonials from '../../../components/Testimonials';
import Menus from '../../../components/Menus';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';

export default function About() {
  return (
    <>
      <Header />
      <main className="">
        <div className="my-container flex flex-col justify-center gap-6 py-12">
          <h1 className="text-center text-4xl font-bold">About Kimbotic Coffee</h1>
          <p className="mx-auto max-w-2xl text-center text-xl text-foreground">
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
          <h2 className="text-center text-2xl font-bold">Meet the team</h2>
          {/* start cards */}
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-wrap md:flex-row">
            <Card className="w-[350px] overflow-hidden rounded-xl py-0 pb-5 shadow-lg">
              <div className="mx-auto p-0">
                <Image
                  src="https://i.ibb.co/HLvvv4gy/girl0.jpg"
                  alt="Girl"
                  width={150}
                  height={150}
                  className="mt-6 rounded-full"
                />
              </div>
              <CardFooter className="flex flex-col justify-center px-8">
                <h3 className="text-lg">CEO, COO</h3>
                <p className="font-bold">Kim</p>
              </CardFooter>
              <CardContent>
                <p className="max-w-2xl px-2 text-left text-foreground">
                  Kim is the CEO and COO of Kimbotic Coffee. She is the head of the project and also
                  responsible for day to day functioning.
                </p>
              </CardContent>
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
