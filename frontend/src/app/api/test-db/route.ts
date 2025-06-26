// src/app/api/test-db/route.ts
import clientPromise from '../../../libs/mongodb'

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db() // default DB
        const collections = await db.listCollections().toArray()
        return Response.json({ collections })
    } catch (error) {
        console.error('MongoDB connection test failed:', error)
        return new Response('Internal Server Error', { status: 500 })
    }
}
