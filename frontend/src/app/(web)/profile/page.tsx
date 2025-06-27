'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import ProfileSection from '@/components/ProfileSection';
import ServiceHistory from '@/components/ServiceHistory';
import NewServiceRequest from '@/components/NewServiceRequest';
import { Service, AvailableService } from 'next-auth';
import { Admin } from 'mongodb';
import AdminDashboardFeature from '@/components/AdminDashboardFeature';

const CustomerProfile = () => {
    const { data: session, status } = useSession();
    const [activeTab, setActiveTab] = useState<'profile' | 'history' | 'request' | 'admin'>('profile');
    const [serviceHistory, setServiceHistory] = useState<Service[]>([]);
    const [availableServices, setAvailableServices] = useState<AvailableService[]>([]);
    const [loading, setLoading] = useState({
        history: false,
        services: false,
    });

    useEffect(() => {
        if (session?.user && activeTab === 'history') {
            fetchServiceHistory();
        }
    }, [session, activeTab]);

    useEffect(() => {
        if (activeTab === 'request') {
            fetchAvailableServices();
        }
    }, [activeTab]);

    const fetchServiceHistory = async () => {
        setLoading((prev) => ({ ...prev, history: true }));
        try {
            const res = await fetch(`/api/user-requests-history?userId=${session?.user.id}`);
            const data = await res.json();
            setServiceHistory(data);
        } catch (error) {
            console.error('Failed to fetch service history:', error);
        } finally {
            setLoading((prev) => ({ ...prev, history: false }));
        }
    };

    const fetchAvailableServices = async () => {
        setLoading((prev) => ({ ...prev, services: true }));
        try {
            const res = await fetch('/api/available-services');
            const data = await res.json();
            setAvailableServices(data);
        } catch (error) {
            console.error('Failed to fetch available services:', error);
        } finally {
            setLoading((prev) => ({ ...prev, services: false }));
        }
    };

    if (status === 'loading' || typeof window === 'undefined') return null;

    if (!session?.user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Authentication Required</h2>
                    <p className="text-gray-600 mb-6">Please sign in to access your profile and services.</p>
                    <button
                        onClick={() => (window.location.href = '/login')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Navigation Tabs */}
                <div className="mb-8">
                    <div className="flex space-x-4 border-b border-gray-200">
                        {[
                            { id: 'profile', label: 'Profile Information' },
                            { id: 'history', label: 'Your Service History' },
                            { id: 'request', label: 'Request New Service' },
                            ...(session.user.role === 'admin'
                                ? [{ id: 'admin', label: 'Admin Dashboard' }]
                                : [])
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${activeTab === tab.id
                                    ? 'bg-white text-blue-600 border-t-2 border-x border-t-blue-500 -mb-px'
                                    : 'text-gray-500 hover:text-blue-500'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Content Area */}
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 transition-all duration-200">
                    {activeTab === 'profile' && <ProfileSection user={session.user} />}
                    {activeTab === 'history' && (
                        <ServiceHistory
                            services={serviceHistory}
                            loading={loading.history}
                            onRefresh={fetchServiceHistory}
                        />
                    )}
                    {activeTab === 'request' && (
                        <NewServiceRequest
                            services={availableServices}
                            loading={loading.services}
                            onRefresh={fetchAvailableServices}
                        />
                    )}

                    {activeTab === 'admin' && session.user.role === 'admin' && (
                        <AdminDashboardFeature />
                    )}

                </div>


            </div>
        </div>
    );
};

export default CustomerProfile;
