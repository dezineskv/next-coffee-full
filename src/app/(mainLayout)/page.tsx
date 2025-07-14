import Header from "../components/Header";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Favorite from "../components/Favorite";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";
import Apps from "../components/Apps";
import Testimonials from "../components/Testimonials";
import Menus from "../components/Menus";
import DataTableDemo from "../components/DataTableDemo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" bg-yellow-50 w-screen opacity-90 px-0 mx-0">
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
                  <Link href="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Hero />
        <Explore />
        <Favorite />
        <Apps />
        <BestSelling />
        <Menus />
        <DataTableDemo />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
