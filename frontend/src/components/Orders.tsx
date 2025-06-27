import { useState } from 'react';
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

const getStatusColor = (status?: string) => {
    switch (status) {
        case 'completed': return 'bg-green-100 text-green-800';
        case 'inprogress': return 'bg-blue-100 text-blue-800';
        default: return 'bg-yellow-100 text-yellow-800';
    }
};

const getNextStatusOptions = (status?: string | null) => {
    const currentStatus = status ?? 'pending';
    if (currentStatus === 'pending') return ['inprogress', 'completed'];
    if (currentStatus === 'inprogress') return ['completed'];
    return [];
};

const Orders = ({ orders, onUpdate }: OrdersProps) => {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [statusUpdate, setStatusUpdate] = useState('');
    const [feedback, setFeedback] = useState('');
    const [page, setPage] = useState(0);
    const PAGE_SIZE = 6; // Changed to multiple of 3 for better grid layout

    const pagedOrders = orders.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Orders <span className="text-blue-600">{orders.length}</span></h2>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                        disabled={page === 0}
                        className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                    >
                        <ChevronLeft size={16} className="mr-1" /> Previous
                    </button>
                    <button
                        onClick={() => setPage((prev) => (prev + 1) * PAGE_SIZE < orders.length ? prev + 1 : prev)}
                        disabled={(page + 1) * PAGE_SIZE >= orders.length}
                        className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                    >
                        Next <ChevronRight size={16} className="ml-1" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pagedOrders.map((order) => (
                    <div key={order._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-gray-800 truncate">Order #{order._id.slice(-6)}</h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                    {order.status || 'pending'}
                                </span>
                            </div>

                            <div className="text-sm space-y-1">
                                <p className="text-gray-600"><span className="font-medium">User:</span> {order.userId.slice(-6)}</p>
                                <p className="text-gray-600"><span className="font-medium">Service:</span> {order.serviceId.slice(-6)}</p>
                                <p className="text-gray-600"><span className="font-medium">Requested:</span> {order.requestedAt || 'N/A'}</p>
                            </div>

                            <div className="border-t pt-2 mt-2">
                                <p className="text-sm text-gray-700 line-clamp-2">{order.details}</p>
                            </div>

                            {editingId === order._id ? (
                                <div className="mt-3 space-y-3">
                                    <select
                                        value={statusUpdate}
                                        onChange={(e) => setStatusUpdate(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        {getNextStatusOptions(order.status).map((status) => (
                                            <option key={status} value={status}>{status}</option>
                                        ))}
                                    </select>
                                    <textarea
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Add feedback..."
                                        rows={2}
                                    />
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            onClick={() => setEditingId(null)}
                                            className="p-2 text-gray-500 hover:text-red-600"
                                        >
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
                                    {order.feedback && (
                                        <p className="text-xs text-gray-500 italic">"{order.feedback}"</p>
                                    )}
                                    <button
                                        onClick={() => {
                                            setEditingId(order._id);
                                            setStatusUpdate(order.status || 'pending');
                                            setFeedback(order.feedback || '');
                                        }}
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

            {orders.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No orders found
                </div>
            )}
        </div>
    );
};

export default Orders;