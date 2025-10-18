import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';
import { loginUser } from '@/actions/users';

const JWT_SECRET = process.env.JWT_SECRET!;
const MAX_AGE = 60 * 60 * 24; // 1 day

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('[auth/login] body:', body);
    const { email, password } = body;

    if (!email || !password) {
      console.log('[auth/login] missing credentials');
      return NextResponse.json({ success: false, message: 'Missing credentials' }, { status: 400 });
    }

    const user = await loginUser(email, password);
    console.log('[auth/login] found user:', !!user, user?.email);

    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ sub: user._id ?? user.id, name: user.name }, JWT_SECRET, {
      expiresIn: MAX_AGE,
    });

    const cookie = serialize('auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: MAX_AGE,
    });

    const res = NextResponse.json({
      success: true,
      user: { id: user._id ?? user.id, name: user.name },
    });
    res.headers.set('Set-Cookie', cookie);
    console.log('[auth/login] login success, cookie set');
    return res;
  } catch (err) {
    console.error('[auth/login] error:', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
