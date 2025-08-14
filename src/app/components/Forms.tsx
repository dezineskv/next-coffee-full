"use client";

import { createProducts } from "../../lib/actions";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  // using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <div className="w-full bg-slate-200 text-center mx-auto">
        <h2 className="text-left text-blue-500 font-bold">Add Products</h2>
        {/* FormData async server action to add products */}
        <form
          ref={ref}
          action={async (FormData) => {
            ref.current?.reset();
            await createProducts(FormData);
          }}
          className="flex flex-col justify-center mx-auto border-1 border-black rounded-lg shadow-lg p-6 gap-4 mt-8 w-[85%] md:w-3xl"
        >
          {/* <label htmlFor="product" className="py-2">
        Product
      </label>
      <input type="text" name="product" className="mb-2  w-62 h-10 p-2 rounded-lg border-1 border-black" /> */}
          <div>
          <label htmlFor="title" className="py-2 pl-5 text-left text-black">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="w-62 h-10 p-2 ml-2 rounded-lg border-1 border-black text-black"
          />
          </div>
          <div>
          <label
            htmlFor="description"
            className="py-2 pl-5 mt-2 text-left text-black"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            className="w-82 h-10 p-2 ml-2 rounded-lg border-1 border-black text-black"
          /></div>
          <div>
          <label
            htmlFor="price"
            className="py-2 pl-5 mt-2 text-left text-black"
          >
            Price
          </label>
          <input
            type="string"
            name="price"
            className="w-32 h-10 p-2 ml-2 rounded-lg border-1 border-black text-black"
            defaultValue="5"
          />
          </div>
          <div className="flex flex-col mx-auto text-left p-6 bg-gray-300">
            <h3 className="text-blue-500 text-bold">Defaults</h3>
            <p>
            Image:&nbsp;
          <input name="image_url" type="string" defaultValue="https://i.ibb.co/7xJPr5xq/coffee-6.jpg" className="text-black"/></p>
          <p>
          Roast level:&nbsp;
          <input name="roast_level" type="string" defaultValue="6"  className="text-black"/></p>
          <p>
          Origin:&nbsp;
           <input name="origin" type="string" defaultValue="Columbia" className="text-black"/></p>
           <p>
           In stock:&nbsp; <input name="in_stock" type="string" defaultValue="yes" className="text-black"/></p>
          <p>Weight oz.:&nbsp;
          <input name="weight_oz" type="string" defaultValue="12" className="text-black"/></p>            
          <p>  
          Sale:&nbsp;
          <input name="sale" type="string" defaultValue="no" className="text-black"/>
          </p>
          </div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
}
