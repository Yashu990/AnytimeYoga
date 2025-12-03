import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Search, Filter, MoreVertical, Eye, Ban, Trash2 } from 'lucide-react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const UserManagement = () => {
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')

    useEffect(() => {
        window.scrollTo(0, 0)

        // Check auth
        const isAuthenticated = localStorage.getItem('adminAuth')
        if (!isAuthenticated) {
            navigate('/admin/login')
            return
        }

        // Mock users data
        setUsers([
            { id: 'USR001', name: 'Sarah Jenkins', email: 'sarah@example.com', joinDate: '2025-01-15', status: 'active', totalBookings: 12, totalSpent: 324 },
            { id: 'USR002', name: 'Michael Brown', email: 'michael@example.com', joinDate: '2025-02-20', status: 'active', totalBookings: 8, totalSpent: 216 },
            { id: 'USR003', name: 'Emily Davis', email: 'emily@example.com', joinDate: '2025-03-10', status: 'active', totalBookings: 15, totalSpent: 405 },
            { id: 'USR004', name: 'John Smith', email: 'john@example.com', joinDate: '2024-12-05', status: 'inactive', totalBookings: 5, totalSpent: 135 },
            { id: 'USR005', name: 'Anna Wilson', email: 'anna@example.com', joinDate: '2025-01-25', status: 'suspended', totalBookings: 3, totalSpent: 81 }
        ])
    }, [navigate])

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === 'all' || user.status === statusFilter
        return matchesSearch && matchesStatus
    })

    const getStatusBadge = (status) => {
        const styles = {
            active: 'bg-green-100 text-green-700',
            inactive: 'bg-gray-100 text-gray-700',
            suspended: 'bg-red-100 text-red-700'
        }
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[status]}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="lg:ml-64 min-h-screen">
                {/* Top Bar */}
                <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <Menu size={24} />
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                                <p className="text-sm text-gray-600">{filteredUsers.length} total users</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Search and Filters */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-grow relative">
                                <input
                                    type="text"
                                    placeholder="Search by name or email..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yoga-sage-400"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            </div>

                            {/* Status Filter */}
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yoga-sage-400"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="suspended">Suspended</option>
                            </select>
                        </div>
                    </div>

                    {/* Users Table */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">User</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Join Date</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Bookings</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Total Spent</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-medium text-gray-900">{user.name}</p>
                                                    <p className="text-sm text-gray-500">{user.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">{new Date(user.joinDate).toLocaleDateString()}</td>
                                            <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                                            <td className="px-6 py-4 text-gray-700">{user.totalBookings}</td>
                                            <td className="px-6 py-4 text-gray-700">${user.totalSpent}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-2">
                                                    <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Details">
                                                        <Eye size={16} className="text-gray-600" />
                                                    </button>
                                                    <button className="p-2 hover:bg-orange-100 rounded-lg" title="Suspend">
                                                        <Ban size={16} className="text-orange-600" />
                                                    </button>
                                                    <button className="p-2 hover:bg-red-100 rounded-lg" title="Delete">
                                                        <Trash2 size={16} className="text-red-600" />
                                                    </button>
                                                </div>
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

export default UserManagement
