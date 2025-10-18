import bcrypt from 'bcryptjs';
import { Types } from 'mongoose';
import connectDB from '../lib/db';
import User from '@/models/Users'; 

export async function loginUser(email: string, password: string) {
  await connectDB();

  const normalizedEmail = String(email).toLowerCase().trim();
  console.log('[loginUser] trying email:', normalizedEmail);

  const user = await User.findOne({ email: normalizedEmail }).lean();
  if (!user) {
    console.log('[loginUser] user not found for', normalizedEmail);
    return null;
  }

  const valid = await bcrypt.compare(String(password), String((user as any).password));
  if (!valid) {
    console.log('[loginUser] invalid password for', normalizedEmail);
    return null;
  }

  const { password: _, ...safe } = user as any;
  console.log('[loginUser] success for', normalizedEmail);
  return safe;
}

export async function getUserById(id: string) {
  if (!Types.ObjectId.isValid(id)) return null;
  await connectDB();
  const user = await User.findById(id).lean();
  if (!user) return null;
  const { password: _, ...safe } = user as any;
  return safe;
}
