'use server';

import connectToMongoDB from '@/lib/db';
import User from '@/models/Users';
import bcrypt from 'bcryptjs';

export async function loginUser(email: string, password: string) {
  await connectToMongoDB();
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  // TODO: Set session or JWT here
  return { success: true, userId: user._id };
}
