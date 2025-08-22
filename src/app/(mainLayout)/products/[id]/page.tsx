import { getProductById, updateProduct } from "@/app/actions/product";
import { revalidatePath } from "next/cache";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  async function handleUpdate(formData: FormData) {
    "use server";



    const name = formData.get("name") as string;
    // const price = parseFloat(formData.get("price") as string);
    const description = formData.get("description") as string;
    await updateProduct(params.id, { name, description });
    revalidatePath(`/products/${params.id}`);
  }

  return (
    <form action={handleUpdate}>
      <div className="flex flex-col">
        <input name="title" defaultValue={product.title} />
        <input
          name="description"
          type="string"

          defaultValue={product.description}
        />
        <button type="submit" className="bg-black w-50 rounded-lg">
          Update Product
        </button>
      </div>
    </form>
  );
}
