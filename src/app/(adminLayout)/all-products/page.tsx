import Forms from '../../components/Forms';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center bg-slate-200 text-center">
        <div className="mx-auto h-1/2">
          <h1 className="mt-10 mb-10 text-4xl font-bold text-black">Admin</h1>
          <p>Manage product inventory
            </p>
            <Forms />
        </div>
      </div>
      <Footer />
    </>
  );
}
