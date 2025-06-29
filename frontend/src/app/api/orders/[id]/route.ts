import { updateOrder } from '@/libs/dbManager';

import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.json();
        const url = new URL(request.url);
        const orderId = url.pathname.split('/').pop();

        if (!orderId || typeof orderId !== 'string') {
            return NextResponse.json({ error: 'Invalid order ID' }, { status: 400 });
        }

        const updatedOrder = await updateOrder(orderId, body);
        return NextResponse.json(updatedOrder);
    } catch (error) {
        console.error('Error updating order:', error);
        return NextResponse.json(
            { error: 'Failed to update order' },
            { status: 500 }
        );
    }
}