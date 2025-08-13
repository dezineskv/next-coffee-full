import { connectToMongoDB } from "@/lib/db";
import {
  deleteProduct,
  getSingleProduct,
  createProducts,
  updateProduct,
} from "@/lib/actions";
import { createErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

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
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectToMongoDB();

//     const id = params.id;
//     let body = await request.json();

//     const { product, error } = await updateProduct(id, body);

//     if (error) {
//       throw error;
//     }

//     let json_response = {
//       status: "success",
//       data: {
//         product,
//       },
//     };
//     return NextResponse.json(json_response);
//   } catch (error: any) {
//     if (typeof error === "string" && error.includes("Todo not found")) {
//       return createErrorResponse("Todo not found", 404);
//     }

//     return createErrorResponse(error.message, 500);
//   }
// }
