"use client";

import { createProducts } from "../../lib/actions";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  // we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        await createProducts(FormData);
      }}
      className="flex flex-col"
    >
      <h2 className="text-center text-green-400 font-bold">Add Product</h2>
      {/* <label htmlFor="product" className="py-2">
        Product
      </label>
      <input type="text" name="product" className="mb-2  w-62 h-10 p-2 rounded-lg border-1 border-black" /> */}
      <label htmlFor="title" className="py-2">
        Title
      </label>
      <input type="text" name="title" className="w-62 h-10 p-2 rounded-lg border-1 border-black" />
      <label htmlFor="description" className="py-2">
        Description
      </label>
      <input type="text" name="description" className="w-62 h-10 p-2 rounded-lg border-1 border-black" />
      <SubmitButton />
    </form>
  );
}
