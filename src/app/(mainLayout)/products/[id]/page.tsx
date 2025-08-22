import { getProductById, updateProduct } from "@/app/actions/product";
import { revalidatePath } from "next/cache";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  async function handleUpdate(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);

    await updateProduct(params.id, { name, price });
    revalidatePath(`/products/${params.id}`);
  }

  return (
    <form action={handleUpdate}>
      <input name="name" defaultValue={product.name} />
      <input name="price" type="number" defaultValue={product.price} />
      <button type="submit">Update Product</button>
    </form>
  );
}
