"use client";

import { createProducts } from "@/app/actions/product";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  // using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <div className="w-full bg-slate-200 text-center mx-auto">
        {/* FormData async server action to add products */}
        <form
          ref={ref}
          action={async (FormData) => {
            ref.current?.reset();
            await createProducts(FormData);
          }}
          className="flex flex-col justify-center mx-auto border-1 border-black rounded-lg shadow-lg p-6 gap-4 mt-8 w-[85%] md:w-3xl bg-black"
        >
          <h3 className="text-blue-500 font-bold">Add New Products</h3>
          <div>
            <label htmlFor="title" className="py-2 pl-5 text-left text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-62 h-10 p-2 ml-2 rounded-lg border-1 border-white text-white"
              defaultValue="new title here"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              className="w-82 h-10 p-2 ml-2 rounded-lg border-1 border-white text-white"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              Price
            </label>
            <input
              type="string"
              name="price"
              className="w-32 h-10 p-2 ml-2 rounded-lg border-1 border-white text-white"
            />
          </div>
          {/* <div className="flex flex-col mx-auto text-left p-6 bg-gray-300 w-[75%]">
            <h3 className="text-blue-500 text-bold">Defaults</h3> */}
            <div>
            <label
              htmlFor="image_url"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              Image
            </label>
            <input
              name="image_url"
              type="string"
              // defaultValue="https://i.ibb.co/7xJPr5xq/coffee-6.jpg"
              className="text-black border-1 border-gray-700 p-2"
            /></div>
            <div>
            <label
              htmlFor="roast_level"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              Roast Level
            </label>
            <input
              name="roast_level"
              type="string"
              className="text-black border-1 border-gray-700 p-2"
            /></div>
            <div>
            <label
              htmlFor="origin"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              Origin
            </label>          
            <input
              name="origin"
              type="string"
              className="text-black border-1 border-gray-700 p-2"
            /></div>
            <div>
            <label
              htmlFor="in_stock"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              In Stock
            </label>
            <input
              name="in_stock"
              type="string"
              className="text-black border-1 border-gray-700 p-2"
            /></div>
            <div>          
            <label
              htmlFor="weight_oz"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              Weight oz.
            </label>
            <input
              name="weight_oz"
              type="string"
              className="text-black border-1 border-gray-700 p-2"
            /></div>
            <div>
            <label
              htmlFor="sale"
              className="py-2 pl-5 mt-2 text-left text-white"
            >
              On Sale
            </label>
            <input
              name="sale"
              type="string"
              className="text-black border-1 border-gray"
            /></div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
}
