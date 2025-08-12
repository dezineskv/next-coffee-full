"use client";

import { createProducts } from "../../lib/actions";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  // we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
    <div className="w-full bg-slate-200 text-center mx-auto">
      <h2 className="text-left text-blue-500 font-bold">Add Products</h2>
    <form
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        await createProducts(FormData);
      }}
      className="flex flex-col justify-center mx-auto border-1 border-black rounded-lg shadow-lg p-6 mt-8"
    >
      
      {/* <label htmlFor="product" className="py-2">
        Product
      </label>
      <input type="text" name="product" className="mb-2  w-62 h-10 p-2 rounded-lg border-1 border-black" /> */}
      <label htmlFor="title" className="py-2 pl-5 text-left text-black">
        Title
      </label>
      <input type="text" name="title" className="w-62 h-10 p-2 ml-2 rounded-lg border-1 border-black text-black" />
      <label htmlFor="description" className="py-2 pl-5 mt-2 text-left text-black">
        Description
      </label>
      <input type="text" name="description" className="w-62 h-10 p-2 ml-2 rounded-lg border-1 border-black text-black" />
      <SubmitButton />
    </form>
    </div>
    </>
  );
}
