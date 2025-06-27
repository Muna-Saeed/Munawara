'use client';

import { User } from 'next-auth';

interface ProfileSectionProps {
    user: User;
}

const ProfileSection = ({ user }: ProfileSectionProps) => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">👤 Profile Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Details */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Personal Details</h3>
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">{user.name || 'Not provided'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{user.email || 'Not provided'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">{user.phone || 'Not provided'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">{user.location || 'Not provided'}</p>
                        </div>
                    </div>
                </div>

                {/* Business Details */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Business Information</h3>
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <p className="text-sm text-gray-500">Company</p>
                            <p className="font-medium">{user.company || 'Not provided'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Industry</p>
                            <p className="font-medium">{user.industry || 'Not provided'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Customer Since</p>
                            <p className="font-medium">
                                {user.createdAt
                                    ? new Date(user.createdAt).toLocaleDateString(undefined, {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })
                                    : 'Not available'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
