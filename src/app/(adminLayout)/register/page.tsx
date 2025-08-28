'use client';
import { FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { register } from '@/actions/register';
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

export default function Signup() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await register({
      email: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name'),
    });
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      return router.push('/login');
    }
  };
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center bg-slate-200 text-center">
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
          <CardTitle>Sign Up for an account</CardTitle>
          <CardDescription>Enter email below to login</CardDescription>
          {/* <CardAction>
                <Button variant="link">Sign Up</Button>
                </CardAction> */}
        </CardHeader>
        <CardContent>
          <form
            ref={ref}
            action={handleSubmit}
            className="flex w-full max-w-[400px] flex-col items-center justify-between gap-2 rounded border border-solid border-black bg-white p-6"
          >
            {error && <div className="">{error}</div>}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="h-8 w-full rounded border border-solid border-black px-2.5 py-1 text-[13px]"
                  name="name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-8 w-full rounded border border-solid border-black px-2.5 py-1"
                  name="email"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-8 w-full rounded border border-solid border-black px-2.5 py-1"
                    name="password"
                  />
                </div>
              </div>
              <Button className="w-full">Sign Up</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="mt-5">
            Already have an account?
            <br />
            <Link href="/login">Login</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
