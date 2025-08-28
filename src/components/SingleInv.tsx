// "use client";
// import { TProduct } from "../types";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Button } from "@/ui/button";
// import Testimonials from "./Testimonials";
// import ReactStars from "react-stars";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/ui/breadcrumb";
// import Link from "next/link";

// const SingleInv = ({ id }: { id: string }) => {
//   const [singleProduct, setSingleProduct] = useState<TProduct>();
//   //   const [coffees, setCoffees] = useState<TProduct[]>([]);

//   // const ratingChanged = (newRating) => {
//   //   console.log(newRating);
//   // };

//     const removeProduct = async () => {
//       try {
//         const res = await axios.delete(`http://localhost:5000/api/data/${id}`);
//         setSingleProduct(res.data);
//       } catch (error) {}
//     };

//   //   removeProduct();
//   // console.log(singleProduct);

//   // const handleDelete = ({id}: {id: string}) => {
//   //   setSingleProduct(singleProduct?.filter((t) => t.id !== id));
//   // };
//   return (
//     <>
//       <Header />
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
//                 <Link href="/inventory">Inventory</Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//       <h2 className="mx-auto text-center pt-5 text-3xl font-bold header">
//         Product Details
//       </h2>
//       <div className="flex flex-col justify-center gap-3 mx-auto w-11/12 mt-20 mb-10 pb-10 h-full">
//         <div className="card card-side bg-base-100 max-w-10/12 px-4 py-4 mx-auto text-center h-full">
//           <div className="flex flex-col md:flex-row justify-center  gap-3">

//             <div className="card-body my-10 w-[300px] text-left ml-6 mt-0">
//               <h2 className="text-2xl font-bold mb-6">
//                 {singleProduct?.title}
//               </h2>

//             </div>
//             <div className="card-actions mt-auto flex flex-row justify-between items-end">
//               <Button
//                 onClick={() => removeProduct(id)}
//                 className="btn btn-primary"
//               >
//                 Delete
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SingleInv;
