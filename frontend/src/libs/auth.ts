// libs/auth.ts
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { findUserByEmail, insertUser } from "../libs/dbManager";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await findUserByEmail(credentials.email);
                if (!user) return null;

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) return null;

                // Convert MongoDB _id to string id
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role || null,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account }) {
            // Only run for OAuth providers
            if (account?.provider !== "credentials") {
                const existingUser = await findUserByEmail(user.email!);
                if (!existingUser) {
                    // Register new user
                    await insertUser({
                        name: user.name || "",
                        email: user.email!,
                        image: user.image || "",
                        provider: account?.provider,
                    });
                }
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.role = user.role || null;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.role = token.role || null;
            }
            return session;
        },
    },
};
