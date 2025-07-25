'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

interface Product {
    _id: string;
    id?: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
    isActive: boolean;
}

type SubmissionStatus = 'idle' | 'success' | 'error' | 'unauthenticated';

interface NewServiceRequestProps {
    services: Product[];
    loading: boolean;
    onRefresh: () => void;
}

const NewServiceRequest = ({ services = [], loading, onRefresh }: NewServiceRequestProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [requestDetails, setRequestDetails] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');

    const handleSelectService = (serviceId: string) => {
        if (selectedService === serviceId) {
            setSelectedService(null);
        } else {
            setSelectedService(serviceId);
            setRequestDetails('');
            setSubmissionStatus('idle');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedService) {
            setSubmissionStatus('error');
            return;
        }

        if (status === 'unauthenticated') {
            setSubmissionStatus('unauthenticated');
            return;
        }

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmissionStatus('idle');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const response = await fetch('/api/service-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: session?.user?.id,
                    serviceId: selectedService,
                    details: requestDetails,
                }),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                setSelectedService(null);
                setRequestDetails('');
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === 'loading' || loading) return <LoadingSpinner />;

    const renderFeatures = (description: string, isPro: boolean) => {
        const lines = description.split('\n');
        const intro = lines[0].startsWith('- ') ? '' : lines[0];
        const features = lines.filter(line => line.startsWith('- ')).map(line => line.substring(2).trim());

        return (
            <>
                {intro && <p className={`text-sm ${isPro ? 'text-slate-400' : 'text-slate-500'} mb-3`}>{intro}</p>}
                <ul className="list-none p-0 my-6 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className={`flex items-center gap-2 mb-2 ${isPro ? 'text-slate-200' : 'text-slate-700'}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    return (
        <div className="bg-gray-50/50 p-4 sm:p-6 lg:p-8 min-h-screen">
            <div className="p-6 max-w-5xl mx-auto space-y-8 bg-white rounded-xl shadow-sm">
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Request a New Service</h2>
                    <button
                        onClick={onRefresh}
                        disabled={loading}
                        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Refresh Services
                    </button>
                </div>

                {services.length === 0 ? (
                    <div className="text-center py-16 px-6">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No Services Available</h3>
                        <p className="mt-1 text-sm text-gray-500">Please check back later or contact support.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => {
                                const isProPlan = service.name === 'Pro';
                                const isSelected = selectedService === service._id;

                                return (
                                    <div
                                        key={service._id}
                                        onClick={() => handleSelectService(service._id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSelectService(service._id)}
                                        className={`
                                            bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full relative
                                            shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                                            ${isProPlan ? 'bg-slate-900 text-white border-slate-700' : 'bg-gray-50 text-gray-800'}
                                            ${isSelected ? 'ring-2 ring-blue-500 border-blue-500' : 'hover:border-blue-400'}
                                        `}
                                    >
                                        <h3 className={`font-bold text-xl mb-2 ${isProPlan ? 'text-white' : 'text-slate-900'}`}>{service.name}</h3>
                                        <p className={`text-4xl font-extrabold my-2 ${isProPlan ? 'text-emerald-400' : 'text-slate-800'}`}>
                                            ${service.price}<span className={`text-base font-medium ${isProPlan ? 'text-slate-400' : 'text-slate-600'}`}>/mo</span>
                                        </p>

                                        {renderFeatures(service.description, isProPlan)}

                                        {isSelected && (
                                            <div className="absolute top-4 right-4 text-blue-600">
                                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {selectedService && (
                            <div className={`transition-all duration-500 ${selectedService ? 'opacity-100 max-h-screen pt-6' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                <h3 className="font-bold text-xl text-gray-800 mb-4">Tell Us More About Your Request</h3>
                                <div>
                                    <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        id="details"
                                        rows={4}
                                        className="w-full px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                                        placeholder="Please describe your project requirements, goals, and any other important details..."
                                        value={requestDetails}
                                        onChange={(e) => setRequestDetails(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    {submissionStatus === 'success' && (
                                        <div className="flex items-center p-4 rounded-lg bg-green-50 text-green-800">
                                            <p className="font-medium text-sm">Service request submitted successfully!</p>
                                        </div>
                                    )}
                                    {submissionStatus === 'error' && (
                                        <div className="flex items-center p-4 rounded-lg bg-red-50 text-red-800">
                                            <p className="font-medium text-sm">Failed to submit request. Please try again.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end pt-4 border-t mt-6">
                                    {/* // NEW LOGIC HERE: Show a different button based on auth status */}
                                    {status === 'unauthenticated' ? (
                                        <button
                                            type="button"
                                            onClick={() => router.push('/login')}
                                            disabled={!selectedService}
                                            className="px-8 py-3 rounded-lg text-white font-bold transition-all duration-300 flex items-center bg-blue-600 hover:bg-blue-700 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                                        >
                                            Log in to Submit
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={!selectedService || isSubmitting}
                                            className="px-8 py-3 rounded-lg text-white font-bold transition-all duration-300 flex items-center bg-blue-600 hover:bg-blue-700 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                        </button>
                                    )}
                                    {/* // END NEW LOGIC */}
                                </div>
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default NewServiceRequest;