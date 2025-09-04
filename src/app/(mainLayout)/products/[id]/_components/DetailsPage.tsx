// import { getProductById } from '@/actions/product';
// import Image from 'next/image';
// import { Button } from '@/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import DetailAccordion from '@/components/DetailAccordion';
// // import RatingProduct from "@/components/RatingProduct";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/ui/breadcrumb';
// import Link from 'next/link';

// export default async function DetailsPage({ product }: { product: any }) {
//   console.log(product);

//   return (
//     <>
//       <Header />
//       {/* breadcrumbs */}
//       <div className="my-container md:pl-24">
//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link href="/">Home</Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link href="/products">Products</Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//       {/* product details */}
//       {/* product title out-of-stock condition */}
//       {product?.in_stock == 'no' ? (
//         <h2 className="bg-background header mx-auto pt-5 text-center text-3xl text-gray-400">
//           {product?.title}
//         </h2>
//       ) : (
//         <h2 className="header mx-auto pt-5 text-center text-3xl font-bold">{product.title}</h2>
//       )}
//       <div className="mx-auto mt-8 mb-10 flex h-full w-full flex-col justify-center gap-3 pb-10">
//         <div className="card card-side bg-base-100 mx-auto h-full px-4 py-4 text-center">
//           <div className="flex flex-col justify-center gap-3 md:flex-row">
//             <div className="flex flex-col">
//               <Image
//                 src={
//                   product?.image_url ||
//                   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png'
//                 }
//                 alt="Product Image"
//                 width={350}
//                 height={250}
//                 className="h-auto w-auto"
//                 priority
//               />
//               <div className="text-left">Small | Medium | Large</div>
//             </div>
//             <div className="card-body my-10 mt-0 ml-6 w-[300px] text-left">
//               <p>
//                 <span className="font-bold text-white">Product Description:&nbsp;</span>
//                 {product?.description}
//               </p>
//               <p className="mt-5">
//                 <span className="font-bold text-gray-700">Origin: </span>
//                 {product?.origin}
//               </p>
//               <p className="mt-5">
//                 <span className="font-bold text-gray-700">Roast Level: </span>
//                 {product?.roast_level}
//               </p>
//               <p className="mt-5">
//                 <span className="font-bold text-gray-700">Weight: </span>
//                 {product?.weight_oz} oz.
//               </p>
//               <p className="mt-5">
//                 <span className="font-bold text-gray-700">Product ID: </span>
//                 {product?._id}
//               </p>
//               <div className="card-actions mt-6 flex flex-row items-center justify-between">
//                 <h3 className="mr-4 text-3xl font-bold">${product?.price}</h3>
//                 {product.in_stock == 'no' ? (
//                   <div className="font-bold text-red-500">Out of stock</div>
//                 ) : (
//                   ''
//                 )}
//                 <div>
//                   {product.sale == 'yes' ? (
//                     <>
//                       <div className="pl-2 font-bold text-amber-500">On Sale</div>
//                       <Button className="btn btn-primary">Buy Now</Button>
//                     </>
//                   ) : (
//                     <Button className="btn btn-primary">Buy Now</Button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* other components */}
//         <div className="w-full">
//           <DetailAccordion />
//         </div>

//         {/* <RatingProduct/>  */}
//       </div>
//       <Footer />
//     </>
//     //      } catch (error) {
//     //     return { message: 'error deleting product' };
//     //   }
//   );
// }
