// api/users/[id]/session/route.ts
import { NextResponse } from 'next/server';
import { updateUserSession } from '@/libs/dbManager';
import next from 'next';
import { stat } from 'fs';

export async function PATCH(req: Request) {
    try {
        const url = new URL(req.url);
        const pathSegments = url.pathname.split('/');
        // The user ID is the second-to-last segment in the path
        const userId = pathSegments[pathSegments.length - 2];

        if (!userId) {
            return NextResponse.json(
                { success: false, error: 'Missing or invalid user ID in URL' },
                { status: 400 }
            );
        }

        // This assumes your dbManager function finds the session by the user's ID
        const result = await updateUserSession(userId, {
            isOnline: false,
            lastActiveAt: new Date(),
        });


        if (result.matchedCount === 0) {
            return NextResponse.json(
                { success: false, error: 'Session not found for user' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to mark session offline:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}