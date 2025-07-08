"use client";

const Subscribe = () => {
  return (
    <div className="max-w-90 h-full flex flex-col items-flex-start justify-start md:pt-0 md:mx-auto md:mb-auto md:pb-10 sm:px-5">
      <form className="bg-white">
        <h1 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h1>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your email address"
          />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
