import { updateUserSession } from '@/libs/dbManager';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { sessionId } = await req.json();

        if (!sessionId) {
            return NextResponse.json({ success: false, error: 'Missing sessionId' }, { status: 400 });
        }

        await updateUserSession(sessionId, {
            lastActiveAt: new Date(),
            isOnline: true,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to update session' }, { status: 500 });
    }
}
