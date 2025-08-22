import Header from '../components/Header';
import Hero from '../components/Hero';
import Explore from '../components/Explore';
import Favorite from '../components/Favorite';
import BestSelling from '../components/BestSelling';
import Footer from '../components/Footer';
import Apps from '../components/Apps';
import Testimonials from '../components/Testimonials';
import Menus from '../components/Menus';
import DataTableDemo from '../components/DataTableDemo';
// import Datas from "../components/Datas";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-0 w-screen bg-yellow-50 px-0 opacity-90">
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
