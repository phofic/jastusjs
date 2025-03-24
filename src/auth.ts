import NextAuth from "next-auth";
import authConfig from "./auth.config";
import prisma from "@/app/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Add user ID to the token
      }
      return token;
    },
    async session({ token, session }) {
      if (session.user && token.sub) {
        session.user.id = token.sub; // Add user ID to the session
      }
      return session;
    },
  },
  ...authConfig,
});
