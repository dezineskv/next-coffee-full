// import Product from '@/models/Product';
// import { deleteProduct, updateProduct, getAllProducts, getProductById } from '@/actions/product';
// import Link from 'next/link';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';
// import { Button } from '@/ui/button';
// // import { useState, useEffect } from "react";
// // import EditProduct from "./EditProduct";
// import Image from 'next/image';
// import { toast, ToastContainer } from 'react-toastify';

// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   image_url: string;
//   origin: string;
//   roast_level: string;
//   price: string;
//   weight_oz: number;
//   in_stock: string;
//   sale: string;
// }

// export default async function GetProducts() {
//   // const notify = () => console.log('successfully deleted');

//   try {
//     const products = await Product.find();
//     if (products.length === 0) {
//       return <h1 className="text-xl font-bold text-red-400">You have no products</h1>;
//     } else {
//       return (
//         <>
//           <div className="w-full pt-8">
//             <h1 className="text-center text-4xl font-bold text-black">Product Inventory</h1>
//             <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-3">
//               {products.map((product: any) => (
//                 <Card className="h-auto w-[310px] rounded-lg" key={product._id?.toString()}>
//                   <div className="flex flex-col gap-2">
//                     <CardHeader className="w-full px-4 text-left">
//                       <CardTitle className="w-full text-sm">
//                         <h3 className="text-left text-xl">{product.title as string}</h3>
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="mb-0">
//                       <Image
//                         src={
//                           (product?.image_url as string) ||
//                           'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png'
//                         }
//                         alt="product"
//                         width={225}
//                         height={120}
//                         className="h-[120px] w-[225px]"
//                       />
//                     </CardContent>
//                   </div>
//                   <p className="line-clamp-4 w-full px-5 text-left leading-5">
//                     {product?.description as string}
//                   </p>
//                   <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
//                     In stock: {product?.in_stock as string}
//                   </p>
//                   <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
//                     On sale: {product?.sale as string}
//                   </p>
//                   <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
//                     Roast level: {product?.roast_level as string}
//                   </p>
//                   <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
//                     Price: {product.price as string}
//                   </p>
//                   <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
//                     Origin: {product?.origin as string}
//                   </p>
//                   <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
//                     Weight: {product?.weight_oz as string} oz.
//                   </p>
//                   <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
//                     Category: {product?.category as string}
//                   </p>
//                   <div className="flex flex-row justify-between">
//                     {/* link to edit form */}
//                     <Link href={`/admin/products/${product._id}`}>
//                       <Button className="ml-5 rounded border bg-blue-400 px-2">Edit</Button>
//                     </Link>
//                     {/* delete form */}
//                     <form
//                       className="flex justify-end pr-5"
//                       action={async (formData: FormData) => {
//                         'use server';
//                         await deleteProduct(formData);
//                       }}
//                     >
//                       <input hidden type="text" name="id" defaultValue={product._id.toString()} />
//                       <Button
//                         // onClick={() => toast('Operation completed successfully!')}
//                         className="rounded border bg-red-400 px-2"
//                       >
//                         delete
//                       </Button>
//                     </form>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </>
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
