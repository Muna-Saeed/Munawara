// EditUser.tsx
'use client';

import { useState } from 'react';
import { User } from 'next-auth';
import { Check, X } from 'lucide-react';

interface EditUserProps {
    user: User;
    onUpdate: (updated: Partial<User>) => void;
    onCancel: () => void;
}

const EditUser = ({ user, onUpdate, onCancel }: EditUserProps) => {
    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || '',
        role: user.role || '',
    });

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        onUpdate(formData);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Edit User</h3>

            <div className="space-y-4">
                <div>
                    <label className="text-sm text-gray-700 block mb-1">Name</label>
                    <input
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="Enter name"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-700 block mb-1">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="Enter email"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-700 block mb-1">Role</label>
                    <input
                        value={formData.role}
                        onChange={(e) => handleChange('role', e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="Enter role"
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-1 text-green-600 hover:text-green-800"
                >
                    <Check />
                    Save
                </button>
                <button
                    onClick={onCancel}
                    className="flex items-center gap-1 text-red-600 hover:text-red-800"
                >
                    <X />
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditUser;
