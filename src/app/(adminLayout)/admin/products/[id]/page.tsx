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
// import Product from "@/app/models/Product";

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
    const image_url = formData.get("image_url") as string;
    const price = formData.get("price") as string;
    const roast_level = formData.get("roast_level") as string;
    const sale = formData.get("sale") as string;
    const origin = formData.get("origin") as string;
    const in_stock = formData.get("in_Stock") as string;
    const weight_oz = formData.get("weight_oz") as string;

    await updateProduct(params.id, {
      title,
      description,
      image_url,
      price,
      roast_level,
      origin,
      weight_oz,
      sale,
      in_stock,
    });

    // await updateProduct(params.id, { title, description });

    revalidatePath(`/products/${params.id}`);
  }

  return (
    <>
      <Header />
      <div className="card card-side bg-slate-200 px-4 py-4 mx-auto text-center h-full">
        <h1 className="text-4xl text-center font-bold mt-2 mb-6">Admin</h1>

        <div className="flex flex-col md:flex-row justify-center gap-3">
          <div className="flex flex-col">
            <Image
              src={
                product?.image_url ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"
              }
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
              <div className="bg-blue-400">{product?.title}</div>
            </p>
            <p>
              <span className="font-bold text-foreground">
                Description:&nbsp;
              </span>
              <div className="bg-blue-400">{product?.description}</div>
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
              <span className="font-bold text-foreground">Price: </span>
              {product?.price}
            </p><p>
              <span className="font-bold text-foreground">In Stock: </span>
              {product?.in_stock}
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
              {/* *Updating non-default values */}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg mt-4 font-semibold">
                  PRODUCT title
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  Image
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  Description
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  Price
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  Origin
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  Roast Level
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  Weight
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  Sale
                </TableHead>
                <TableHead className="text-lg mt-4 font-semibold">
                  In Stock
                </TableHead>
                <TableHead className="mt-4 font-semibold text-lg">
                  UPDATE
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="py-8 text-para text-left">
              <TableRow key={product?.id}>
                <TableCell className="font-bold ">
                  <input
                    name="title"
                    defaultValue={product?.title}
                    className="border-1 border-gray"
                  />
                </TableCell>
                <TableCell className="font-bold ">
                  <input
                    name="image_url"
                    defaultValue="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"
                    className="border-1 border-gray"
                  />
                </TableCell>
                <TableCell className="font-bold">
                  <input
                    name="description"
                    type="string"
                    defaultValue={product?.description}
                    className="border-1 border-gray"
                  />
                </TableCell>
                  <TableCell className="font-bold">
                  <input
                    name="price"
                    type="string"
                    defaultValue={product?.price}
                    className="border-1 border-gray"
                  />
                </TableCell>
                <TableCell className="font-bold">
                  <input
                    name="origin"
                    type="string"
                    defaultValue={product?.origin}
                    className="border-1 border-gray"
                  />
                </TableCell>
                <TableCell className="font-bold">
                  <input
                    name="roast_level"
                    type="string"
                    defaultValue={product?.roast_level}
                    className="border-1 border-gray"
                  />
                </TableCell>
                <TableCell className="font-bold">
                  <input
                    name="weight_oz"
                    type="string"
                    defaultValue={product?.weight_oz}
                    className="border-1 border-gray"
                  />
                </TableCell>
                <TableCell className="font-bold">
                  <input
                    name="sale"
                    type="string"
                    defaultValue={product?.sale}
                    className="border-1 border-gray"
                  />
                </TableCell>
                <TableCell className="font-bold">
                  <input
                    name="in_stock"
                    type="string"
                    defaultValue={product?.in_stock}
                    className="border-1 border-gray"
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
