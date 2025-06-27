import { getUsers } from "@/libs/dbManager";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await getUsers();

        // Replace _id with id for frontend compatibility
        const transformedUsers = users.map((user: any) => ({
            ...user,
            id: user._id,
        }));

        return NextResponse.json(transformedUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}
