'use client';
import Image from 'next/image';
import { Button } from '@/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className="bg-secondary w-full [family-name:var(--font-geist-sans)] sm:pt-5 sm:pb-8 md:pt-4 md:pl-2">
        {/* container */}
        <div className="my-container bg-secondary mx-auto flex flex-col-reverse items-center justify-center gap-10 px-6 md:flex-row md:gap-16 md:px-12">
          {/* TEXT SIDE */}
          <div className="w-full sm:px-10 md:w-1/2">
            {/* <div className={styles.slideIn}> */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-left text-4xl leading-[1.40] font-extrabold sm:text-5xl lg:text-6xl">
                Delicious Kimbotic
              </h1>

              {/* </div> */}
              <div className="text-left text-4xl leading-[1.0] font-extrabold sm:text-5xl lg:text-6xl">
                <span className="text-coffee-700 mt-4 inline-flex items-center">
                  Coffee&nbsp;
                  <Image
                    src="https://i.ibb.co/jPx6ppGN/cafe-1.png"
                    alt="Cafe badge"
                    width={50}
                    height={40}
                    className="h-auto w-auto"
                  />
                </span>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-balance max-sm:w-full sm:text-xl">
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
                  <Button className="h-12 bg-gray-900 text-lg text-white sm:w-auto">
                    Catering Services
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="text-para h-12 border-gray-900 bg-transparent text-lg sm:w-auto"
                  >
                    Shop&nbsp;Coffee
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex w-full items-center justify-center sm:mt-0 sm:pt-0">
              <Image
                src="https://i.ibb.co/1YGJRHhk/hero1.png"
                alt="Hero image"
                width={700}
                height={700}
                // priority
                // sizes="50vw, 100vw"
                className="h-auto w-auto sm:max-w-full sm:px-6 md:w-[700px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
