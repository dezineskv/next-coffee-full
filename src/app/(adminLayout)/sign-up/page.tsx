import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="first name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
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
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
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
