// lib/dbManager.ts
import clientPromise from './mongodb'

export interface User {
    name: string
    email: string
    password: string
    id?: string
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
