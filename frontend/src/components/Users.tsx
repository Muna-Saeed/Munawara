'use client';

import { Pencil, Trash2 } from 'lucide-react';
import { UserWithSession } from 'next-auth';

interface UsersProps {
    users: UserWithSession[];
    onUpdateUser: (id: string) => void;
    onDeleteUser: (id: string) => void;
}

const Users = ({ users, onUpdateUser, onDeleteUser }: UsersProps) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Users ({users.length})</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition duration-300 space-y-2"
                    >
                        <div className="text-gray-800 space-y-1">
                            <p><span className="font-semibold">Name:</span> {user.name}</p>
                            <p><span className="font-semibold">Email:</span> {user.email}</p>
                            {user.role && (
                                <p><span className="font-semibold">Role:</span> {user.role}</p>
                            )}
                            {user.session && (
                                <>
                                    <p>
                                        <span className="font-semibold">Status:</span>{' '}
                                        <span className={user.session.isOnline ? 'text-green-600' : 'text-gray-500'}>
                                            {user.session.isOnline ? 'Online' : 'Offline'}
                                        </span>
                                    </p>
                                    {user.session.lastActiveAt && (
                                        <p>
                                            <span className="font-semibold">Last Active:</span>{' '}
                                            {new Date(user.session.lastActiveAt).toLocaleString()}
                                        </p>
                                    )}
                                    {user.session.ipAddress && (
                                        <p>
                                            <span className="font-semibold">IP Address:</span>{' '}
                                            {user.session.ipAddress}
                                        </p>
                                    )}
                                    {user.session.location && (
                                        <p>
                                            <span className="font-semibold">Location:</span>{' '}
                                            {[
                                                user.session.location.city,
                                                user.session.location.country
                                            ]
                                                .filter(Boolean)
                                                .join(', ') || '—'}
                                        </p>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="flex justify-end space-x-3 mt-4">
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
