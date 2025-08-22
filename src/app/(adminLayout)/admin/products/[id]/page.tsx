import { getProductById, updateProduct } from "@/app/actions/product";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/app/components/Header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }
// handle form 
  async function handleUpdate(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    // const price = parseFloat(formData.get("price") as string);
    const description = formData.get("description") as string;
    await updateProduct(params.id, { title, description });
    revalidatePath(`/products/${params.id}`);
  }

  return (
    <>
      <Header />
      <div className="card card-side bg-base-100 px-4 py-4 mx-auto text-center h-full">
        <div className="flex flex-col md:flex-row justify-center  gap-3">
          <div className="flex flex-col">
            <Image
              src={product?.image_url || "/placeholder.png"}
              alt="Product Image"
              width={380}
              height={280}
              priority
            />
            {/* <div className="text-left">Small | Medium | Large</div> */}
          </div>
          <div className="card-body my-10 w-[300px] text-left ml-6 mt-0">
            <p>
              <span className="font-bold text-foreground">
                Product Title:&nbsp;
              </span>
              <div className="bg-blue-400">
              {product?.title}</div>
            </p>
            <p>
              <span className="font-bold text-foreground">
                Description:&nbsp;
              </span>
            <div className="bg-blue-400">
              {product?.description}</div>
            </p>
            <p>
              <span className="font-bold text-foreground">Origin: </span>
              {product?.origin}
            </p>
            <p>
              <span className="font-bold text-foreground">Roast Level: </span>
              {product?.roast_level}
            </p>
            <p>
              <span className="font-bold text-foreground">Weight: </span>
              {product?.weight_oz} oz.
            </p>
            <p>
              <span className="font-bold text-foreground">Product ID: </span>
              {product?._id}
            </p>
   
          </div>
        </div>
        {/* form to update products in table format */}
         <form action={handleUpdate} className="mt-6">
          <h3 className="text-xl mb-6">Update Product Details</h3>
        <Table className="bg-background p-3 rounded-lg shadow-lg">
          <TableCaption className="text-foreground font-xs">
            *Updating non-default values
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg mt-4 font-semibold">
                PRODUCT
              </TableHead>
              <TableHead className="text-lg mt-4 font-semibold">
                DESCRIPTION
              </TableHead>
              <TableHead className="mt-4 font-semibold text-lg">
                UPDATE
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="py-8 text-para text-left">
            <TableRow key={product?.title}>
              <TableCell className="font-bold ">
                <input name="title" defaultValue={product.title} className="border-1 border-gray"/>
              </TableCell>
              <TableCell className="font-bold">
                <input
            name="description"
            type="string"
            defaultValue={product.description} className="border-1 border-gray"
          />
              </TableCell>
              <TableCell className="font-bold">
                <Button className="border rounded px-2 bg-blue-400">
                  UPDATE PRODUCT
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </form>
      </div>



    </>
  );
}
