import { ObjectId } from 'mongodb';
import { deleteUser, updateUser } from '@/libs/dbManager';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function PUT(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.json();
        const url = new URL(request.url);
        const userId = url.pathname.split('/').pop();

        if (!userId || !ObjectId.isValid(userId)) {
            return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
        }

        const updatedUser = await updateUser(new ObjectId(userId), body);
        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json(
            { error: "Failed to update user" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
    try {
        const url = new URL(request.url);
        const id = url.pathname.split('/').pop();

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
        }

        const result = await deleteUser(new ObjectId(id));

        if (!result || (result as any).deletedCount === 0) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}
