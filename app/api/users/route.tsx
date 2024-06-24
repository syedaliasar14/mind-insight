import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import User from '@/models/User';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const users = await (new User()).find({}).exec();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    if (!req.body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    const { name, email, password } = await req.json();
    const user = new User({ name, email, password });
    await user.save();
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

