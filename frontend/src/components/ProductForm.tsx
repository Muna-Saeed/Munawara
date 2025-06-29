import { useEffect, useState } from 'react';
import { Product } from 'next-auth';

interface Props {
    product: Product | null;
    onCancel: () => void;
    onSave: (product: Product) => void;
}

const ProductForm: React.FC<Props> = ({ product, onCancel, onSave }) => {
    const [form, setForm] = useState<Product>({
        name: '',
        description: '',
        price: 0,
        category: '',
        stock: 0,
        imageUrl: '',
        isActive: true,
    });

    useEffect(() => {
        if (product) setForm(product);
    }, [product]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;
        setForm({
            ...form,
            [name]:
                type === 'checkbox'
                    ? target.checked
                    : type === 'number'
                        ? parseFloat(value)
                        : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(form);
    };

    // Tailwind utility class constants
    const labelClass = 'block text-sm font-semibold text-black mb-1';
    const inputClass =
        'w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-700';
    const sectionClass = 'grid grid-cols-1 md:grid-cols-2 gap-4';
    const buttonBase = 'px-4 py-2 rounded-md transition font-medium';

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-300 p-8 rounded-2xl shadow-lg space-y-6 max-w-3xl mx-auto font-sans"
        >
            <h2 className="text-3xl font-bold text-black">
                {product ? 'Edit Product' : 'Add Product'}
            </h2>

            <div className={sectionClass}>
                <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="category" className={labelClass}>Category</label>
                    <input
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price" className={labelClass}>Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        value={form.price}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="stock" className={labelClass}>Stock</label>
                    <input
                        id="stock"
                        name="stock"
                        type="number"
                        value={form.stock}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="imageUrl" className={labelClass}>Image URL</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="description" className={labelClass}>Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={3}
                        value={form.description}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <input
                    id="isActive"
                    name="isActive"
                    type="checkbox"
                    checked={form.isActive}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-black">Active</label>
            </div>

            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className={`${buttonBase} bg-gray-200 text-black hover:bg-gray-300`}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className={`${buttonBase} bg-green-600 text-white hover:bg-green-700`}
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
