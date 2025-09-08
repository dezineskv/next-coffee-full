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
          <div>
            <label htmlFor="title" className="py-2 pl-5 text-left text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
              defaultValue="House Blend"
            />
          </div>
          <div>
            <label htmlFor="description" className="mt-2 py-2 pl-5 text-left text-white">
              Description
            </label>
            <input
              type="text"
              name="description"
              defaultValue="A bold and balanced blend perfect for espresso lovers, with a caramel crema."
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="price" className="mt-2 py-2 pl-5 text-left text-white">
              Price
            </label>
            <input
              type="string"
              name="price"
              defaultValue="5"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
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
              defaultValue="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="roast_level" className="mt-2 py-2 pl-5 text-left text-white">
              Roast Level
            </label>
            <input
              name="roast_level"
              type="string"
              defaultValue="dark"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="origin" className="mt-2 py-2 pl-5 text-left text-white">
              Origin
            </label>
            <input
              name="origin"
              type="string"
              defaultValue="Columbia"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="in_stock" className="mt-2 py-2 pl-5 text-left text-white">
              In Stock
            </label>
            <input
              name="in_stock"
              type="string"
              defaultValue="yes"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="weight_oz" className="mt-2 py-2 pl-5 text-left text-white">
              Weight oz.
            </label>
            <input
              name="weight_oz"
              type="string"
              defaultValue="12"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="sale" className="mt-2 py-2 pl-5 text-left text-white">
              On Sale
            </label>
            <input
              name="sale"
              type="string"
              defaultValue="yes"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="sale"
              defaultValue="new title here"
              className="mt-2 py-2 pl-5 text-left text-white"
            >
              Category
            </label>
            <input
              name="category"
              defaultValue="other"
              type="string"
              className="ml-2 h-10 w-62 rounded-lg border-1 border-white p-2 text-white"
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
}
