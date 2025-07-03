import { getAvailbleService } from '@/libs/dbManager';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const services = await getAvailbleService();

        const normalized = services.map((service: any) => ({
            _id: service._id?.toString(),
            name: service.name,
            description: service.description,
            price: service.price,
            category: service.category,
            imageUrl: service.imageUrl ?? '',
            id: service.id ? service.id.toString() : "",
            isActive: service.isActive ?? true,
            createdAt: service.createdAt,
            updatedAt: service.updatedAt,
            createdBy: service.createdBy,
            updatedBy: service.updatedBy,
        }));

        return NextResponse.json(normalized);
    } catch (error) {
        console.error('Error fetching available services:', error);
        return NextResponse.json(
            { error: 'Failed to fetch available services' },
            { status: 500 }
        );
    }
}
