'use client';

import { AvailableService } from 'next-auth';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

interface NewServiceRequestProps {
    services: AvailableService[];
    loading: boolean;
    onRefresh: () => void;
}

const NewServiceRequest = ({ services, loading, onRefresh }: NewServiceRequestProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [requestDetails, setRequestDetails] = useState('');

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/api/auth/signin');
        }
    }, [status, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedService || !session?.user?.id) return;

        try {
            const response = await fetch('/api/service-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: session.user.id,
                    serviceId: selectedService,
                    details: requestDetails,
                }),
            });

            if (response.ok) {
                alert('Service request submitted successfully!');
                setSelectedService(null);
                setRequestDetails('');
            }
        } catch (error) {
            console.error('Error submitting request:', error);
        }
    };

    if (status === 'loading' || loading) return <LoadingSpinner />;

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Request a New Service</h2>
                <button
                    onClick={onRefresh}
                    disabled={loading}
                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Refreshing...' : 'Refresh Services'}
                </button>
            </div>

            {services.length === 0 ? (
                <div className="text-center py-12 text-gray-700">
                    <p className="text-base font-medium">No services currently available</p>
                    <p className="text-sm mt-2">Please check back later or contact support</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => setSelectedService(service.id)}
                                className={`p-4 border rounded-lg cursor-pointer transition text-gray-800
                  ${selectedService === service.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'hover:border-gray-400'
                                    }`}
                            >
                                <h3 className="font-semibold">{service.name}</h3>
                                <p className="text-sm mt-1 text-gray-700 line-clamp-3">{service.description}</p>
                                <div className="mt-3 flex justify-between text-sm text-gray-600">
                                    <span className="font-medium">From ${service.basePrice}</span>
                                    <span>{service.estimatedDelivery}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedService && (
                        <div>
                            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                                Project Details
                            </label>
                            <textarea
                                id="details"
                                rows={4}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                placeholder="Describe your project requirements..."
                                value={requestDetails}
                                onChange={(e) => setRequestDetails(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={!selectedService}
                            className={`px-6 py-3 rounded-md text-white transition 
                ${selectedService
                                    ? 'bg-blue-600 hover:bg-blue-700'
                                    : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default NewServiceRequest;
