import Header from "./components/Header";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Favorite from "./components/Favorite";
import BestSelling from "./components/BestSelling";
import Footer from "./components/Footer";
import Apps from "./components/Apps";
import Testimonials from "./components/Testimonials";
// import styles from "./components/Hero.module.css";

export default function Home() {
  return (
    <>
      <div className=" bg-yellow-100 w-screen opacity-90 ">
        <div className="bg-white flex flex-col md:pt-10 mb-10 gap-16 font-[family-name:var(--font-geist-sans)]">
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
      <div className="bg-white pt-16 mt-20">
        <Footer />
      </div>
    </>
  );
}
