import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, GraduationCap, Calendar, DollarSign, TrendingUp, Search, Bell, Settings, Menu, CreditCard, CheckCircle, Clock, X } from 'lucide-react'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [activeView, setActiveView] = useState('overview')

    useEffect(() => {
        window.scrollTo(0, 0)

        const isAuthenticated = localStorage.getItem('adminAuth')
        if (!isAuthenticated) {
            navigate('/')
            return
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('adminAuth')
        navigate('/')
    }

    const menuItems = [
        { title: 'Dashboard', active: true, onClick: () => { } },
        { title: 'User Management', onClick: () => navigate('/admin/users') },
        { title: 'Teachers', onClick: () => navigate('/admin/teachers') },
        { title: 'All Bookings', onClick: () => navigate('/admin/schedules') },
        { title: 'Payments', onClick: () => navigate('/admin/payments') },
        { title: 'Feedback', onClick: () => navigate('/admin/feedback') },
    ]

    // Real yoga booking data
    const bookingStats = [
        {
            icon: '📅',
            value: '156',
            label: 'Total Bookings',
            change: '+12.5%',
            subtext: 'This month',
            positive: true,
            color: 'from-blue-400 to-blue-500'
        },
        {
            icon: '✅',
            value: '124',
            label: 'Completed Sessions',
            change: '+18.2%',
            subtext: 'Success rate 79%',
            positive: true,
            color: 'from-green-400 to-green-500'
        },
        {
            icon: '💰',
            value: '₹85,400',
            label: 'Total Revenue',
            change: '+24.8%',
            subtext: 'Monthly income',
            positive: true,
            color: 'from-purple-400 to-purple-500'
        }
    ]

    // Recent bookings
    const recentBookings = [
        {
            id: 'BK-1234',
            user: 'Sarah Jenkins',
            teacher: 'Priya Sharma',
            yogaType: 'Vinyasa',
            date: '2025-12-10',
            time: '07:00 AM',
            amount: '₹800',
            status: 'confirmed',
            paymentStatus: 'paid'
        },
        {
            id: 'BK-1235',
            user: 'Michael Brown',
            teacher: 'Raj Kumar',
            yogaType: 'Hatha',
            date: '2025-12-11',
            time: '08:00 AM',
            amount: '₹800',
            status: 'pending',
            paymentStatus: 'pending'
        },
        {
            id: 'BK-1236',
            user: 'Emily Davis',
            teacher: 'Priya Sharma',
            yogaType: 'Power Yoga',
            date: '2025-12-12',
            time: '06:00 PM',
            amount: '₹1000',
            status: 'confirmed',
            paymentStatus: 'paid'
        },
        {
            id: 'BK-1237',
            user: 'David Wilson',
            teacher: 'Anita Desai',
            yogaType: 'Yin Yoga',
            date: '2025-12-12',
            time: '09:00 AM',
            amount: '₹800',
            status: 'completed',
            paymentStatus: 'paid'
        },
        {
            id: 'BK-1238',
            user: 'Anna Lee',
            teacher: 'Raj Kumar',
            yogaType: 'Kundalini',
            date: '2025-12-13',
            time: '07:30 AM',
            amount: '₹1200',
            status: 'confirmed',
            paymentStatus: 'paid'
        }
    ]

    // Recent payments
    const recentPayments = [
        { id: 'PAY-5678', user: 'Sarah Jenkins', amount: '₹800', method: 'UPI', date: '2025-12-08', status: 'success' },
        { id: 'PAY-5679', user: 'Emily Davis', amount: '₹1000', method: 'Card', date: '2025-12-08', status: 'success' },
        { id: 'PAY-5680', user: 'Michael Brown', amount: '₹800', method: 'Net Banking', date: '2025-12-07', status: 'pending' },
        { id: 'PAY-5681', user: 'Anna Lee', amount: '₹1200', method: 'UPI', date: '2025-12-07', status: 'success' }
    ]

    // Activity feed
    const activities = [
        { type: 'booking', text: 'New session booked by Sarah Jenkins', time: '10 mins ago', icon: '📅' },
        { type: 'payment', text: 'Payment of ₹1000 received from Emily Davis', time: '25 mins ago', icon: '💳' },
        { type: 'user', text: 'New user registered: Michael Brown', time: '1 hour ago', icon: '👤' },
        { type: 'session', text: 'Session completed by Priya Sharma', time: '2 hours ago', icon: '✅' },
        { type: 'feedback', text: 'New 5-star review from David Wilson', time: '3 hours ago', icon: '⭐' }
    ]

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Left Sidebar - Green */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gradient-to-b from-emerald-500 to-emerald-600 text-white transition-all duration-300 overflow-hidden flex-shrink-0`}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold">AnyTime Yoga</h1>
                    </div>

                    {/* Menu */}
                    <nav className="space-y-1">
                        <div className="text-xs font-semibold text-emerald-200 mb-3 px-3">ADMIN PANEL</div>
                        {menuItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={item.onClick}
                                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-left ${item.active
                                    ? 'bg-emerald-700 text-white'
                                    : 'text-emerald-100 hover:bg-emerald-600'
                                    }`}
                            >
                                <span className="text-sm font-medium">{item.title}</span>
                            </button>
                        ))}

                        {/* Quick Stats in Sidebar */}
                        <div className="pt-6 mt-6 border-t border-emerald-400">
                            <div className="text-xs font-semibold text-emerald-200 mb-3 px-3">QUICK STATS</div>
                            <div className="px-3 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-emerald-100">Active Users</span>
                                    <span className="font-bold">1,284</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-emerald-100">Teachers</span>
                                    <span className="font-bold">24</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-emerald-100">Today's Sessions</span>
                                    <span className="font-bold">8</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <Menu size={20} />
                            </button>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search bookings, users..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-80"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                                <Bell size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Settings size={20} />
                            </button>
                            <div className="flex items-center space-x-3 pl-4 border-l border-gray-300">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-gray-900">Admin User</p>
                                    <p className="text-xs text-gray-500">Super Admin</p>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                                    alt="Admin"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {/* Dashboard Title */}
                    <div className="mb-6">
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                            <span className="text-emerald-600">🧘‍♀️</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Yoga Booking Analytics</h2>
                        <p className="text-gray-500">Monitor bookings, payments, and platform performance in real-time.</p>
                    </div>

                    {/* View Tabs */}
                    <div className="flex space-x-2 mb-6">
                        <button
                            onClick={() => setActiveView('overview')}
                            className={`px-4 py-2 rounded-lg font-medium ${activeView === 'overview'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveView('bookings')}
                            className={`px-4 py-2 rounded-lg font-medium ${activeView === 'bookings'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Bookings
                        </button>
                    </div>

                    {/* Booking Performance Cards */}
                    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Booking Performance</h3>
                            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                                View Detailed Report →
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {bookingStats.map((card, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                                        {card.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-baseline space-x-2 mb-1">
                                            <h4 className="text-2xl font-bold text-gray-900">{card.value}</h4>
                                            <span className="text-xs font-semibold text-green-600">
                                                {card.change}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">{card.label}</p>
                                        <p className="text-xs text-gray-400">{card.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Generate Monthly Report
                        </button>
                    </div>

                    {/* Recent Bookings & Revenue Chart */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Recent Bookings Table */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Recent Bookings</h3>
                                <button
                                    onClick={() => navigate('/admin/schedules')}
                                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                                >
                                    View All →
                                </button>
                            </div>

                            <div className="space-y-3">
                                {recentBookings.slice(0, 5).map((booking) => (
                                    <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className="font-semibold text-gray-900 text-sm">{booking.user}</span>
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500">{booking.yogaType} • {booking.date} @ {booking.time}</p>
                                            <p className="text-xs text-gray-400">Teacher: {booking.teacher}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-emerald-600">{booking.amount}</p>
                                            <p className={`text-xs ${booking.paymentStatus === 'paid' ? 'text-green-600' : 'text-orange-600'}`}>
                                                {booking.paymentStatus === 'paid' ? '✓ Paid' : '⏳ Pending'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Revenue Trend */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Revenue Trend</h3>
                                <button className="text-gray-400 hover:text-gray-600">⋯</button>
                            </div>

                            <p className="text-xs text-gray-400 mb-4">MONTHLY REVENUE GROWTH</p>

                            <div className="mb-4">
                                <div className="flex items-baseline space-x-2 mb-2">
                                    <span className="text-4xl font-bold text-gray-900">₹85.4k</span>
                                    <span className="text-sm text-green-600 font-semibold">+24.8%</span>
                                </div>
                            </div>

                            {/* Revenue Chart */}
                            <div className="relative h-48 mb-4">
                                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="revenueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
                                            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0 }} />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M 0,110 Q 60,90 100,95 T 200,80 T 300,70 T 400,50 V 150 H 0 Z"
                                        fill="url(#revenueGrad)"
                                    />
                                    <path
                                        d="M 0,110 Q 60,90 100,95 T 200,80 T 300,70 T 400,50"
                                        fill="none"
                                        stroke="#8b5cf6"
                                        strokeWidth="3"
                                    />
                                </svg>
                                <div className="flex justify-between mt-2 text-xs text-gray-500">
                                    {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                                        <span key={month}>{month}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Revenue Breakdown */}
                            <div>
                                <p className="text-xs text-gray-400 mb-2">REVENUE SOURCES</p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Session Bookings</span>
                                        <span className="font-semibold text-gray-900">₹64,200 (75%)</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full">
                                        <div className="h-full w-3/4 bg-purple-600 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Free Trial Conversions</span>
                                        <span className="font-semibold text-gray-900">₹21,200 (25%)</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full">
                                        <div className="h-full w-1/4 bg-blue-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Payments & Activity Feed */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Recent Payments */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Recent Payments</h3>
                                <button
                                    onClick={() => navigate('/admin/payments')}
                                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                                >
                                    View All →
                                </button>
                            </div>

                            <div className="space-y-3">
                                {recentPayments.map((payment) => (
                                    <div key={payment.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${payment.status === 'success' ? 'bg-green-100' : 'bg-orange-100'
                                                }`}>
                                                <CreditCard size={18} className={payment.status === 'success' ? 'text-green-600' : 'text-orange-600'} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm text-gray-900">{payment.user}</p>
                                                <p className="text-xs text-gray-500">{payment.method} • {payment.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">{payment.amount}</p>
                                            <span className={`text-xs ${payment.status === 'success' ? 'text-green-600' : 'text-orange-600'}`}>
                                                {payment.status === 'success' ? '✓ Success' : '⏳ Pending'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Activity Feed */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                            </div>

                            <div className="space-y-4">
                                {activities.map((activity, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <div className="text-2xl">{activity.icon}</div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-900">{activity.text}</p>
                                            <p className="text-xs text-gray-400">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-6 w-full py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
                                View All Activities
                            </button>
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { value: '1,284', label: 'Total Users', trend: '+142 this month', icon: Users, color: 'text-blue-600' },
                            { value: '24', label: 'Active Teachers', trend: '+3 this month', icon: GraduationCap, color: 'text-green-600' },
                            { value: '156', label: 'Active Bookings', trend: '89% completion', icon: Calendar, color: 'text-orange-600' },
                            { value: '₹85.4k', label: 'Monthly Revenue', trend: '+24.8% growth', icon: DollarSign, color: 'text-purple-600' }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center justify-between mb-3">
                                    <stat.icon className={stat.color} size={24} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h4>
                                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                <p className="text-xs text-gray-400">{stat.trend}</p>
                            </div>
                        ))}
                    </div>

                    {/* Logout Button */}
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                        >
                            Logout
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminDashboard
