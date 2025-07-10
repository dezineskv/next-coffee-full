import Header from "../../components/Header";
import Explore from "../../components/Explore";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import Menus from "../../components/Menus";
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

export default function CafeMenu() {
  return (
    <>
      <div className=" bg-yellow-50 w-screen opacity-90 ">
        <div className="bg-white flex flex-col md:pt-10 mb-10 gap-16 font-[family-name:var(--font-geist-sans)]">
          <Header />
        </div>
      </div>
      <main className="font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col md:pt-10 mb-5 gap-4">
          <h1 className="text-4xl text-center font-bold">Kimbotic Coffee Cafe Menu</h1>
        </div>
        <Menus />
      </main>
      <div className="bg-white pt-16 mt-20">
        <Footer />
      </div>
    </>
  );
}
