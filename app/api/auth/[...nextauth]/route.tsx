import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDatabase from '@/lib/mongoose';
import User from '@/models/User';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connectToDatabase();

        const user = await (new User()).findOne({ email: credentials?.email });

        if (user && await user?.matchPassword(credentials?.password)) {
          return { id: user._id, email: user.email };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user && session.user) {
        //session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});

export { handler as GET, handler as POST };