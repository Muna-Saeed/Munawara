'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import { Product } from 'next-auth';
import LoadingSpinner from './LoadingSpinner';


const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [showForm, setShowForm] = useState<boolean>(false);

    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/available-services');
            const data: Product[] = await res.json();
            setProducts(data);
        } catch (err) {
            console.error('Failed to fetch products:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id?: string) => {
        if (!id) return;
        try {
            await fetch(`/api/service-requests/${id}`, { method: 'DELETE' });
            setProducts((prev) => prev.filter((p) => p._id !== id));
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    const handleSave = async (product: Product) => {
        try {
            const method = product._id ? 'PUT' : 'POST';
            const url = product._id
                ? `/api/products/${product._id}`
                : '/api/products';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });

            if (!res.ok) throw new Error('Failed to save');

            await fetchProducts();
        } catch (err) {
            console.error('Save failed:', err);
        } finally {
            setShowForm(false);
            setEditingProduct(null);
        }
    };

    if (loading) return <LoadingSpinner />

    return (
        <div className="space-y-6">
            {!editingProduct && (
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => {
                            setEditingProduct(null);
                            setShowForm(true);
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
                    >
                        Add Product
                    </button>
                </div>
            )}

            {showForm && (
                <ProductForm
                    product={editingProduct}
                    onCancel={() => {
                        setEditingProduct(null);
                        setShowForm(false);
                    }}
                    onSave={handleSave}
                />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        onEdit={() => {
                            setEditingProduct(product);
                            setShowForm(true);
                        }}
                        onDelete={() => handleDelete(product._id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
