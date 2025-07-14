"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroImg from "../images/hero1.png";
import Cafe from "../images/cafe-1.png";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="[family-name:var(--font-geist-sans)]  bg-yellow-50 w-full sm:pt-5 md:pt-4 sm:pb-8 md:pl-2 ">
        {/* container */}
        <div className="my-container mx-auto flex flex-col-reverse items-center justify-center gap-10 px-6 md:flex-row md:gap-16 md:px-12">
          {/* TEXT SIDE */}
          <div className="w-full md:w-1/2 sm:px-10">
            {/* <div className={styles.slideIn}> */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-left text-4xl font-extrabold leading-[1.40] sm:text-5xl lg:text-6xl">
                Delicious Kimbotic
              </h1>

              {/* </div> */}
              <div className="text-left text-4xl font-extrabold leading-[1.0] sm:text-5xl lg:text-6xl">
                <span className="mt-4 inline-flex items-center text-coffee-700">
                  Coffee&nbsp;
                  <Image src={Cafe} alt="Cafe badge" width={50} height={40} />
                </span>
              </div>

              <p className="mt-6 max-sm:w-full text-balance text-lg leading-relaxed sm:text-xl">
                Our roaster starts with 100% Arabica coffee beans from Mexico
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link href="/services">
               <Button className="h-12 bg-gray-900 text-lg sm:w-auto">
                  Catering Services
                </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="h-12  border-gray-900 text-lg text-gray-900 sm:w-auto bg-transparent"
                  >
                    Shop&nbsp;Coffee
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          {/* IMAGE SIDE */}
          <div className="flex w-full items-center justify-center sm:pt-0 sm:mt-0 md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={HeroImg}
                alt="Hero image"
                width={700}
                height={700}
                // priority
                // sizes="50vw, 100vw"
                className="sm:max-w-full sm:px-6 md:w-[700px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
