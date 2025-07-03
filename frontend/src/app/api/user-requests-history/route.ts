import { getUserHistory, getAvailbleService } from '@/libs/dbManager';
import { Service } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        const requests = await getUserHistory(userId);
        const services = await getAvailbleService();

        // ✅ FIX 1: Convert the service's '_id' (which is an ObjectId) to a string for the map key.
        const serviceMap = new Map(services.map(service => [service._id.toString(), service]));

        const combined: Service[] = requests.map(req => {
            // Now this lookup will work correctly because both keys are strings.
            const matchedService = serviceMap.get(req.serviceId);

            return {
                // ✅ FIX 2: Corrected typo from req._d to req._id and converted to string.
                id: req._id.toString(),
                name: matchedService?.name || 'Unknown Service',
                description: matchedService?.description || '',
                status: req.status,
                requestedAt: req.requestedAt,
                // ✅ FIX 3: Corrected property from basePrice to price.
                price: matchedService?.price,
            };
        });

        return NextResponse.json(combined);
    } catch (error) {
        console.error('Error fetching user requests history:', error);
        return NextResponse.json({ error: 'Failed to fetch user requests history' }, { status: 500 });
    }
}