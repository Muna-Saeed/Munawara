import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
                <p className="text-lg font-medium text-gray-700">Loading Munawara...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
