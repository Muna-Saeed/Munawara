// lib/mongodb.ts
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI as string

if (!uri) {
    throw new Error(' Please define MONGODB_URI in .env.local')
}

const options = {
    tls: true,
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri, options)
            ; (global as any)._mongoClientPromise = client.connect()
    }
    clientPromise = (global as any)._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

export default clientPromise
