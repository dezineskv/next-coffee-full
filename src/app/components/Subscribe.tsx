"use client";

const Subscribe = () => {
  return (
    <div className="sm:max-w-60 md:max-w-90 flex flex-col items-center justify-center mx-auto mt-6">
      <form className="sm:pl-6">
        <h1 className="text-lg font-bold sm:ml-4 ">
          Subscribe to our Newsletter
        </h1>
        <div className="mb-4 ml-4">
          <input
            type="email"
            id="email"
            name="email"
            className="sm:pl-8 mt-1 block w-60 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your email address"
          />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
