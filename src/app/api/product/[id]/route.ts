import { connectToMongoDB } from "@/lib/db";
import {
  deleteProduct,
  getSingleProduct,
  createProducts,
  updateProduct,
} from "@/lib/actions";
import { createErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../models/Product";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await connectToMongoDB();

    const id = (await params).id;
    const { product, error } = await getSingleProduct(id);

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        product,
      },
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    if (typeof error === "string" && error.includes("product not found")) {
      return createErrorResponse("product not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
}

// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   await connectToMongoDB();

//   const id = params.id;

//   try {
//     const body = await req.json();
//     const product = await Product.findByIdAndUpdate(id, body, { new: true, runValidators: true });
//     if (!product) {
//       return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
//     }
//     return NextResponse.json({ success: true, data: product }, { status: 200 });
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
//     return NextResponse.json({ success: false, message: errorMessage }, { status: 400 });
//   }
// }