import { getProductById, updateProduct } from '@/app/actions/product';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function ProductPage({ params }) {
  const { id } = params;

  const product = await getProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }
  // handle form
  async function handleUpdate(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    // const price = parseFloat(formData.get("price") as string);
    const description = formData.get('description') as string;
    const image_url = formData.get('image_url') as string;
    const price = formData.get('price') as string;
    const roast_level = formData.get('roast_level') as string;
    const sale = formData.get('sale') as string;
    const origin = formData.get('origin') as string;
    const in_stock = formData.get('in_stock') as string;
    const weight_oz = formData.get('weight_oz') as string;
    const category = formData.get('category') as string;

    await updateProduct(id, {
      title,
      description,
      image_url,
      price,
      roast_level,
      origin,
      weight_oz,
      sale,
      in_stock,
      category,
    });

    // await updateProduct(params.id, { title, description });

    revalidatePath(`/products/${id}`);
  }

  return (
    <>
      <div className="card card-side mx-auto h-full bg-slate-200 px-4 py-4 text-center">
        <h1 className="mt-2 mb-6 text-center text-4xl font-bold">Admin</h1>
        <p className="mb-10 text-center">Product Details</p>

        <div className="mx-auto flex w-2xl flex-col justify-center gap-3 text-center md:flex-row">
          <div className="flex flex-col">
            <Image
              src={
                product?.image_url ||
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png'
              }
              alt="Product Image"
              width={280}
              height={180}
              priority
            />
            {/* <div className="text-left">Small | Medium | Large</div> */}
          </div>
          <div className="card-body my-10 mt-0 ml-6 max-w-[400px] text-left">
            <p>
              <span className="font-bold text-blue-500">Product Title:&nbsp;</span>
              <div className="text-background">{product?.title}</div>
            </p>
            <p>
              <span className="font-bold text-blue-500">Description:&nbsp;</span>
              <div className="text-background">{product?.description}</div>
            </p>
            <p>
              <span className="font-bold text-blue-500">Origin: </span>
              <span className="text-background">{product?.origin}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Roast Level: </span>
              <span className="text-background">{product?.roast_level}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Weight: </span>
              <span className="text-background">{product?.weight_oz} oz.</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Price: </span>
              <span className="text-background">{product?.price}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">In Stock: </span>
              <span className="text-background">{product?.in_stock}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Category: </span>
              <span className="text-background">{product?.category}</span>
            </p>
            <p>
              <span className="text-background font-bold">Product ID: </span>
              <span className="text-background">{product?._id}</span>
            </p>
          </div>
        </div>

        {/* form to update products in table format */}
        <form action={handleUpdate} className="mt-6">
          <h3 className="mb-6 text-xl">Update Product Details</h3>
          <Table className="bg-background rounded-lg p-3 shadow-lg md:w-7xl">
            <TableCaption className="font-xs text-blue-500">
              {/* *Updating non-default values */}
            </TableCaption>
            <TableHeader>
              <TableRow className="text-md font-bold">
                <TableHead className="text-md mt-4 font-bold">PRODUCT Title</TableHead>
                <TableHead className="text-md mt-4 font-bold">Image</TableHead>
                <TableHead className="text-md mt-4 font-bold">Description</TableHead>
                <TableHead className="text-md mt-4 font-bold">Price</TableHead>
                <TableHead className="text-md mt-4 font-bold">Origin</TableHead>
                <TableHead className="text-md mt-4 font-bold">Roast Level</TableHead>
                <TableHead className="text-md mt-4 font-bold">Weight</TableHead>
                <TableHead className="text-md mt-4 font-bold">Sale</TableHead>
                <TableHead className="text-md mt-4 font-bold">In Stock</TableHead>
                <TableHead className="text-md mt-4 font-bold">Category</TableHead>

                <TableHead className="text-md mt-4 font-bold">UPDATE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-para py-8 text-left">
              <TableRow key={product?.id}>
                <TableCell className="font-semibold">
                  <input
                    name="title"
                    defaultValue={product?.title}
                    className="border-gray h-20 w-30 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="image_url"
                    defaultValue={product?.image_url}
                    className="border-gray h-20 w-30 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="description"
                    type="string"
                    defaultValue={product?.description}
                    className="border-gray h-20 w-30 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="price"
                    type="string"
                    defaultValue={product?.price}
                    className="border-gray h-20 w-10 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="origin"
                    type="string"
                    defaultValue={product?.origin}
                    className="border-gray h-20 w-20 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="roast_level"
                    type="string"
                    defaultValue={product?.roast_level}
                    className="border-gray h-20 w-10 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="weight_oz"
                    type="string"
                    defaultValue={product?.weight_oz}
                    className="border-gray h-20 w-10 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="sale"
                    type="string"
                    defaultValue={product?.sale}
                    className="border-gray h-20 w-10 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="in_stock"
                    type="string"
                    defaultValue={product?.in_stock}
                    className="border-gray h-20 w-10 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <input
                    name="category"
                    type="string"
                    defaultValue={product?.category}
                    className="border-gray h-20 w-10 border-1 text-wrap wrap-break-word"
                  />
                </TableCell>
                <TableCell className="font-semibold">
                  <Button className="rounded border px-2">UPDATE PRODUCT</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </div>
    </>
  );
}
