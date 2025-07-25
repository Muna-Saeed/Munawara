// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback
     */
    interface User {
        id: string;
        email: string;
        name?: string | null;
        image?: string | null;
        provider?: string | null;
        // Business-specific fields
        role?: string | null;
        company?: string | null;
        location?: string | null;
        phone?: string | null;
        title?: string | null;
        department?: string | null;
        bio?: string | null;
        industry?: string | null;
        createdAt?: string | null;
        socials?: {
            linkedin?: string | null;
            twitter?: string | null;
            github?: string | null;
        } | null;
        // Add any other custom fields your app uses
    }

    interface Message {
        _id: string;
        sender: [name: string, email: string];
        content: string;
        timestamp?: string;
        read?: boolean | null;
    }

    interface UserWithSession {
        id: string;
        email: string;
        name?: string | null;
        image?: string | null;
        provider?: string | null;
        // Business-specific fields
        role?: string | null;
        company?: string | null;
        location?: string | null;
        phone?: string | null;
        title?: string | null;
        department?: string | null;
        bio?: string | null;
        industry?: string | null;
        createdAt?: string | null;
        socials?: {
            linkedin?: string | null;
            twitter?: string | null;
            github?: string | null;
        } | null;
        session?: {
            isOnline?: boolean;
            lastActiveAt?: string;
            ipAddress?: string;
            userAgent?: string;
            location?: {
                city?: string;
                country?: string;
            };
        } | null;
    }

    /**
     * Returned by `useSession`, `getSession`, etc.
     */
    interface Session {
        user: {
            id: string;
            email: string;
            name?: string | null;
            image?: string | null;
            // Include all fields from User that should be in session
            role?: string | null;
            company?: string | null;
            location?: string | null;
            title?: string | null;
            createdAt?: string | null;
            industry?: string | null;
            phone?: string | null;
        } & DefaultSession["user"];
        expires: string;
        accessToken?: string;
        accessTokenExpires?: number;
        refreshToken?: string;
        id: string;
    }

    /**
     * The shape of the account object returned in the OAuth providers' `account` callback
     */
    interface Account {
        provider: string;
        type: string;
        id: string;
        accessToken?: string;
        accessTokenExpires?: number;
        refreshToken?: string;
        // Add any other provider-specific fields
    }

    /**
     * The shape of the profile object returned in the OAuth providers' `profile` callback
     */
    interface Profile {
        id?: string;
        name?: string;
        email?: string;
        image?: string;
        // Add any provider-specific profile fields
        [key: string]: unknown;
    };

    interface Service {
        id: string;
        name: string;
        description: string;
        status: 'pending' | 'in-progress' | 'completed';
        completedAt?: string;
        price?: number;
        requestedAt?: string;
        feedback?: {
            rating: number;
            comment: string;
        };
    }

    interface UserSessionType {
        _id?: ObjectId;
        userId: string;
        sessionId: string;
        loginTime: Date;
        logoutTime?: Date;
        lastActiveAt: Date;
        isOnline: boolean;
        ipAddress?: string;
        location?: {
            city?: string;
            country?: string;
            lat?: number;
            lon?: number;
        };
        userAgent?: string;
    }


    interface AvailableService {
        name: string;
        description: string;
        price: number;
        estimatedDelivery: string;
        category: string;
        imageUrl?: string;
        isActive?: boolean;
        createdAt?: string;

    }

    interface Product {
        _id?: string;
        name: string;
        description: string;
        price: number;
        category: string;
        imageUrl?: string;
        isActive: boolean;
        createdAt?: string;
        updatedAt?: string;
        createdBy?: string;
        updatedBy?: string;
    }



    interface ServiceRequest {
        serviceId: string;
        userId: string;
        details: string;
        status: 'pending' | 'in-progress' | 'completed';
        requestedAt: string;
    }

    declare module "next-auth/jwt" {
        /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
        interface JWT {
            /** OpenID ID Token */
            idToken?: string;
            // Include any custom fields you add to the JWT
            role?: string;
            company?: string;
            department?: string;
        }
    }
}
