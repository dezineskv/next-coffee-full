// 'use server';
import { getProductById, updateProduct } from '@/actions/product';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import { Button } from '@/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { notFound } from 'next/navigation';
import { toast } from 'react-toastify';

export default async function CoffeePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // safely use `id`
  const product = await getProductById(id);
  if (!product) return notFound();

  // return <CoffeeDetails product={product} />;

  // handle form
  async function handleUpdate(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
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
    revalidatePath(`/products/${id}`);
  }

  return (
    <>
      <div className="card card-side mx-auto h-auto bg-slate-200 px-4 py-4 text-center sm:flex sm:w-[90%] sm:flex-col md:w-full">
        <h1 className="mt-4 mb-6 text-center text-4xl font-bold">Admin</h1>
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
              <div className="text-black">{product?.title}</div>
            </p>
            <p>
              <span className="font-bold text-blue-500">Description:&nbsp;</span>
              <div className="text-black">{product?.description}</div>
            </p>
            <p>
              <span className="font-bold text-blue-500">Origin: </span>
              <span className="text-black">{product?.origin}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Roast Level: </span>
              <span className="text-black">{product?.roast_level}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Weight: </span>
              <span className="text-black">{product?.weight_oz} oz.</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Price: </span>
              <span className="text-black">{product?.price}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">In Stock: </span>
              <span className="text-black">{product?.in_stock}</span>
            </p>
            <p>
              <span className="font-bold text-blue-500">Category: </span>
              <span className="text-black">{product?.category}</span>
            </p>
            <p>
              <span className="text-black">Product ID: </span>
              <span className="text-gray-400">{product?._id}</span>
            </p>
          </div>
        </div>
        {/* form to update products in table format */}
        <h3 className="mb-6 text-xl font-semibold">Update Product Details</h3>

        <form action={handleUpdate} className="mx-auto mt-6 bg-background p-4 rounded-lg">
          <div key={product?._id} className="flex flex-col sm:w-full md:w-3xl">
            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Product Title</h3>
              <input
                name="title"
                defaultValue={product?.title}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Image URL</h3>
              <input
                name="image_url"
                defaultValue={product?.image_url}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Description</h3>
              <input
                name="description"
                type="string"
                defaultValue={product?.description}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Price</h3>
              <input
                name="price"
                type="string"
                defaultValue={product?.price}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Origin</h3>
              <input
                name="origin"
                type="string"
                defaultValue={product?.origin}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Roast Level</h3>
              <input
                name="roast_level"
                type="string"
                defaultValue={product?.roast_level}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Weight</h3>
              <input
                name="weight_oz"
                type="string"
                defaultValue={product?.weight_oz}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">On Sale</h3>
              <input
                name="sale"
                type="string"
                defaultValue={product?.sale}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">In Stock</h3>
              <input
                name="in_stock"
                type="string"
                defaultValue={product?.in_stock}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex flex-col sm:w-full">
              <h3 className="text-lg font-semibold">Category</h3>
              <input
                name="category"
                type="string"
                defaultValue={product?.category}
                className="border-1 border-gray-800 whitespace-nowrap text-black sm:p-2"
              />
            </div>

            <div className="flex mt-6 sm:w-full mx-auto align-middle justify-center ">
              <Button className="rounded border py-4">UPDATE PRODUCT</Button>
            </div>
          </div>
        </form>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}
