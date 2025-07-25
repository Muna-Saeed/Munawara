'use client';

import { useState, useMemo } from 'react';
import { Check, X, Edit, ChevronLeft, ChevronRight } from 'lucide-react';

interface Order {
    _id: string;
    status?: string;
    userId: string;
    serviceId: string;
    details: string;
    requestedAt?: string;
    feedback?: string;
}

interface OrdersProps {
    orders: Order[];
    onUpdate: (id: string, status: string, feedback: string) => void;
}

const statusTabs = ['all', 'pending', 'inprogress', 'completed'];

const getStatusColor = (status?: string) => {
    switch (status) {
        case 'completed':
            return 'bg-green-100 text-green-800';
        case 'inprogress':
            return 'bg-blue-100 text-blue-800';
        default:
            return 'bg-yellow-100 text-yellow-800';
    }
};

const getNextStatusOptions = (status?: string | null) => {
    const current = status ?? 'pending';
    if (current === 'pending') return ['inprogress', 'completed'];
    if (current === 'inprogress') return ['completed'];
    return [];
};

export default function Orders({ orders, onUpdate }: OrdersProps) {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [statusUpdate, setStatusUpdate] = useState('');
    const [feedback, setFeedback] = useState('');
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [sortBy, setSortBy] = useState<'requestedAt' | 'status'>('requestedAt');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(0);



    const filteredOrders = useMemo(() => {
        return orders
            .filter((o) => {
                const keyword = search.toLowerCase();
                return (
                    o._id.toLowerCase().includes(keyword) ||
                    o.userId.toLowerCase().includes(keyword) ||
                    o.serviceId.toLowerCase().includes(keyword)
                );
            })
            .filter((o) => statusFilter === 'all' || (o.status ?? 'pending') === statusFilter)
            .sort((a, b) => {
                const aVal = sortBy === 'requestedAt' ? a.requestedAt || '' : a.status || '';
                const bVal = sortBy === 'requestedAt' ? b.requestedAt || '' : b.status || '';
                return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            });
    }, [orders, search, statusFilter, sortBy, sortOrder]);

    const pagedOrders = filteredOrders.slice(page * limit, (page + 1) * limit);

    const handleEditClick = (order: Order) => {
        setEditingId(order._id);
        setStatusUpdate(order.status || 'pending');
        setFeedback(order.feedback || '');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row text-gray-600 md:items-center md:justify-between space-y-3 md:space-y-0">
                <h2 className="text-2xl font-bold text-gray-800">
                    Orders <span className="text-blue-600">({filteredOrders.length})</span>
                </h2>

                <div className="flex flex-wrap items-center gap-3">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by ID or user..."
                        className="px-3 py-1.5 border border-gray-900 text-gray-800 rounded-lg text-sm w-56 focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'requestedAt' | 'status')}
                        className="text-sm px-2 py-1 border border-gray-300 rounded-lg"
                    >
                        <option value="requestedAt">Sort by Date</option>
                        <option value="status">Sort by Status</option>
                    </select>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                        className="text-sm px-2 py-1 border border-gray-300 rounded-lg"
                    >
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                    <select
                        value={limit}
                        onChange={(e) => {
                            setLimit(parseInt(e.target.value));
                            setPage(0);
                        }}
                        className="text-sm px-2 py-1 border border-gray-300 rounded-lg"
                    >
                        <option value={6}>6 / page</option>
                        <option value={12}>12 / page</option>
                        <option value={24}>24 / page</option>
                    </select>
                </div>
            </div>

            {/* Status Filter Select */}
            <div className="w-48">
                <select
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setPage(0);
                    }}
                    className="w-full px-3 py-2 mb-4 rounded-lg text-sm bg-blue-700 text-gray-100 border border-blue-700"
                >
                    {statusTabs.map((status) => (
                        <option key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {/* Orders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pagedOrders.map((order) => (
                    <div
                        key={order._id}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-gray-800 truncate">Order #{order._id.slice(-6)}</h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                    {order.status || 'pending'}
                                </span>
                            </div>

                            <div className="text-sm space-y-1">
                                <p className="text-gray-600">
                                    <span className="font-medium">User:</span> {order.userId.slice(-6)}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium">Service:</span> {order.serviceId.slice(-6)}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium">Requested:</span> {order.requestedAt || 'N/A'}
                                </p>
                            </div>

                            <div className="border-t pt-2 mt-2">
                                <p className="text-sm text-gray-700 line-clamp-2">{order.details}</p>
                            </div>

                            {editingId === order._id ? (
                                <div className="mt-3 space-y-3">
                                    <select
                                        value={statusUpdate}
                                        onChange={(e) => setStatusUpdate(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                    >
                                        {[order.status ?? 'pending', ...getNextStatusOptions(order.status)]
                                            .filter((v, i, a) => a.indexOf(v) === i)
                                            .map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                    </select>

                                    <textarea
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                        placeholder="Add feedback..."
                                        rows={2}
                                    />
                                    <div className="flex justify-end space-x-2">
                                        <button onClick={() => setEditingId(null)} className="p-2 text-gray-500 hover:text-red-600">
                                            <X size={18} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                onUpdate(order._id, statusUpdate, feedback);
                                                setEditingId(null);
                                            }}
                                            className="p-2 text-gray-500 hover:text-green-600"
                                        >
                                            <Check size={18} />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-between items-center mt-3 pt-2 border-t">
                                    {order.feedback && <p className="text-xs text-gray-500 italic">"{order.feedback}"</p>}
                                    <button
                                        onClick={() => handleEditClick(order)}
                                        className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        <Edit size={14} className="mr-1" /> Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {filteredOrders.length > limit && (
                <div className="flex justify-center gap-3 items-center pt-6">
                    <button
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50"
                    >
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <span className="text-sm text-gray-600">Page {page + 1}</span>
                    <button
                        onClick={() => setPage((p) => ((p + 1) * limit < filteredOrders.length ? p + 1 : p))}
                        disabled={(page + 1) * limit >= filteredOrders.length}
                        className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50"
                    >
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            )}

            {/* Empty */}
            {filteredOrders.length === 0 && <div className="text-center py-8 text-gray-500">No matching orders found.</div>}
        </div>
    );
}
