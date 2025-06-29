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

    const toggleDescription = () => setExpanded(!expanded);

    const shortDescription = product.description.split('. ')[0] + (product.description.endsWith('.') ? '' : '.');

    return (
        <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition max-w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${product.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                >
                    {product.isActive ? 'Active' : 'Inactive'}
                </span>
            </div>

            <div className="mt-3 text-sm text-gray-700">
                {expanded ? product.description : shortDescription}
                {product.description.length > shortDescription.length && (
                    <button
                        onClick={toggleDescription}
                        className="ml-1 text-blue-600 hover:underline text-sm"
                    >
                        {expanded ? 'Show less' : 'Read more'}
                    </button>
                )}
            </div>

            <div className="mt-3 text-sm text-gray-800 font-medium">
                Price: <span className="text-green-700 font-semibold">${Number(product.price).toFixed(2)}</span>
            </div>

            <div className="mt-1 text-sm text-gray-700">
                Category: <span className="font-medium text-gray-900">{product.category}</span>
            </div>

            {typeof product.stock === 'number' && (
                <div className="mt-1 text-sm text-gray-700">
                    Stock: <span className="font-medium text-gray-900">{product.stock}</span>
                </div>
            )}

            <div className="flex justify-end gap-4 mt-4">
                <button
                    onClick={onEdit}
                    className="text-blue-600 hover:underline font-medium text-sm"
                >
                    Edit
                </button>
                <button
                    onClick={onDelete}
                    className="text-red-600 hover:underline font-medium text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
