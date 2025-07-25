'use client';

import { useEffect, useState } from 'react';

// IMPORTANT: As per our discussion, if your Product interface is truly defined
// within a next-auth module augmentation, ensure that definition
// includes 'isActive: boolean;' (not optional 'isActive?: boolean;').
// Otherwise, the recommended approach is to define this interface in your
// own 'types/Product.ts' file and import it from there.
interface Product {
    _id?: string;
    id?: string; // Add id if used elsewhere
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
    isActive: boolean; // Confirmed as boolean, not optional
}

interface Props {
    product: Product | null;
    onCancel: () => void;
    onSave: (product: Product) => void;
}

type ProductFormData = Omit<Product, '_id' | 'id'>;

// Predefined data for each plan
const planData = {
    Starter: {
        description: "For new businesses getting online.\n- 1-Page Website\n- Basic SEO Tools\n- Standard Support",
        price: 9,
    },
    Growth: {
        description: "For businesses ready to scale.\n- Multi-Page Site\n- Analytics Dashboard\n- AI Automation Tools",
        price: 19,
    },
    Pro: {
        description: "For established e-commerce.\n- Full E-commerce Suite\n- AI Chatbot & CRM\n- Custom Branding",
        price: 29,
    },
    Custom: {
        description: "",
        price: 0,
    }
};

const defaultState: ProductFormData = {
    name: 'Custom', // Default to custom so fields are editable initially
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
            // Determine if the loaded product matches a predefined plan
            const isPredefined = Object.keys(planData).includes(productData.name);
            if (isPredefined && productData.name !== 'Custom') {
                return {
                    ...defaultState,
                    ...productData,
                    imageUrl: productData.imageUrl || '',
                    // Ensure description and price from product match predefined, or use Custom if they don't exactly match
                    ...((productData.description === planData[productData.name as keyof typeof planData].description &&
                        productData.price === planData[productData.name as keyof typeof planData].price) ? {} : { name: 'Custom' })
                };
            }
            // If product name is Custom or doesn't match predefined, treat as Custom
            return { ...defaultState, ...productData, name: 'Custom', imageUrl: productData.imageUrl || '' };
        }
        return defaultState;
    });

    // Effect to update form state when 'product' prop changes (e.g., for editing)
    useEffect(() => {
        if (product) {
            const { _id, ...productData } = product;
            const isPredefined = Object.keys(planData).includes(productData.name);

            setForm(prevForm => {
                let newState = { ...defaultState, ...productData, imageUrl: productData.imageUrl || '' };

                // If it's an existing predefined product, set the name correctly
                // Otherwise, set to Custom if the name isn't recognized as a plan
                if (isPredefined && productData.name !== 'Custom') {
                    // Check if existing product's description/price deviates from the plan's defaults
                    if (productData.description !== planData[productData.name as keyof typeof planData].description ||
                        productData.price !== planData[productData.name as keyof typeof planData].price) {
                        newState.name = 'Custom'; // If it deviates, consider it a custom product
                    }
                } else {
                    newState.name = 'Custom';
                }
                return newState;
            });
        } else {
            setForm(defaultState); // Reset to default when adding a new product
        }
    }, [product]);

    // Effect to autofill description and price based on 'name' selection
    useEffect(() => {
        if (form.name in planData && form.name !== 'Custom') {
            const selectedPlan = planData[form.name as keyof typeof planData];
            setForm(prevForm => ({
                ...prevForm,
                description: selectedPlan.description,
                price: selectedPlan.price,
            }));
        }
        // No else needed, as 'Custom' will be handled by enabling inputs,
        // and manual changes will persist for 'Custom'.
    }, [form.name]);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        const { name, value, type } = target;

        if (name === "name" && value !== "Custom" && value in planData) {
            // When a predefined plan is selected, autofill description and price
            const selectedPlan = planData[value as keyof typeof planData];
            setForm(prevForm => ({
                ...prevForm,
                name: value,
                description: selectedPlan.description,
                price: selectedPlan.price,
            }));
        } else if (name === "name" && value === "Custom") {
            // When 'Custom' is selected, allow manual input by not autofilling
            setForm(prevForm => ({
                ...prevForm,
                name: value,
                description: '', // Clear for custom input
                price: 0,        // Clear for custom input
            }));
        } else {
            // For other fields or manual input when 'Custom' is selected
            setForm(prevForm => ({
                ...prevForm,
                [name]:
                    type === 'checkbox'
                        ? (target as HTMLInputElement).checked
                        : type === 'number'
                            ? parseFloat(value) || 0
                            : value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...form,
            _id: product?._id, // Pass existing _id if editing
        } as Product);
    };

    const isCustomPlan = form.name === 'Custom';

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
                    {product ? 'Edit Product/Service' : 'Add New Product/Service'}
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                    {product ? 'Update the details of the existing product or service.' : 'Fill out the form to add a new product or service.'}
                </p>
            </div>

            <div className={sectionClass}>
                <div>
                    <label htmlFor="name" className={labelClass}>Plan/Service Type</label>
                    <select
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    >
                        <option value="Starter">Starter</option>
                        <option value="Growth">Growth</option>
                        <option value="Pro">Pro</option>
                        <option value="Custom">Custom</option>
                    </select>
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
                <div className="md:col-span-2">
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
                        disabled={!isCustomPlan} // Disabled if not custom plan
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="imageUrl" className={labelClass}>Image URL (Optional)</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        value={form.imageUrl || ''}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="description" className={labelClass}>Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={form.description}
                        onChange={handleChange}
                        className={inputClass}
                        required
                        disabled={!isCustomPlan} // Disabled if not custom plan
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <label htmlFor="isActive" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input
                            id="isActive"
                            name="isActive"
                            type="checkbox"
                            className="sr-only"
                            checked={form.isActive}
                            onChange={handleChange}
                        />
                        <div className={`block w-14 h-8 rounded-full transition ${form.isActive ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${form.isActive ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                    <div className="ml-3 text-sm">
                        <span className="font-medium text-gray-700">Product/Service is Active</span>
                        <p className="text-gray-500 text-xs">Inactive products/services will not be visible to customers.</p>
                    </div>
                </label>
            </div>

            <div className="flex justify-end gap-4 pt-6">
                <button type="button" onClick={onCancel} className={`${buttonBase} bg-white text-gray-800 border border-gray-300 hover:bg-gray-50`}>
                    Cancel
                </button>
                <button type="submit" className={`${buttonBase} bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}>
                    Save Product/Service
                </button>
            </div>
        </form>
    );
};

export default ProductForm;