import { connectToMongoDB } from "@/lib/db";
import { deleteProduct, getSingleProduct } from "@/lib/actions";
import { createErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToMongoDB();

    const id = params.id;
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

