import Forms from "../../components/Forms";
import GetProducts from "../../components/GetProducts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />  
      <div className="w-full bg-slate-200 text-center mx-auto min-h-screen flex flex-col items-center justify-center">
        <div className="mx-auto h-1/2 ">
          <h1 className="text-4xl text-black font-bold mt-12 mb-12">
            Admin
          </h1>
          <Forms />
        </div>
        <div className="flex flex-col items-center justify-around mx-auto h-1/2 ">
          <GetProducts />
        </div>
      </div>
      <Footer />
    </>
  );
}
