'use client';

import { useEffect, useState } from 'react';
import { Product } from 'next-auth';

interface Props {
    product: Product | null;
    onCancel: () => void;
    onSave: (product: Product) => void;
}

type ProductFormData = Omit<Product, '_id' | 'id'>;

const defaultState: ProductFormData = {
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: '',
    isActive: true,
};

const ProductForm: React.FC<Props> = ({ product, onCancel, onSave }) => {

    const [form, setForm] = useState<ProductFormData>(() => {
        if (product) {
            const { _id, ...productData } = product;
            return { ...defaultState, ...productData, imageUrl: productData.imageUrl || '' };
        }
        return defaultState;
    });

    useEffect(() => {
        if (product) {
            const { _id, ...productData } = product;
            setForm({ ...defaultState, ...productData, imageUrl: productData.imageUrl || '' });
        } else {
            setForm(defaultState);
        }
    }, [product]);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;

        setForm(prevForm => ({
            ...prevForm,
            [name]:
                type === 'checkbox'
                    ? target.checked
                    : type === 'number'
                        ? parseFloat(value) || 0
                        : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...form,
            _id: product?._id,
        } as Product);
    };

    const labelClass = 'block text-sm font-medium text-gray-700 mb-1';
    const inputClass = 'block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-800';
    const sectionClass = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    const buttonBase = 'px-5 py-2.5 rounded-lg transition font-semibold text-sm shadow-sm';

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 space-y-8 max-w-3xl mx-auto"
        >
            <div className="border-b border-gray-200 pb-5">
                <h2 className="text-2xl font-bold leading-7 text-gray-900">
                    {product ? 'Edit Product' : 'Add New Product'}
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                    {product ? 'Update the details of the existing product.' : 'Fill out the form to add a new product to your catalog.'}
                </p>
            </div>

            <div className={sectionClass}>
                <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                    <label htmlFor="category" className={labelClass}>Category</label>
                    <input id="category" name="category" value={form.category} onChange={handleChange} className={inputClass} required />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="price" className={labelClass}>Price</label>
                    <input id="price" name="price" type="number" step="0.01" value={form.price} onChange={handleChange} className={inputClass} required />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="imageUrl" className={labelClass}>Image URL</label>
                    <input id="imageUrl" name="imageUrl" value={form.imageUrl || ''} onChange={handleChange} className={inputClass} />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="description" className={labelClass}>Description</label>
                    <textarea id="description" name="description" rows={4} value={form.description} onChange={handleChange} className={inputClass} required />
                </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <label htmlFor="isActive" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input id="isActive" name="isActive" type="checkbox" className="sr-only" checked={form.isActive} onChange={handleChange} />
                        <div className={`block w-14 h-8 rounded-full transition ${form.isActive ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${form.isActive ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                    <div className="ml-3 text-sm">
                        <span className="font-medium text-gray-700">Product is Active</span>
                        <p className="text-gray-500 text-xs">Inactive products will not be visible to customers.</p>
                    </div>
                </label>
            </div>

            <div className="flex justify-end gap-4 pt-6">
                <button type="button" onClick={onCancel} className={`${buttonBase} bg-white text-gray-800 border border-gray-300 hover:bg-gray-50`}>
                    Cancel
                </button>
                <button type="submit" className={`${buttonBase} bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}>
                    Save Product
                </button>
            </div>
        </form>
    );
};

export default ProductForm;