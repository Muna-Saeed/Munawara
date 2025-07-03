// app/api/user/id/login-log/route.ts
import { NextResponse } from 'next/server';
import { UserSessionType } from 'next-auth';
import { UserSession } from '@/libs/dbManager';


export async function POST(req: Request) {
    console.log('Tracking user login...');
    try {
        const data = await req.json();
        console.log('Received data:', data);
        const session: UserSessionType = {
            ...data,
            loginTime: new Date(),
            lastActiveAt: new Date(),
            isOnline: true,
        };

        await UserSession(session);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to track login' }, { status: 500 });
    }
}
