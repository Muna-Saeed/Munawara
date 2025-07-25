'use client';

import { useEffect, useState } from 'react';
import { Product, UserWithSession as User } from 'next-auth';
import { RefreshCcw } from 'lucide-react';

import Orders from './Orders';
import Users from './Users';
import Messages from './Messages';
import EditUser from './EditUser';
import LoadingSpinner from './LoadingSpinner';

import { Message } from 'next-auth';
import Products from './Products';



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
    const [activeTab, setActiveTab] = useState<'orders' | 'users' | 'messages' | 'products'>('orders');
    const [editingUserId, setEditingUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product | null>(null);

    const tabs = [
        { label: 'Orders', value: 'orders' },
        { label: 'Users', value: 'users' },
        { label: 'Messages', value: 'messages' },
        { label: 'Products', value: 'products' },
    ];

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
            setLoading(false);
        } catch (error) {
            console.error(`Failed to fetch from ${endpoint}:`, error);
        }
    };

    const refreshData = async () => {
        setLoading(true);

        try {
            const [usersRes, messagesRes, ordersRes] = await Promise.all([
                fetch('/api/users'),
                fetch('/api/messages'),
                fetch('/api/orders'),
            ]);

            const [usersData, messagesData, ordersData] = await Promise.all([
                usersRes.json(),
                messagesRes.json(),
                ordersRes.json(),
            ]);

            setUsers(usersData);
            setMessages(messagesData);

            const uniqueOrders: Order[] = Array.from(
                new Map((ordersData as Order[]).map((o: Order) => [o._id, o])).values()
            );
            setOrders(uniqueOrders);
        } catch (error) {
            console.error('Error refreshing data:', error);
        } finally {
            setLoading(false);
        }
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

    if (loading) {
        return <LoadingSpinner />;
    }

    async function handleReadMessage(id: string): Promise<void> {
        try {
            const res = await fetch(`/api/messages/${id}`, {
                method: 'PUT',
            });

            if (!res.ok) throw new Error('Failed to update message status');
            setMessages((prev) =>
                prev.map((msg) =>
                    (msg as any).id === id || (msg as any)._id === id
                        ? { ...msg, read: true }
                        : msg
                )
            );
        } catch (error) {
            console.error('Failed to mark message as read:', error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={refreshData}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition"
                    >
                        <RefreshCcw size={16} /> Refresh Data
                    </button>
                </div>

                {/* Responsive Tab Navigation */}
                {/* Mobile: Select dropdown */}
                <div className="md:hidden mb-4">
                    <select
                        value={activeTab}
                        onChange={(e) => {
                            setActiveTab(e.target.value as typeof activeTab);
                            setEditingUserId(null);
                            if (e.target.value === 'products') setProducts(null);
                        }}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        {tabs.map((tab) => (
                            <option key={tab.value} value={tab.value}>
                                {tab.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Desktop: Button tabs */}
                <div className="hidden md:flex overflow-x-auto border-b border-gray-200 no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => {
                                setActiveTab(tab.value as typeof activeTab);
                                setEditingUserId(null);
                                if (tab.value === 'products') setProducts(null);
                            }}
                            className={`whitespace-nowrap px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition-colors duration-200 ${activeTab === tab.value
                                ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-200">
                    {activeTab === 'orders' && <Orders orders={orders} onUpdate={handleOrderUpdate} />}
                    {activeTab === 'users' && editingUserId ? (
                        <EditUser
                            user={users.find((u) => u.id === editingUserId)!}
                            onUpdate={(updated) => handleUpdateUser(editingUserId, updated)}
                            onCancel={() => setEditingUserId(null)}
                        />
                    ) : activeTab === 'users' ? (
                        <Users users={users} onUpdateUser={(id) => setEditingUserId(id)} onDeleteUser={handleDeleteUser} />
                    ) : null}
                    {activeTab === 'messages' && <Messages messages={messages} onMarkAsRead={handleReadMessage} />}
                    {activeTab === 'products' && <Products />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardFeature;
