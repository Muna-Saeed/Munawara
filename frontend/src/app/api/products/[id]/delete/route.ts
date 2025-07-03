import { deleteProduct } from '@/libs/dbManager';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest): Promise<NextResponse> {
    try {
        const url = new URL(request.url);
        const pathParts = url.pathname.split("/");
        const productId = pathParts[pathParts.length - 2];


        if (!productId) {
            console.error("Invalid product ID:", productId);
            return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
        }

        const result = await deleteProduct(productId);

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Product deleted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error deleting product:", error);
        return NextResponse.json(
            { error: "Failed to delete product" },
            { status: 500 }
        );
    }
}