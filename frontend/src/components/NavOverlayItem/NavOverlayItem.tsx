'use client';
import { useEffect, useRef, useState } from 'react';

interface NavOverlayItemProps {
    label: string;
    children: React.ReactNode;
    mobile?: boolean;
}

const NavOverlayItem: React.FC<NavOverlayItemProps> = ({ label, children, mobile = false }) => {
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setShow(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setShow(!show)}
                className={`font-medium hover:text-primary focus:outline-none ${mobile ? 'w-full text-left py-2 px-4 hover:bg-accent' : ''
                    }`}
                aria-expanded={show}
                aria-haspopup="true"
            >
                {label}
            </button>
            {show && (
                <div className={`
                    absolute ${mobile ? 'static' : 'top-full mt-2'} 
                    shadow-md p-4 rounded z-50 w-64
                    ${mobile ? 'w-full bg-background' : 'bg-popover'}
                `}>
                    {children}
                    {!mobile && (
                        <button
                            onClick={() => setShow(false)}
                            className="mt-3 text-sm text-primary underline hover:text-primary/80"
                        >
                            Close
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default NavOverlayItem;