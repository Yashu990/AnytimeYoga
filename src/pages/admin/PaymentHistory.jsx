import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Search, Download, Eye } from 'lucide-react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const PaymentHistory = () => {
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [payments, setPayments] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)

        // Check auth
        const isAuthenticated = localStorage.getItem('adminAuth')
        if (!isAuthenticated) {
            navigate('/admin/login')
            return
        }

        // Mock payments data
        setPayments([
            { id: 1, date: '2025-12-02', user: 'Sarah Jenkins', amount: 27, status: 'completed', invoiceNum: 'INV-1001', method: 'Credit Card' },
            { id: 2, date: '2025-12-01', user: 'Michael Brown', amount: 27, status: 'completed', invoiceNum: 'INV-1002', method: 'PayPal' },
            { id: 3, date: '2025-11-30', user: 'Emily Davis', amount: 27, status: 'completed', invoiceNum: 'INV-1003', method: 'Credit Card' },
            { id: 4, date: '2025-11-29', user: 'John Smith', amount: 27, status: 'pending', invoiceNum: 'INV-1004', method: 'Credit Card' },
            { id: 5, date: '2025-11-28', user: 'Anna Wilson', amount: 27, status: 'completed', invoiceNum: 'INV-1005', method: 'Debit Card' }
        ])
    }, [navigate])

    const filteredPayments = payments.filter(payment =>
        payment.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.invoiceNum.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getStatusBadge = (status) => {
        const styles = {
            completed: 'bg-green-100 text-green-700',
            pending: 'bg-orange-100 text-orange-700',
            failed: 'bg-red-100 text-red-700'
        }
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[status]}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        )
    }

    const totalRevenue = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0)

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="lg:ml-64 min-h-screen">
                {/* Top Bar */}
                <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                                <Menu size={24} />
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Payment History</h1>
                                <p className="text-sm text-gray-600">Total Revenue: ${totalRevenue}</p>
                            </div>
                        </div>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-yoga-sage-600 text-white rounded-lg hover:bg-yoga-sage-700">
                            <Download size={18} />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Search */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by user or invoice number..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yoga-sage-400"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>

                    {/* Payments Table */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Date</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">User</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Amount</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Method</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Invoice #</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredPayments.map((payment) => (
                                        <tr key={payment.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-gray-700">{new Date(payment.date).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 font-medium text-gray-900">{payment.user}</td>
                                            <td className="px-6 py-4 text-gray-700">${payment.amount}.00</td>
                                            <td className="px-6 py-4 text-gray-700">{payment.method}</td>
                                            <td className="px-6 py-4 font-mono text-sm text-gray-700">{payment.invoiceNum}</td>
                                            <td className="px-6 py-4">{getStatusBadge(payment.status)}</td>
                                            <td className="px-6 py-4">
                                                <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Invoice">
                                                    <Eye size={16} className="text-gray-600" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentHistory
