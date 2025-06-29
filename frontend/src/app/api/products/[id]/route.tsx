import { updateProducts } from "@/libs/dbManager";
import { NextRequest, NextResponse } from "next/server";
import type { Product } from "next-auth";

export async function PUT(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.json();
        const url = new URL(request.url);
        const productId = url.pathname.split("/").pop();


        if (!productId || typeof productId !== "string") {
            return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
        }

        const updatedProduct = await updateProducts(body as Product, productId);
        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json(
            { error: "Failed to update product" },
            { status: 500 }
        );
    }
}
