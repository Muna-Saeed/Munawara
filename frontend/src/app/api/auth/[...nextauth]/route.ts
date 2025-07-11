import NextAuth from "next-auth";
import { authOptions } from "@/libs/auth";

// Create handlers for GET and POST
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
