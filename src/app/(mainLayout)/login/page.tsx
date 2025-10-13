'use client';
import { useState } from 'react';
import { loginUser } from '@/actions/users';
import { useRouter } from 'next/navigation';
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
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import Cookies from 'js-cookie';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    // login logic

    const userData = { id: '123', name: 'Admin' };
    login(userData);

    Cookies.set('auth', '123', { expires: 1 }); // expires in 1 day
    // saves user to localStorage
    return router.push('/admin/dashboard'); // Redirect to protected page
  };

  // const handleLogin = async () => {
  //   try {
  //     const result = await loginUser(email, password);
  //     console.log('Logged in:', result);
  //     // Redirect or set cookie
  //     return router.push('/admin');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter email below to login</CardDescription>
          {/* <CardAction>
                <Button variant="link">Sign Up</Button>
                </CardAction> */}
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                        Forgot your password?
                        </a> */}
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="mt-5">
            Need an account?
            <br />
            {/* <Link href="/register">Sign up here</Link> */}
          </div>
          {/* <Button variant="outline" className="w-full">
                Login with Google
                </Button> */}
          {/* Cookies.remove('auth'); on logout */}
        </CardFooter>
      </Card>
    </div>
  );
}
