import { getUsers, getUserSessions } from "@/libs/dbManager";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await getUsers();
        const userSessions = await getUserSessions();
        // Merge user sessions with users
        const usersWithSessions = users.map(user => {
            const session = userSessions.find(session => session.userId === user._id.toString());
            return {
                ...user,
                session: session ? { ...session, id: session._id } : null, // Include session if exists
            };
        })
        const transformedUsers = usersWithSessions.map((user: any) => ({
            ...user,
            id: user._id,
        }));

        return NextResponse.json(transformedUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}
