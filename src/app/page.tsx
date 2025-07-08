import Header from "./components/Header";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Favorite from "./components/Favorite";
import BestSelling from "./components/BestSelling";
import Footer from "./components/Footer";
import Apps from "./components/Apps";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <div className=" bg-gray-200 opacity-90 flex flex-col items-center justify-between pt-4">
        <div className="flex flex-col w-full sm:items-start md:justify-start sm:mx-auto md:px-12 md:pt-10 pb-5 gap-16 font-[family-name:var(--font-geist-sans)]">
          <Header />
          <Hero />
        </div>
      </div>
      <main className="font-[family-name:var(--font-geist-sans)]">
        <Explore />
        <Favorite />
        <BestSelling />
        <Apps />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
