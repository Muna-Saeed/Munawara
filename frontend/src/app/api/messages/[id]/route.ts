import { updateMessage } from "@/libs/dbManager";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest): Promise<NextResponse> {
    try {
        const url = new URL(request.url);
        const pathParts = url.pathname.split("/");
        const messageId = pathParts[pathParts.length - 2];
        const messageIdObject = new ObjectId(messageId);
        if (!messageIdObject) {
            return NextResponse.json({ error: "Invalid message ID" }, { status: 400 });
        }
        const updatedMessage = await updateMessage(messageIdObject);

        if (!updatedMessage) {
            return NextResponse.json({ error: "Message not found or already read" }, { status: 404 });
        }

        return NextResponse.json(updatedMessage);
    } catch (error) {
        console.error("Error updating message:", error);
        return NextResponse.json({ error: "Failed to update message" }, { status: 500 });
    }
}