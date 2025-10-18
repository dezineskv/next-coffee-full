import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { getUserById } from '@/actions/users';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('auth')?.value;
    console.log('[auth/me] token present:', !!token);
    if (!token) return NextResponse.json({ user: null }, { status: 401 });

    let payload: any;
    try {
      payload = jwt.verify(token, JWT_SECRET) as any;
      console.log('[auth/me] payload:', payload);
    } catch (verifyErr) {
      console.error('[auth/me] token verify error:', verifyErr);
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const user = await getUserById(String(payload.sub));
    if (!user) {
      console.log('[auth/me] user not found for id:', payload.sub);
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({ user: { id: user._id ?? user.id, name: user.name } });
  } catch (err) {
    console.error('[auth/me] error:', err);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
