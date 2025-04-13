"use client";
import React, { useRef, useState, useEffect } from 'react';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    handleSearch: (query: string) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, handleSearch }) => {
    const overlayRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Close the overlay when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !(overlayRef.current as any).contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleSubmit = () => {
        handleSearch(searchQuery);  // Call the handleSearch method passed from Header
        onClose();  // Close the overlay after submitting the search
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-opacity-50 flex justify-center items-center">
            <div ref={overlayRef} className="p-8 rounded-lg shadow-lg w-[400px]">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch(searchQuery);
                            onClose();
                        }
                    }}
                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                />

                <button
                    onClick={handleSubmit}
                    className="mt-4 w-full p-3 bg-blue-500 text-white rounded-md"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchOverlay;
