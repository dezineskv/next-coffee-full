'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import toast from 'react-hot-toast';
import { Button } from '@/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { login, logout } = useAuth(); // single hook call

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({ success: false, message: 'Invalid response' }));

      if (!res.ok) {
        toast.error(data?.message || 'Login failed');
        return;
      }

      if (data.user) {
        toast.success(`Welcome back, ${data.user.name}`);
        login(data.user);
        router.push('/admin');
      } else {
        toast.error(data?.message || 'Login failed');
      }
    } catch (err) {
      toast.error('Network or server error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    logout();
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-200 text-center">
      <Card className="w-full max-w-sm">
        <Link href="/">
          <Image
            src="https://i.ibb.co/23GsvNz7/logo2.png"
            alt="Logo"
            width={300}
            height={180}
            className="mx-auto w-auto max-w-[250px] border-0 pb-4"
            priority={true}
          />
        </Link>
        <CardHeader>
          <CardTitle>Log in as admin</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {/* simplified login UI */}
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <Button onClick={handleLogin} disabled={loading} className="mt-6 w-full">
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            {error && <div className="text-sm text-red-500">{error}</div>}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="my-4">
            Need an admin account?&nbsp;
            <Link href="/register">Sign up here</Link>
          </div>
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
