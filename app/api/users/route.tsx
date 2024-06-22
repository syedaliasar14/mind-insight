import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

// GET request handler
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('mind_insight');
    const users = await db.collection('user').find({}).toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}

// POST request handler
export async function POST(req: NextRequest) {
  try {
    const newUser = await req.json();
    const client = await clientPromise;
    const db = client.db('mind_insight'); // Use your database name here
    await db.collection('user').insertOne(newUser);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error adding user' }, { status: 500 });
  }
}

