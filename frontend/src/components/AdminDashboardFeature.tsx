// AdminDashboardFeature using modular components
'use client';

import { useEffect, useState } from 'react';
import { User } from 'next-auth';
import { RefreshCcw } from 'lucide-react';

import Orders from './Orders';
import Users from './Users';
import Messages from './Messages';
import EditUser from './EditUser';

import { Message } from 'next-auth';
export interface Order {
    _id: string;
    userId: string;
    serviceId: string;
    details: string;
    status?: 'pending' | 'inprogress' | 'completed';
    requestedAt?: string;
    feedback?: string;
}

const AdminDashboardFeature = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [activeTab, setActiveTab] = useState<'orders' | 'users' | 'messages'>('orders');
    const [editingUserId, setEditingUserId] = useState<string | null>(null);

    useEffect(() => {
        refreshData();
    }, []);

    const fetchData = async <T,>(
        endpoint: string,
        setter: React.Dispatch<React.SetStateAction<T>>
    ): Promise<void> => {
        try {
            const res = await fetch(endpoint);
            const data: T = await res.json();
            setter(data);
        } catch (error) {
            console.error(`Failed to fetch from ${endpoint}:`, error);
        }
    };

    const refreshData = () => {
        fetchData<User[]>('/api/users', setUsers);
        fetchData<Message[]>('/api/messages', setMessages);
        fetch('/api/orders')
            .then((res) => res.json())
            .then((data: Order[]) => {
                const uniqueOrders = Array.from(new Map(data.map((o) => [o._id, o])).values());
                setOrders(uniqueOrders);
            })
            .catch((error) => {
                console.error('Failed to fetch from /api/orders:', error);
            });
    };

    const handleOrderUpdate = async (id: string, status: string, feedback: string) => {
        try {
            const res = await fetch(`/api/orders/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status, feedback }),
            });
            if (!res.ok) throw new Error('Failed to update order');
            refreshData();
        } catch (error) {
            console.error('Order update failed:', error);
        }
    };

    const handleUpdateUser = async (id: string, updated: Partial<User>) => {
        try {
            await fetch(`/api/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated),
            });
            setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...updated } : u)));
            setEditingUserId(null);
        } catch (err) {
            console.error('Update failed', err);
        }
    };

    const handleDeleteUser = async (id: string) => {
        console.log('Deleting user with ID:', id);

        try {
            const res = await fetch(`/api/users/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await res.json();

            if (!res.ok) {
                console.error('Server responded with error:', result);
                alert(`Error: ${result.error || 'Unknown error'}`);
                return;
            }

            console.log('User deleted successfully:', result);
            setUsers((prev) => prev.filter((u) => u.id !== id));
        } catch (err) {
            console.error('Delete failed', err);
            alert('Network error while deleting user');
        }
    };




    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={refreshData}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        <RefreshCcw size={16} /> Refresh Data
                    </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200">
                    <button
                        onClick={() => {
                            setActiveTab('orders');
                            setEditingUserId(null);
                        }}
                        className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${activeTab === 'orders'
                            ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Orders
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('users');
                            setEditingUserId(null);
                        }}
                        className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${activeTab === 'users'
                            ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Users
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('messages');
                            setEditingUserId(null);
                        }}
                        className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${activeTab === 'messages'
                            ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Messages
                    </button>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    {activeTab === 'orders' && <Orders orders={orders} onUpdate={handleOrderUpdate} />}
                    {activeTab === 'users' && editingUserId ? (
                        <EditUser
                            user={users.find((u) => u.id === editingUserId)!}
                            onUpdate={(updated) => handleUpdateUser(editingUserId, updated)}
                            onCancel={() => setEditingUserId(null)}
                        />
                    ) : activeTab === 'users' ? (
                        <Users
                            users={users}
                            onUpdateUser={(id) => {
                                console.log('Calling edit for user:', id);
                                setEditingUserId(id);
                            }}
                            onDeleteUser={handleDeleteUser}
                        />
                    ) : null}
                    {activeTab === 'messages' && <Messages messages={messages} />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardFeature;