// app/api/register/route.ts
import { insertUser } from '../../../libs/dbManager'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password } = body

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // insert user using dbManager abstraction
    const result = await insertUser({ name, email, password })

    return NextResponse.json(
      { message: 'User registered', userId: result.insertedId },
      { status: 201 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
