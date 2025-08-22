// // pages/api/product/[id].ts
// import { NextApiRequest, NextApiResponse } from "next";
// import connectToMongoDB from "@/lib/db";
// import Product from "@/models/Product";
// import { stringToObjectId } from "@/lib/utils"; // if you're using this helper

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await connectToMongoDB();

//   const { id } = req.query;
//   const parsedId = stringToObjectId(id as string); // or use new mongoose.Types.ObjectId(id)

//   if (req.method === "GET") {
//     try {
//       const product = await Product.findById(parsedId);
//       if (!product) return res.status(404).json({ error: "Product not found" });
//       return res.status(200).json({ success: true, data: product });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Failed to fetch product" });
//     }
//   }

//   if (req.method === "PATCH") {
//     try {
//       const updated = await Product.findByIdAndUpdate(parsedId, req.body, {
//         new: true,
//       });
//       if (!updated) return res.status(404).json({ error: "Product not found" });
//       return res
//         .status(200)
//         .json({ success: true, message: "Product updated", data: updated });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Failed to update product" });
//     }
//   }

//   return res.status(405).json({ error: "Method Not Allowed" });
// }
