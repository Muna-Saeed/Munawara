'use client';

import { User } from 'next-auth';
import { Pencil, Trash2 } from 'lucide-react';

interface UsersProps {
    users: User[];
    onUpdateUser: (id: string) => void;
    onDeleteUser: (id: string) => void;
}

const Users = ({ users, onUpdateUser, onDeleteUser }: UsersProps) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5 text-gray-900">Users ({users.length})</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <li key={user.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                        <p className="text-lg font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-700">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.role}</p>
                        <div className="flex justify-end space-x-3 mt-3">
                            <button
                                onClick={() => onUpdateUser(user.id)}
                                className="text-blue-600 hover:text-blue-800"
                                title="Edit user"
                            >
                                <Pencil size={18} />
                            </button>
                            <button
                                onClick={() => onDeleteUser(user.id)}
                                className="text-red-600 hover:text-red-800"
                                title="Delete user"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
