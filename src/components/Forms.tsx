'use client';

import { createProducts } from '@/actions/product';
import { useRef } from 'react';
import SubmitButton from './SubmitButton';
import { toast } from 'react-toastify';

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
            const result = await createProducts(FormData);
            if (
              typeof result === 'object' &&
              result !== null &&
              'success' in result &&
              'message' in result
            ) {
              if (result.success) {
                toast.success('Product created successfully!');
              } else {
                toast.error('Error creating product');
              }
            } else if (typeof result === 'string') {
              toast.error(result);
            }
          }}
          className="mx-auto mt-8 flex w-[85%] flex-col justify-center gap-4 rounded-lg border-1 border-black bg-black p-6 shadow-lg md:w-3xl"
        >
          <h3 className="font-bold text-blue-500">Add New Products</h3>
          <div className="mx-auto flex w-[350px] flex-col justify-center gap-3">
            <div className="flex flex-row justify-start">
              <label htmlFor="title" className="w-[100px] py-2 pr-5 text-left text-white">
                Title
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="title"
                  className="ml-2 h-16 w-56 flex-row rounded-lg border-1 border-white px-2 pt-1 text-white"
                  defaultValue="House Blend"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="description" className="w-[100px] py-2 pr-5 text-left text-white">
                Description
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="description"
                  className="ml-2 h-16 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="A bold and balanced blend perfect for espresso lovers, with a caramel crema."
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="image_url" className="w-[100px] py-2 pr-5 text-left text-white">
                Image
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="string"
                  name="image_url"
                  className="ml-2 h-16 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="price" className="w-[100px] py-2 pr-5 text-left text-white">
                Price
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="price"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="5"
                />
              </div>
            </div>

            <div className="flex flex-row justify-start">
              <label htmlFor="roast_level" className="w-[100px] py-2 pr-5 text-left text-white">
                Roast Level
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="roast_level"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="dark"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="origin" className="w-[100px] py-2 pr-5 text-left text-white">
                Origin
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="origin"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="Colombia"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="in_stock" className="w-[100px] py-2 pr-5 text-left text-white">
                in_stock
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="in_stock"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="yes"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="weight_oz" className="w-[100px] py-2 pr-5 text-left text-white">
                Weight oz.
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="weight_oz"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="12"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="sale" className="w-[100px] py-2 pr-5 text-left text-white">
                Sale
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="sale"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="yes"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="price" className="w-[100px] py-2 pr-5 text-left text-white">
                Price
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="price"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="5"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <label htmlFor="category" className="w-[100px] py-2 pr-5 text-left text-white">
                Category
              </label>
              <div className="justify-flex-end flex">
                <input
                  type="text"
                  name="category"
                  className="ml-2 h-10 w-56 items-start rounded-lg border-1 border-white px-2 pt-1 text-wrap text-white"
                  defaultValue="other"
                />
              </div>
            </div>
          </div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
}
