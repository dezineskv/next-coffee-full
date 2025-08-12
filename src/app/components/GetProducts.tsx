
import Product from "../../models/Product";
import { deleteProduct } from "@/lib/actions"; 
import { getAllProducts } from "@/lib/actions";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function GetProducts() {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return (
        <h1 className="text-red-400 font-bold text-xl">You have no products</h1>
      );
    } else {
      // const title = (title: any) => {
      //   const deadlineDate = new Date(title);
      //   // Extract day, month, and year components from the Date object
      //   const day = deadlineDate.getDate();
      //   const month = deadlineDate.getMonth() + 1; // Months are zero-based, so add 1
      //   const year = deadlineDate.getFullYear();

      //   // Format date as MM/DD/YYYY
      //   return `${month}/${day}/${year}`;
      // };

      // Create a new Date object from the given string
      return (
        <>
          <div className="w-full mt-8">
            <h1 className="text-4xl text-center font-bold">Product Inventory</h1>
            <div className="grid grid-cols-3 gap-4 py-10">
              {products.map((product: any) => (
                <Card
                  className="h-auto rounded-lg w-[310px]"
                  key={product._id?.toString()}
                  // className="flex flex-col items-center gap-2 p-2 border-blue-400 border-2 rounded my-4"
                >
                  <div className="flex flex-col gap-2">
                    <CardHeader className="w-full px-4 text-left">
                      <CardTitle className="w-full text-sm">
                        <h3 className="text-xl text-center">
                          {product.title as string}
                        </h3>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="mb-0">
                      <img
                        src={product?.image_url}
                        alt="product"
                        width={225}
                        height={120}
                        className="w-[225px] h-[120px]"
                      />
                    </CardContent>
                  </div>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    {product.description as string}
                  </p>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    ID: {product._id as string}
                  </p>
                    <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    In stock: {product.in_stock as string}
                  </p>
                     <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                   On sale: {product.sale as string}
                  </p>
                    <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                   Roast level: {product.roast_level as string}
                  </p>
                    <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                   Price: {product.price as string}
                  </p>
                    <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                   Origin: {product.origin as string}
                  </p>
                    <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                   Weight: {product.weight_oz as string}
                  </p>
                  
                  <form
                    className="flex justify-end pr-5"
                    action={async (formData: FormData) => {
                      "use server";
                      await deleteProduct(formData);
                    }}
                  >
                    <input
                      hidden
                      type="text"
                      name="id"
                      defaultValue={product._id.toString()}
                    />
                    <button className="border rounded px-2 bg-red-400">
                      delete
                    </button>
                  </form>
                </Card>
              ))}
            </div>
          </div>
        </>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
