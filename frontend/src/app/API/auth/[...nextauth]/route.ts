import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { authOptions } from "@/libs/auth";
import { NextRequest } from "next/server";

// Create handlers for GET and POST
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
