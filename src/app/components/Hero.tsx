import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroImg from "../images/hero1.png";
import Cafe from "../images/cafe-1.png";

export default function Hero() {
  return (
    <section className="bg-gray-200/90 w-full sm:pt-5 md:pt-10 sm:pb-8 md:pl-2">
      {/* container */}
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-center gap-10 px-6 md:flex-row md:gap-16 md:px-12">
        {/* TEXT SIDE */}
        <div className="w-full md:w-1/2 sm:px-6">
          <h1 className="text-left text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {"Delicious"} <br />
            {"Kimbotic Coffee"}
            <br />
            <span className="mt-4 inline-flex items-center gap-4 text-coffee-700">
              Cafe
              <Image
                src={Cafe}
                alt="Cafe badge"
                width={100}
                height={100}
                className="h-12 w-12 sm:h-16 sm:w-14"
              />
            </span>
          </h1>

          <p className="mt-6 max-w-prose text-balance text-lg leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <Button className="h-12 w-full bg-gray-900 text-lg sm:w-auto">Download&nbsp;App</Button>
            <Button
              variant="outline"
              className="h-12 w-full border-gray-900 text-lg text-gray-900 sm:w-auto bg-transparent"
            >
              Shop&nbsp;Coffee
            </Button>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex w-full items-center justify-center sm:pt-0 sm:mt-0 md:w-1/2">
          <Image
            src={HeroImg}
            alt="Hero illustration"
            width={700}
            height={700}
            priority
            sizes="50vw, 100vw"
            className="h-auto sm:max-w-full sm:px-6"
          />
        </div>
      </div>
    </section>
  )
}
