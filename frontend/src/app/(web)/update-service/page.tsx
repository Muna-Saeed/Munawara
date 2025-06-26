'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { AvailableService } from 'next-auth';



const defaultService: AvailableService = {
    id: '',
    name: '',
    description: '',
    basePrice: 0,
    estimatedDelivery: '',
    category: 'web',
};

export default function UpdateServicePage() {
    const { data: session } = useSession();
    const [current, setCurrent] = useState<AvailableService>({ ...defaultService });
    const [services, setServices] = useState<AvailableService[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAddService = () => {
        if (!current.id.trim()) return alert('Service ID is required');
        if (!current.name.trim()) return alert('Service Name is required');
        setServices((prev) => [...prev, current]);
        setCurrent({ ...defaultService });
    };

    const handleChange = (field: keyof AvailableService, value: string | number) => {
        setCurrent((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/update-service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${session?.accessToken}`,
                },
                body: JSON.stringify({ services }),
            });

            if (!res.ok) throw new Error('Failed to submit services');
            alert('Services updated successfully!');
            setServices([]);
        } catch (err) {
            console.error('Submission error:', err);
            alert(err instanceof Error ? err.message : 'Failed to update services');
        } finally {
            setIsSubmitting(false);
        }
    };

    const removeService = (index: number) => {
        setServices(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
                        <h1 className="text-2xl font-bold text-white">Service Management</h1>
                        <p className="text-blue-100 mt-1">Add or update available services</p>
                    </div>

                    {/* Form Section */}
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-1">
                                <label htmlFor="service-id" className="block text-sm font-medium text-gray-700">
                                    Service ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="service-id"
                                    type="text"
                                    placeholder="e.g., web-dev-01"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    value={current.id}
                                    onChange={(e) => handleChange('id', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="service-name" className="block text-sm font-medium text-gray-700">
                                    Service Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="service-name"
                                    type="text"
                                    placeholder="e.g., Website Development"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    value={current.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2 space-y-1">
                                <label htmlFor="service-desc" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    id="service-desc"
                                    rows={3}
                                    placeholder="Detailed service description..."
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    value={current.description}
                                    onChange={(e) => handleChange('description', e.target.value)}
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="service-price" className="block text-sm font-medium text-gray-700">
                                    Base Price ($)
                                </label>
                                <input
                                    id="service-price"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="0.00"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    value={current.basePrice}
                                    onChange={(e) => handleChange('basePrice', parseFloat(e.target.value) || 0)}
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="service-delivery" className="block text-sm font-medium text-gray-700">
                                    Estimated Delivery
                                </label>
                                <input
                                    id="service-delivery"
                                    type="text"
                                    placeholder="e.g., 2 weeks"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    value={current.estimatedDelivery}
                                    onChange={(e) => handleChange('estimatedDelivery', e.target.value)}
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="service-category" className="block text-sm font-medium text-gray-700">
                                    Category
                                </label>
                                <select
                                    id="service-category"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                                    value={current.category}
                                    onChange={(e) => handleChange('category', e.target.value as AvailableService['category'])}
                                >
                                    <option value="web">Website Development</option>
                                    <option value="ai">AI Solutions</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="content">Content Creation</option>
                                    <option value="mobile">Mobile App</option>
                                    <option value="marketing">Digital Marketing</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={handleAddService}
                                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Add Service
                            </button>
                        </div>
                    </div>

                    {/* Services List Section */}
                    {services.length > 0 && (
                        <div className="border-t border-gray-200 px-6 py-4">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-medium text-gray-900">Services to be Updated</h2>
                                <span className="text-sm text-gray-500">{services.length} service(s)</span>
                            </div>

                            <ul className="divide-y divide-gray-200">
                                {services.map((service, index) => (
                                    <li key={index} className="py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {service.name} <span className="text-gray-500 ml-2">({service.id})</span>
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                                                <div className="flex items-center mt-2 space-x-4">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        {service.category}
                                                    </span>
                                                    <span className="text-sm text-gray-500">${service.basePrice.toFixed(2)}</span>
                                                    {service.estimatedDelivery && (
                                                        <span className="text-sm text-gray-500">Delivery: {service.estimatedDelivery}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeService(index)}
                                                className="ml-4 text-red-600 hover:text-red-900"
                                                title="Remove service"
                                            >
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit All Services'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}