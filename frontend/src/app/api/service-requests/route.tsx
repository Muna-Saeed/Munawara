import { insertServiceRequest } from '@/libs/dbManager';
import { NextResponse } from 'next/server';
import { ServiceRequest } from 'next-auth';



export async function POST(request: Request) {
    try {
        const serviceRequest: ServiceRequest = await request.json();

        // Validate the serviceRequest object
        if (!serviceRequest || !serviceRequest.serviceId || !serviceRequest.userId) {
            return NextResponse.json({ error: 'Invalid service request data' }, { status: 400 });
        }

        // Insert the service request into the database
        const result = await insertServiceRequest(serviceRequest);

        return NextResponse.json({ success: true, data: result }, { status: 201 });
    } catch (error) {
        console.error('Error inserting service request:', error);
        return NextResponse.json({ error: 'Failed to create service request' }, { status: 500 });
    }
}