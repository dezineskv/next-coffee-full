import { getProductById, updateProduct } from "@/app/actions/product";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DetailAccordion from "@/app/components/DetailAccordion";
// import RatingProduct from "@/app/components/RatingProduct";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
            <div className="my-container md:pl-24">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/products">Products</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
     <h2 className="mx-auto text-center pt-5 text-3xl font-bold header">
             {product.title}
           </h2>
           <div className="flex flex-col justify-center gap-3 mx-auto w-full mt-8 mb-10 pb-10 h-full">
             <div className="card card-side bg-base-100 px-4 py-4 mx-auto text-center h-full">
               <div className="flex flex-col md:flex-row justify-center  gap-3">
                 <div className="flex flex-col">
                   <Image
                     src={product?.image_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"}
                     alt="Product Image"
                     width={400}
                     height={300}
                     className="w-auto h-auto"
                     priority
                   />
     
                   <div className="text-left">Small | Medium | Large</div>
                 </div>
                 <div className="card-body my-10 w-[300px] text-left ml-6 mt-0">
                   <p>
                     <span className="font-bold text-gray-700">
                       Product Description:&nbsp;
                     </span>
                     {product?.description}
                   </p>
                   <p className="mt-5">
                     <span className="font-bold text-gray-700">Origin: </span>
                     {product?.origin}
                   </p>
                   <p className="mt-5">
                     <span className="font-bold text-gray-700">Roast Level: </span>
                     {product?.roast_level}
                   </p>
                   <p className="mt-5">
                     <span className="font-bold text-gray-700">Weight: </span>
                     {product?.weight_oz} oz.
                   </p>
                   <p className="mt-5">
                     <span className="font-bold text-gray-700">Product ID: </span>
                     {product?._id}
                   </p>
                   <div className="card-actions flex flex-row justify-between items-center mt-6">
                     <h3 className="font-bold text-3xl mr-4">{product?.price}</h3>
                     <Button className="btn btn-primary">Buy Now</Button>
                   </div>
                 </div>
               </div>
             </div>
        {/* other components */}
        <DetailAccordion/>
         {/* <RatingProduct/>  */}
      </div>
      <Footer/>
    </>
  );
}
