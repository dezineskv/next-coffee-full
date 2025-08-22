// import connectToMongoDB from "@/lib/db";
// import {
//   deleteProduct,
//   getSingleProduct,
//   createProducts,
//   editProduct,
// } from "@/lib/actions";
// import { createErrorResponse } from "@/lib/utils";
// import { NextRequest, NextResponse } from "next/server";
// import Product from "../../../../models/Product";
// import { NextApiRequest, NextApiResponse } from "next";
// import { ObjectId } from "mongodb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await connectToMongoDB();

//   const {
//     query: { id },
//     method,
//   } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const product = await Product.findById(id);
//         if (!product) {
//           return res
//             .status(404)
//             .json({ success: false, message: "product not found" });
//         }
//         res.status(200).json({ success: true, data: product });
//       } catch (error) {
//         res.status(400).json({ success: false, error });
//       }
//       break;
//     case "PATCH":
//       try {
//         const product = await Product.findByIdAndUpdate(id, req.body, {
//           new: true,
//           runValidators: true,
//         });
//         if (!product) {
//           return res
//             .status(404)
//             .json({ success: false, message: "product not found" });
//         }
//         res.status(200).json({ success: true, data: product });
//       } catch (error) {
//         res.status(400).json({ success: false, error });
//       }
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "PUT"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }

// // export async function GET(request: Request, { params }: { params: { id: string } }) {
// //             const product = await Product.findById(id);

// //   const product = await Product.findById(id);

// //   if (!product) {
// //     return NextResponse.json({ error: 'Product not found' }, { status: 404 });
// //   }

// //   return NextResponse.json(product);
// // }
