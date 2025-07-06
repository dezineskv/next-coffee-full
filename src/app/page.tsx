
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
      <div className="w-screen bg-gray-200 opacity-90 flex flex-col items-center justify-between pt-4">
        <div className="flex flex-col w-full min-h-screen sm:items-start md:justify-start sm:mx-auto md:px-12 md:pt-10 pb-5 gap-16 font-[family-name:var(--font-geist-sans)] md:max-w-7xl">
          <Header />
          <Hero />
        </div>
      </div>
      <main className="flex flex-col min-h-screen justify-center sm:px-4 mx-auto md:px-6 md:pt-10 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] md:max-w-6xl">
        <Explore />
        <Favorite />
        <BestSelling />
        <Apps
         />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
