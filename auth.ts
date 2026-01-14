import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserById } from "./modules/auth/actions";

export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/sign-in",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) return false;

      const existingUser = await db.user.findUnique({
        where: { email: user.email! },
        include: { accounts: true },
      });

      // If no user exists, create one (same as before)
      if (!existingUser) {
        await db.user.create({
          data: {
            email: user.email!,
            name: user.name,
            image: user.image,
          },
        });
        return true;
      }

      // If the user exists but there's no linked account for this provider,
      // create/link the account so NextAuth won't throw OAuthAccountNotLinked.
      const providerId = account.provider;
      const providerAccountId = String(account.providerAccountId ?? "");

      const existingAccount = await db.account.findFirst({
        where: {
          provider: providerId,
          providerAccountId: providerAccountId,
        },
      });

      if (!existingAccount) {
        await db.account.create({
          data: {
            userId: existingUser.id,
            type: account.type,
            provider: providerId,
            providerAccountId: providerAccountId,
            accessToken: account.access_token as string | null,
            refreshToken: account.refresh_token as string | null,
            expiresAt: typeof account.expires_at === 'number' ? account.expires_at : account.expires_at ? Number(account.expires_at) : null,
            tokenType: account.token_type as string | null,
            scope: account.scope as string | null,
            idToken: account.id_token as string | null,
            sessionState: account.session_state as string | null,
          },
        });
      }

      return true;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      return token;
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
