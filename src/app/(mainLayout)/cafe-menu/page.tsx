import Header from "../../components/Header";
import Explore from "../../components/Explore";
import Footer from "../../components/Footer";
import Menus from "../../components/Menus";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function CafeMenu() {
  return (
    <>
      <Header />
      <main className="font-[family-name:var(--font-geist-sans)]">
        <div className="my-container md:pl-24 md:pt-0 md:mt-0">
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
                  <Link href="/cafe-menu">Menu</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col md:pt-10 mb-5 gap-4">
          <h1 className="text-4xl text-center font-bold">
            Kimbotic Coffee Cafe Menu
          </h1>
        </div>
        <Menus />
      </main>
      <div className="text-center">
        <Button>See Catering Inventory</Button>
      </div>
      <div className="bg-white mt-10">
        <Footer />
      </div>
    </>
  );
}
