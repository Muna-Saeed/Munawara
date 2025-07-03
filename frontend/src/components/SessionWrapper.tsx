// components/SessionWrapper.tsx
'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';

/**
 * This internal component contains the actual logic.
 * It must be a child of SessionProvider to use the `useSession` hook.
 */
function SessionExitHandler() {
    const { data: session } = useSession();

    useEffect(() => {

        const userId = session?.user?.id;

        const handleBeforeUnload = () => {
            if (!userId) {
                return;
            }

            // Use fetch with `keepalive` to ensure the request is sent
            // even after the page has started to unload.
            fetch(`/api/users/${userId}/session/`, {
                method: 'PATCH',
                keepalive: true,
            });
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [session]);

    return null;
}

// This is the main export. It provides the session and includes the handler.
export default function SessionWrapper({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            {children}
            <SessionExitHandler /> {/* Handler is now a child of the provider */}
        </SessionProvider>
    );
}