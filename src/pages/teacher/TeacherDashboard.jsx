import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Bell, CheckCircle } from 'lucide-react'
import Header from '../../layouts/Header'
import PendingRequests from '../../components/teacher/PendingRequests'
import ApprovedSessions from '../../components/teacher/ApprovedSessions'
import CompletedSessions from '../../components/teacher/CompletedSessions'

const TeacherDashboard = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('pending')
    const [sessions, setSessions] = useState([])
    const [showSuccess, setShowSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)

        // Check if teacher is logged in
        const isAuthenticated = localStorage.getItem('teacherAuth')
        if (!isAuthenticated) {
            navigate('/teacher/login')
            return
        }

        // Mock data - in real app, fetch from API
        setSessions([
            {
                id: 'BK001',
                userName: 'Sarah Jenkins',
                userEmail: 'sarah@example.com',
                yogaType: 'Vinyasa',
                date: '2025-12-10',
                time: '07:00 AM',
                duration: '60 min',
                status: 'pending'
            },
            {
                id: 'BK002',
                userName: 'Michael Brown',
                userEmail: 'michael@example.com',
                yogaType: 'Hatha',
                date: '2025-12-12',
                time: '08:00 AM',
                duration: '60 min',
                status: 'pending'
            },
            {
                id: 'BK003',
                userName: 'Emily Davis',
                userEmail: 'emily@example.com',
                yogaType: 'Yin',
                date: '2025-12-15',
                time: '06:00 PM',
                duration: '60 min',
                status: 'approved'
            },
            {
                id: 'BK004',
                userName: 'John Smith',
                userEmail: 'john@example.com',
                yogaType: 'Power Yoga',
                date: '2025-12-01',
                time: '07:00 AM',
                duration: '60 min',
                status: 'completed',
                completedDate: '2025-12-01'
            }
        ])
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('teacherAuth')
        navigate('/teacher/login')
    }

    const handleApprove = (id) => {
        setSessions(sessions.map(s =>
            s.id === id ? { ...s, status: 'approved' } : s
        ))
        setSuccessMessage('Session approved successfully!')
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }

    const handleReject = (id) => {
        setSessions(sessions.filter(s => s.id !== id))
        setSuccessMessage('Session rejected')
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }

    const handleMarkCompleted = (id) => {
        setSessions(sessions.map(s =>
            s.id === id ? { ...s, status: 'completed', completedDate: new Date().toISOString() } : s
        ))
        setSuccessMessage('Session marked as completed!')
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }

    const pendingRequests = sessions.filter(s => s.status === 'pending')
    const approvedSessions = sessions.filter(s => s.status === 'approved')
    const completedSessions = sessions.filter(s => s.status === 'completed')

    const tabs = [
        { id: 'pending', label: 'Pending Requests', count: pendingRequests.length, color: 'orange' },
        { id: 'approved', label: 'Approved Sessions', count: approvedSessions.length, color: 'green' },
        { id: 'completed', label: 'Completed', count: completedSessions.length, color: 'gray' }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Dashboard Header */}
            <section className="bg-gradient-to-br from-yoga-sage-100 via-white to-yoga-lavender-50 py-8 pt-24 border-b border-gray-200">
                <div className="container-custom">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                                Teacher Dashboard
                            </h1>
                            <p className="text-gray-600">Manage your yoga sessions and bookings</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-white rounded-lg transition-colors relative">
                                <Bell size={24} className="text-gray-600" />
                                {pendingRequests.length > 0 && (
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                                )}
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <LogOut size={18} />
                                <span className="hidden md:inline">Logout</span>
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <p className="text-gray-500 text-sm mb-1">Pending</p>
                            <p className="text-2xl font-bold text-orange-600">{pendingRequests.length}</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <p className="text-gray-500 text-sm mb-1">Approved</p>
                            <p className="text-2xl font-bold text-green-600">{approvedSessions.length}</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <p className="text-gray-500 text-sm mb-1">Completed</p>
                            <p className="text-2xl font-bold text-gray-600">{completedSessions.length}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="flex space-x-2 mb-6 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center space-x-2 ${activeTab === tab.id
                                        ? 'bg-yoga-sage-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                <span>{tab.label}</span>
                                {tab.count > 0 && (
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${activeTab === tab.id
                                            ? 'bg-white text-yoga-sage-600'
                                            : `bg-${tab.color}-100 text-${tab.color}-600`
                                        }`}>
                                        {tab.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'pending' && (
                        <PendingRequests
                            requests={pendingRequests}
                            onApprove={handleApprove}
                            onReject={handleReject}
                        />
                    )}

                    {activeTab === 'approved' && (
                        <ApprovedSessions
                            sessions={approvedSessions}
                            onMarkCompleted={handleMarkCompleted}
                        />
                    )}

                    {activeTab === 'completed' && (
                        <CompletedSessions sessions={completedSessions} />
                    )}
                </div>
            </section>

            {/* Success Toast */}
            {showSuccess && (
                <div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-slide-up z-50">
                    <CheckCircle size={24} />
                    <span className="font-medium">{successMessage}</span>
                </div>
            )}
        </div>
    )
}

export default TeacherDashboard
