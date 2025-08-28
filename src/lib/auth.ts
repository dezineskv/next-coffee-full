import connectDB from '@/lib/db';
import User from '@/models/Users';
import type { NextAuthOptions } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import bcrypt, { compare } from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email });
        if (!user) return null;

        const isValid = await compare(credentials!.password, user.password);
        if (!isValid) return null;

        // ✅ Here's where your return goes
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },
};
function CredentialsProvider(arg0: {
  name: string;
  credentials: {
    email: { label: string; type: string };
    password: { label: string; type: string };
  };
  authorize(credentials: any): Promise<{ id: string; email: string; name: string } | null>;
}): import('next-auth/providers/index').Provider {
  throw new Error('Function not implemented.');
}
