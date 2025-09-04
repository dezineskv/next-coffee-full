import Forms from '../../../components/Forms';

export default function Home() {
  return (
    <>
      <div className="mx-auto pb-10 flex min-h-screen w-full flex-col items-center justify-start bg-slate-200 text-center">
        <div className="mx-auto h-1/2">
          <h1 className="mt-10 mb-10 text-4xl font-bold text-black">Admin</h1>
          <p className="text-black">Manage product inventory</p>
          <Forms />
        </div>
      </div>
    </>
  );
}
