'use client';

const Subscribe = () => {
  return (
    <div className="mx-auto mt-6 flex flex-col items-center justify-center sm:max-w-60 md:max-w-90">
      <form className="sm:pl-6">
        <h1 className="text-lg font-bold sm:ml-4">Subscribe to our Newsletter</h1>
        <div className="mb-4 ml-4">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-60 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:pl-8 sm:text-sm"
            placeholder="Enter your email address"
          />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
