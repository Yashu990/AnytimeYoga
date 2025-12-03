import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const AllSchedules = () => {
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)

        // Check auth
        const isAuthenticated = localStorage.getItem('adminAuth')
        if (!isAuthenticated) {
            navigate('/admin/login')
            return
        }

        // Mock sessions data
        setSessions([
            { id: 1, date: '2025-12-05', teacher: 'Emma Wilson', user: 'Sarah Jenkins', type: 'Vinyasa', time: '07:00 AM', status: 'approved' },
            { id: 2, date: '2025-12-05', teacher: 'David Lee', user: 'Michael Brown', type: 'Power Yoga', time: '08:00 AM', status: 'pending' },
            { id: 3, date: '2025-12-08', teacher: 'Emma Wilson', user: 'Emily Davis', type: 'Yin', time: '06:00 PM', status: 'approved' },
            { id: 4, date: '2025-12-10', teacher: 'David Lee', user: 'John Smith', type: 'Hatha', time: '07:00 AM', status: 'completed' }
        ])
    }, [navigate])

    const getDaysInMonth = () => {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()
        const firstDay = new Date(year, month, 1).getDay()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const days = []

        for (let i = 0; i < firstDay; i++) {
            days.push(null)
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i)
        }

        return days
    }

    const getSessionsForDate = (day) => {
        if (!day) return []
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        return sessions.filter(s => s.date === dateStr)
    }

    const getStatusColor = (status) => {
        const colors = {
            pending: 'bg-orange-500',
            approved: 'bg-green-500',
            completed: 'bg-gray-500'
        }
        return colors[status] || 'bg-blue-500'
    }

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
                                <h1 className="text-2xl font-bold text-gray-900">All Schedules</h1>
                                <p className="text-sm text-gray-600">{sessions.length} total sessions</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Calendar */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        {/* Month Navigation */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            </h2>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                                    className="p-2 hover:bg-gray-100 rounded-lg"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                                    className="p-2 hover:bg-gray-100 rounded-lg"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="text-center font-bold text-gray-700 py-2">
                                    {day}
                                </div>
                            ))}

                            {getDaysInMonth().map((day, index) => {
                                const daySessions = getSessionsForDate(day)
                                return (
                                    <div
                                        key={index}
                                        className={`min-h-[100px] border border-gray-200 rounded-lg p-2 ${day ? 'bg-white hover:bg-gray-50' : 'bg-gray-50'
                                            }`}
                                    >
                                        {day && (
                                            <>
                                                <div className="font-medium text-gray-900 mb-1">{day}</div>
                                                <div className="space-y-1">
                                                    {daySessions.map((session) => (
                                                        <div
                                                            key={session.id}
                                                            className="text-xs p-1 rounded bg-yoga-sage-100 text-yoga-sage-700"
                                                        >
                                                            <div className={`w-2 h-2 rounded-full ${getStatusColor(session.status)} inline-block mr-1`}></div>
                                                            {session.time}
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="mt-4 flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                            <span className="text-gray-600">Pending</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-600">Approved</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                            <span className="text-gray-600">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSchedules
