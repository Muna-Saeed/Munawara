import { InseravailableServices } from '@/libs/dbManager';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Extract the actual services array
        const services = body.services;

        console.log('Received services:', services);

        // Validate the services array
        if (!Array.isArray(services) || services.length === 0) {
            return NextResponse.json({ error: 'Invalid services data' }, { status: 400 });
        }

        // Insert the available services into the database
        const result = await InseravailableServices(services);

        return NextResponse.json({ success: true, data: result }, { status: 201 });
    } catch (error) {
        console.error('Error inserting available services:', error);
        return NextResponse.json({ error: 'Failed to create available services' }, { status: 500 });
    }
}
