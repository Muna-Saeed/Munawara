import { InsertProduct } from '@/libs/dbManager';
import { AvailableService } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body: AvailableService = await request.json();
        console.log('Received data:', body);
        // Insert the available products into the database AvailableService services will never be array
        if (!body || !body.name || !body.description) {
            return NextResponse.json({ error: 'Invalid services data' }, { status: 400 });
        }
        const result = await InsertProduct(body);

        return NextResponse.json({ success: true, data: result }, { status: 201 });
    } catch (error) {
        console.error('Error inserting available services:', error);
        return NextResponse.json({ error: 'Failed to create available services' }, { status: 500 });
    }
}
