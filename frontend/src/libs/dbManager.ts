// lib/dbManager.ts
import { AvailableService, Product } from 'next-auth'
import clientPromise from './mongodb'
import { ServiceRequest } from 'next-auth';
import { ObjectId } from 'mongodb';
import { UserSessionType } from 'next-auth';


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

export async function InsertProduct(services: AvailableService) {
    const client = await clientPromise
    const db = client.db("munawara")
    const collection = db.collection('availableServices')
    // Insert new services
    return await collection.insertOne(services)
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


export async function updateProducts(product: Product, productId: string) {
    const client = await clientPromise;
    const db = client.db("munawara");
    const collection = db.collection('availableServices');

    // Convert productId to ObjectId if necessary
    const id = new ObjectId(productId);

    const { _id, ...productWithoutId } = product;

    return await collection.updateOne(
        { _id: id },
        { $set: productWithoutId }
    );
}


export async function updateOrder(orderId: string, updates: Partial<ServiceRequest>) {
    const client = await clientPromise;
    const db = client.db("munawara");
    const collection = db.collection('serviceRequests');

    return await collection.updateOne(
        { _id: new ObjectId(orderId) },
        { $set: updates }
    );
}

export async function UserSession(userSession: UserSessionType) {
    const client = await clientPromise;
    const db = client.db("munawara");
    const collection = db.collection('userSessions');
    //chek if the user session already exists
    const existingSession = await collection.findOne({ userId: userSession.userId });
    //if exists, update it
    if (existingSession) {
        return await collection.updateOne(
            { userId: userSession.userId },
            { $set: userSession }
        );
    }

    return await collection.insertOne(userSession);
}

export async function updateUserSession(sessionId: string, updates: Partial<UserSessionType>) {
    const client = await clientPromise;
    const db = client.db("munawara");
    const collection = db.collection('userSessions');

    return await collection.updateOne(
        { sessionId },
        { $set: updates }
    );
}


export async function deleteProduct(productId: string) {
    //change id to objectId
    const objectId = new ObjectId(productId);
    const client = await clientPromise;
    const db = client.db("munawara");
    const collection = db.collection('availableServices');
    return await collection.deleteOne({ _id: objectId });
}


