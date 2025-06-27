// lib/dbManager.ts
import { AvailableService, Service } from 'next-auth'
import clientPromise from './mongodb'
import { ServiceRequest } from 'next-auth';
import { ObjectId } from 'mongodb';


export interface User {
    name: string
    email: string
    password?: string
    id?: string
    provider?: string | null
    image?: string | null
}

export async function insertUser(user: User) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('users')

    // Optional: check for duplicate emails here
    const existing = await collection.findOne({ email: user.email })
    if (existing) {
        throw new Error('Email already exists')
    }

    return await collection.insertOne(user)
}

export async function findUserByEmail(email: string) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('users')

    return await collection.findOne({ email })
}

export async function getAvailbleService(userId?: string) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('availableServices')

    return await collection.find({}).toArray()
}

export async function getUserHistory(userId: string) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('serviceRequests')

    return await collection.find({ userId }).toArray()
}

export async function insertServiceRequest(service: Omit<ServiceRequest, 'status' | 'requestedAt'>) {
    const client = await clientPromise;
    const db = client.db('munawara');
    const collection = db.collection('serviceRequests');

    const requestWithDefaults: ServiceRequest = {
        ...service,
        status: 'pending',
        requestedAt: new Date().toISOString()
    };

    return await collection.insertOne(requestWithDefaults);
}

export async function InseravailableServices(services: AvailableService[]) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('availableServices')

    // Clear existing services before inserting new ones
    await collection.deleteMany({})

    // Insert new services
    return await collection.insertMany(services)
}

export async function getUsers() {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('users')

    return await collection.find({}).toArray()
}

export async function getMessages() {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('messages')

    return await collection.find({}).toArray()
}


export async function getOrders() {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('serviceRequests')

    return await collection.find({}).toArray()
}

export async function updateOrderStatus(orderId: string, status: string) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('serviceRequests')

    return await collection.updateOne(
        { _id: new ObjectId(orderId) },
        { $set: { status } }
    )
}

export async function insertMessage(message: {
    sender: [name: string, email: string],
    content: string,
    timestamp?: string
}) {
    const client = await clientPromise;
    const db = client.db("munawara");
    const collection = db.collection('messages');

    const messageWithTimestamp = {
        ...message,
        timestamp: message.timestamp ?? new Date().toISOString()
    };

    return await collection.insertOne(messageWithTimestamp);
}

export async function updateUser(id: ObjectId, updatedFields: Partial<User>) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('users')

    return await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedFields }
    )
}


export async function deleteUser(userId: ObjectId) {
    const client = await clientPromise;
    const db = client.db("munawara");
    const collection = db.collection('users');

    // Execute deleteOne with the userId filter
    return await collection.deleteOne({ _id: userId });
}