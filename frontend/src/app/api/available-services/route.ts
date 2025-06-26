import { getAvailbleService } from '@/libs/dbManager';

import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const services = await getAvailbleService();
        return NextResponse.json(services);
    } catch (error) {
        console.error('Error fetching available services:', error);
        return NextResponse.json({ error: 'Failed to fetch available services' }, { status: 500 });
    }
}
