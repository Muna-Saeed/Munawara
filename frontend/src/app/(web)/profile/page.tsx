'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import ProfileSection from '@/components/ProfileSection';
import ServiceHistory from '@/components/ServiceHistory';
import NewServiceRequest from '@/components/NewServiceRequest';
import AdminDashboardFeature from '@/components/AdminDashboardFeature';

import { Service, AvailableService } from 'next-auth';

const TABS = [
    { id: 'profile', label: 'Profile Information' },
    { id: 'history', label: 'Your Service History' },
    { id: 'request', label: 'Request New Service' },
];

const CustomerProfile = () => {
    const { data: session, status } = useSession();
    const [activeTab, setActiveTab] = useState<'profile' | 'history' | 'request'>('profile');
    const [serviceHistory, setServiceHistory] = useState<Service[]>([]);
    const [availableServices, setAvailableServices] = useState<AvailableService[]>([]);
    const [loading, setLoading] = useState({ history: false, services: false });

    const isAdmin = session?.user?.role === 'admin';

    // Fetch service history when needed
    useEffect(() => {
        if (session?.user && activeTab === 'history') {
            fetchServiceHistory();
        }
    }, [session, activeTab]);

    // Fetch available services when needed
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
            console.error('Error fetching service history:', error);
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
            console.error('Error fetching available services:', error);
        } finally {
            setLoading((prev) => ({ ...prev, services: false }));
        }
    };

    if (status === 'loading' || typeof window === 'undefined') return null;

    if (!session?.user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Authentication Required</h2>
                    <p className="text-gray-600 mb-6">Please sign in to access your profile and services.</p>
                    <button
                        onClick={() => (window.location.href = '/login')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

                {/* Admin-only Section */}
                {isAdmin && (
                    <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6">
                        <AdminDashboardFeature />
                    </div>
                )}

                {/* Navigation Tabs */}
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-6">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                className={`px-4 py-2 text-sm font-semibold transition-all border-b-2 ${activeTab === tab.id
                                    ? 'text-blue-600 border-blue-600'
                                    : 'text-gray-500 border-transparent hover:text-blue-500'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 transition-all duration-200">
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
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;
