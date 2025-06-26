import { getUserHistory, getAvailbleService } from '@/libs/dbManager';
import { Service } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    console.log('Fetching user requests history for userId:', userId);

    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        const requests = await getUserHistory(userId);
        console.log('Fetched requests:', requests);
        const services = await getAvailbleService();
        console.log('Fetched services:', services);

        const serviceMap = new Map(services.map(service => [service.id, service]));

        const combined: Service[] = requests.map(req => {
            const matchedService = serviceMap.get(req.serviceId);

            return {
                id: req.serviceId,
                name: matchedService?.name || 'Unknown Service',
                description: matchedService?.description || '',
                status: req.status,
                requestedAt: req.requestedAt,
                price: matchedService?.basePrice,
                // completedAt and feedback can be added if available in req
            };
        });

        return NextResponse.json(combined);
    } catch (error) {
        console.error('Error fetching user requests history:', error);
        return NextResponse.json({ error: 'Failed to fetch user requests history' }, { status: 500 });
    }
}
