import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import authConfig from "@/../config/auth";

const prisma = new PrismaClient();

const providers = [];

if (authConfig.google.enabled) {
  providers.push(
    GoogleProvider({
      clientId: authConfig.google.clientId,
      clientSecret: authConfig.google.clientSecret,
    })
  );
}

if (authConfig.email.enabled) {
  providers.push(
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    })
  );
}

// Add magic link provider setup here if you implement it

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers,
  session: {
    strategy: "jwt",
  },
  pages: {},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
