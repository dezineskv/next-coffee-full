'use client';

import { createProducts } from '@/app/actions/product';
import { useRef } from 'react';
import SubmitButton from './SubmitButton';

export default function Forms() {
  // using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <div className="mx-auto w-full bg-slate-200 text-center">
        {/* FormData async server action to add products */}
        <form
          ref={ref}
          action={async (FormData) => {
            ref.current?.reset();
            await createProducts(FormData);
          }}
          className="mx-auto mt-8 flex w-[85%] flex-col justify-center gap-4 rounded-lg border-1 border-black bg-black p-6 shadow-lg md:w-3xl"
        >
          <h3 className="font-bold text-blue-500">Add New Products</h3>
          <div>
            <label htmlFor="title" className="py-2 pl-5 text-left text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
              defaultValue="new title here"
            />
          </div>
          <div>
            <label htmlFor="description" className="mt-2 py-2 pl-5 text-left text-white">
              Description
            </label>
            <input
              type="text"
              name="description"
              className="ml-2 h-10 w-82 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="price" className="mt-2 py-2 pl-5 text-left text-white">
              Price
            </label>
            <input
              type="string"
              name="price"
              className="ml-2 h-10 w-32 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          {/* <div className="flex flex-col mx-auto text-left p-6 bg-gray-300 w-[75%]">
            <h3 className="text-blue-500 text-bold">Defaults</h3> */}
          <div>
            <label htmlFor="image_url" className="mt-2 py-2 pl-5 text-left text-white">
              Image
            </label>
            <input
              name="image_url"
              type="string"
              // defaultValue="https://i.ibb.co/7xJPr5xq/coffee-6.jpg"
              className="border-1 border-gray-700 p-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="roast_level" className="mt-2 py-2 pl-5 text-left text-white">
              Roast Level
            </label>
            <input
              name="roast_level"
              type="string"
              className="border-1 border-gray-700 p-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="origin" className="mt-2 py-2 pl-5 text-left text-white">
              Origin
            </label>
            <input
              name="origin"
              type="string"
              className="border-1 border-gray-700 p-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="in_stock" className="mt-2 py-2 pl-5 text-left text-white">
              In Stock
            </label>
            <input
              name="in_stock"
              type="string"
              className="border-1 border-gray-700 p-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="weight_oz" className="mt-2 py-2 pl-5 text-left text-white">
              Weight oz.
            </label>
            <input
              name="weight_oz"
              type="string"
              className="border-1 border-gray-700 p-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="sale" className="mt-2 py-2 pl-5 text-left text-white">
              On Sale
            </label>
            <input name="sale" type="string" className="border-gray-700 border-1 text-black" />
          </div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
}
