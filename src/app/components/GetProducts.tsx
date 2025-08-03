
import Product from "../../models/Product";
import { deleteProduct } from "@/lib/actions"; // Import the deleteProduct function
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

      //   // Extracting day, month, and year components from the Date object
      //   const day = deadlineDate.getDate();
      //   const month = deadlineDate.getMonth() + 1; // Months are zero-based, so add 1
      //   const year = deadlineDate.getFullYear();

      //   // Formatting the date as MM/DD/YYYY
      //   return `${month}/${day}/${year}`;
      // };

      // Creating a new Date object from the given string
      return (
        <>
        <div className="w-full mt-8">
          <h2 className="text-center text-green-400 font-bold mb-4">
            Products
          </h2>
           <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap py-10 ">
          {products.map((product: any) => (
            <Card className="min-w-[200px] min-h-[380px] max-h-[400px] rounded-lg shadow-lg"
              key={product._id?.toString()}
              // className="flex flex-col items-center gap-2 p-2 border-blue-400 border-2 rounded my-4"
            >
              <div className="flex flex-col gap-2 jpl-5">
               <CardHeader className="max-h-[100px] w-full text-left">
                       <CardTitle className="w-full text-sm">
                            <h3 className="text-xl">{product.title as string}</h3></CardTitle></CardHeader>
                <p className="text-left pl-5">{product.description as string}</p>
                 <CardContent className="mb-0">
                                      <img
                                        src={product?.image_url}
                                        alt="product"
                                        width={200}
                                        height={125}
                                        className="mx-auto opacity-[.5]"
                                      />
                                    </CardContent>
              </div>
              <form className="flex justify-end pr-5"
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
