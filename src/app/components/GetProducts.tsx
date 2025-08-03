
import Product from "../../models/Product";
import { deleteProduct } from "@/lib/actions"; // Import the deleteProduct function
import { getAllProducts } from "@/lib/actions";

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
        <div className="w-72 mt-8">
          <h2 className="text-center text-green-400 font-bold mb-4">
            Products
          </h2>
          {products.map((product: any) => (
            <div
              key={product._id?.toString()}
              className="flex flex-col items-center gap-2 p-2 border-blue-400 border-2 rounded my-4"
            >
              <div className="flex flex-col gap-2 justify-center items-center ">
                <h3>{product.title as string}</h3>
                <p>{product.description as string}</p>
              </div>
              <form
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
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
