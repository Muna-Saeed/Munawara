'use client';

import React, { useState } from 'react';
import { Product } from 'next-auth';

interface Props {
    product: Product;
    onEdit: () => void;
    onDelete: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onEdit, onDelete }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDescription = (e: React.MouseEvent) => {
        e.stopPropagation();
        setExpanded(!expanded);
    };

    // Create a truncated description without cutting words
    const descriptionWords = product.description.split(' ');
    const shortDescription = descriptionWords.slice(0, 15).join(' ') + (descriptionWords.length > 15 ? '...' : '');

    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Header Section */}
            <div className="flex justify-between items-start gap-4 border-b pb-3">
                <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${product.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                        }`}
                >
                    {product.isActive ? 'Active' : 'Inactive'}
                </span>
            </div>

            {/* Body Section */}
            <div className="flex-grow my-4 space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                    {expanded ? product.description : shortDescription}
                    {descriptionWords.length > 15 && (
                        <button
                            onClick={toggleDescription}
                            className="ml-1 text-blue-600 hover:text-blue-800 font-semibold text-sm"
                        >
                            {expanded ? 'Show less' : 'Read more'}
                        </button>
                    )}
                </p>
                <div className="text-sm">
                    <span className="font-medium text-gray-500">Category: </span>
                    <span className="font-bold text-gray-800">{product.category}</span>
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t border-dashed">
                <div className="text-left">
                    <span className="text-2xl font-bold text-gray-900">${Number(product.price).toFixed(2)}</span>
                </div>
                <div className="flex justify-end items-center gap-3">
                    <button
                        onClick={onEdit}
                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 font-bold text-sm transition-colors"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 font-bold text-sm transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;