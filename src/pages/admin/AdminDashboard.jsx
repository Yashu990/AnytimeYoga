import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, GraduationCap, Calendar, DollarSign, Star, Menu } from 'lucide-react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import StatsCard from '../../components/admin/StatsCard'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [recentFeedback, setRecentFeedback] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)

        // Check if admin is logged in
        const isAuthenticated = localStorage.getItem('adminAuth')
        if (!isAuthenticated) {
            navigate('/admin/login')
            return
        }

        // Mock recent feedback
        setRecentFeedback([
            { id: 1, user: 'Sarah Jenkins', rating: 5, comment: 'Amazing experience!', date: '2025-12-02' },
            { id: 2, user: 'Michael Brown', rating: 4, comment: 'Very relaxing sessions', date: '2025-12-01' },
            { id: 3, user: 'Emily Davis', rating: 5, comment: 'Best yoga classes!', date: '2025-11-30' },
            { id: 4, user: 'John Smith', rating: 4, comment: 'Great instructors', date: '2025-11-29' },
            { id: 5, user: 'Anna Wilson', rating: 5, comment: 'Life changing!', date: '2025-11-28' }
        ])
    }, [navigate])

    const stats = [
        { title: 'Total Users', value: '1,284', change: 12.5, icon: Users, color: 'blue' },
        { title: 'Total Teachers', value: '24', change: 8.3, icon: GraduationCap, color: 'green' },
        { title: 'Total Bookings', value: '3,456', change: 15.2, icon: Calendar, color: 'orange' },
        { title: 'Total Revenue', value: '$86,400', change: 18.7, icon: DollarSign, color: 'purple' }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content */}
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
                                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                                <p className="text-sm text-gray-600">Welcome back, Admin</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <StatsCard key={index} {...stat} />
                        ))}
                    </div>

                    {/* Recent Feedback */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Recent Feedback</h2>
                            <button
                                onClick={() => navigate('/admin/feedback')}
                                className="text-sm text-yoga-sage-600 hover:text-yoga-sage-700 font-medium"
                            >
                                View all →
                            </button>
                        </div>

                        <div className="space-y-4">
                            {recentFeedback.map((feedback) => (
                                <div key={feedback.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="w-10 h-10 bg-yoga-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-yoga-sage-600 font-medium">{feedback.user[0]}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-medium text-gray-900">{feedback.user}</h3>
                                            <span className="text-sm text-gray-500">{feedback.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className={i < feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-600">{feedback.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
