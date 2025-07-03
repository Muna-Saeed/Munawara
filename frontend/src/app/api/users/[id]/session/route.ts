import { NextResponse } from 'next/server';
import { updateUserSession } from '@/libs/dbManager';

export async function PATCH(req: Request) {
    try {
        const url = new URL(req.url);
        const segments = url.pathname.split('/');
        const sessionId = segments.pop();
        const userId = segments.pop();

        if (!userId || !sessionId) {
            return NextResponse.json(
                { success: false, error: 'Missing userId or sessionId' },
                { status: 400 }
            );
        }

        const result = await updateUserSession(sessionId, {
            isOnline: false,
            lastActiveAt: new Date(),
        });

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { success: false, error: 'Session not found' },
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
