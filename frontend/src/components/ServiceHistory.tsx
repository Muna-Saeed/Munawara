"use client";

import { useState } from 'react';
import { Service } from 'next-auth';

interface ServiceHistoryProps {
    services: Service[];
    loading: boolean;
    onRefresh: () => void;
}

const MAX_DESCRIPTION_LENGTH = 120;

const ServiceHistory = ({ services, loading, onRefresh }: ServiceHistoryProps) => {
    const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

    const toggleDescription = (id: string) => {
        setExpandedServiceId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-serif font-semibold text-gray-800">Previous requests</h2>
                <button
                    onClick={onRefresh}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-500 rounded-md hover:bg-gray-200 transition text-sm font-medium "
                >
                    {loading ? 'Refreshing...' : 'Refresh'}
                </button>
            </div>

            {services.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg font-light font-serif">No service history available</p>
                    <button
                        onClick={() => window.location.href = '/services'}
                        className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Browse Services
                    </button>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {services.map((service) => {
                        const isExpanded = expandedServiceId === service.id;
                        const shortDescription =
                            service.description.length > MAX_DESCRIPTION_LENGTH && !isExpanded
                                ? `${service.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
                                : service.description;

                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl shadow-md border hover:shadow-lg transition p-6"
                            >
                                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-sm font-light text-gray-800 whitespace-pre-line leading-relaxed">
                                    {shortDescription}
                                    {service.description.length > MAX_DESCRIPTION_LENGTH && (
                                        <button
                                            onClick={() => toggleDescription(service.id)}
                                            className="ml-2 text-blue-600 font-medium hover:underline text-xs"
                                        >
                                            {isExpanded ? 'Read less' : 'Read more'}
                                        </button>
                                    )}
                                </p>

                                <div className="mt-4 space-y-2 text-sm font-sans text-blue-800">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Status</span>
                                        <span className={`px-2 py-1 text-xs rounded-full ${service.status === 'completed' ? 'bg-green-100 text-green-700' :
                                            service.status === 'in-progress' ? 'bg-green-400 text-green-800' :
                                                'bg-yellow-600 text-gray-700'
                                            }`}>
                                            {service.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Requested</span>
                                        <span>{service.requestedAt ? new Date(service.requestedAt).toLocaleDateString() : 'N/A'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Price</span>
                                        <span>{service.price ? `$${service.price.toFixed(2)}` : 'N/A'}</span>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-4 text-sm font-medium">
                                    <button className="text-blue-600 hover:underline">Details</button>
                                    {service.status === 'completed' && !service.feedback && (
                                        <button className="text-indigo-600 hover:underline">Feedback</button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ServiceHistory;
