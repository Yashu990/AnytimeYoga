import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Star, CheckCircle, XCircle, Trash2 } from 'lucide-react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const FeedbackManagement = () => {
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [feedback, setFeedback] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        window.scrollTo(0, 0)

        // Check auth
        const isAuthenticated = localStorage.getItem('adminAuth')
        if (!isAuthenticated) {
            navigate('/admin/login')
            return
        }

        // Mock feedback data
        setFeedback([
            { id: 1, user: 'Sarah Jenkins', rating: 5, comment: 'Amazing experience! The instructors are so knowledgeable and caring.', date: '2025-12-02', approved: false },
            { id: 2, user: 'Michael Brown', rating: 4, comment: 'Very relaxing sessions. Helped me de-stress a lot.', date: '2025-12-01', approved: true },
            { id: 3, user: 'Emily Davis', rating: 5, comment: 'Best yoga classes I have ever taken!', date: '2025-11-30', approved: true },
            { id: 4, user: 'John Smith', rating: 4, comment: 'Great instructors and flexible scheduling.', date: '2025-11-29', approved: false },
            { id: 5, user: 'Anna Wilson', rating: 5, comment: 'Life changing experience!', date: '2025-11-28', approved: true }
        ])
    }, [navigate])

    const handleApprove = (id) => {
        setFeedback(feedback.map(f =>
            f.id === id ? { ...f, approved: true } : f
        ))
    }

    const handleReject = (id) => {
        setFeedback(feedback.map(f =>
            f.id === id ? { ...f, approved: false } : f
        ))
    }

    const handleDelete = (id) => {
        setFeedback(feedback.filter(f => f.id !== id))
    }

    const filteredFeedback = filter === 'all' ? feedback :
        filter === 'approved' ? feedback.filter(f => f.approved) :
            feedback.filter(f => !f.approved)

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
                                <h1 className="text-2xl font-bold text-gray-900">Feedback Management</h1>
                                <p className="text-sm text-gray-600">{filteredFeedback.length} feedbacks</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Filters */}
                    <div className="flex space-x-2 mb-6">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg font-medium ${filter === 'all' ? 'bg-yoga-sage-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            All ({feedback.length})
                        </button>
                        <button
                            onClick={() => setFilter('approved')}
                            className={`px-4 py-2 rounded-lg font-medium ${filter === 'approved' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            Approved ({feedback.filter(f => f.approved).length})
                        </button>
                        <button
                            onClick={() => setFilter('pending')}
                            className={`px-4 py-2 rounded-lg font-medium ${filter === 'pending' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            Pending ({feedback.filter(f => !f.approved).length})
                        </button>
                    </div>

                    {/* Feedback List */}
                    <div className="space-y-4">
                        {filteredFeedback.map((item) => (
                            <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h3 className="font-bold text-gray-900">{item.user}</h3>
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3">{new Date(item.date).toLocaleDateString()}</p>
                                        <p className="text-gray-700">{item.comment}</p>
                                    </div>
                                    <div>
                                        {item.approved ? (
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                                Approved
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                                                Pending
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex space-x-2 pt-4 border-t border-gray-200">
                                    {!item.approved && (
                                        <button
                                            onClick={() => handleApprove(item.id)}
                                            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                        >
                                            <CheckCircle size={18} />
                                            <span>Approve for Homepage</span>
                                        </button>
                                    )}
                                    {item.approved && (
                                        <button
                                            onClick={() => handleReject(item.id)}
                                            className="flex items-center space-x-2 px-4 py-2 bg-orange-50 text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-100"
                                        >
                                            <XCircle size={18} />
                                            <span>Unapprove</span>
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100"
                                    >
                                        <Trash2 size={18} />
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackManagement
