import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Calendar,
    DollarSign,
    MessageSquare,
    LogOut,
    X
} from 'lucide-react'

const AdminSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('adminAuth')
        navigate('/admin/login')
    }

    const menuItems = [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/users', icon: Users, label: 'User Management' },
        { path: '/admin/teachers', icon: GraduationCap, label: 'Teacher Management' },
        { path: '/admin/schedules', icon: Calendar, label: 'All Schedules' },
        { path: '/admin/payments', icon: DollarSign, label: 'Payment History' },
        { path: '/admin/feedback', icon: MessageSquare, label: 'Feedback Management' }
    ]

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-yoga-sage-400 to-yoga-lavender-400 rounded-lg flex items-center justify-center">
                                    <span className="text-xl">👑</span>
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg">Admin Panel</h2>
                                    <p className="text-xs text-gray-400">Anytime Yoga</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => onClose()}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-yoga-sage-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                    }`
                                }
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t border-gray-800">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
                        >
                            <LogOut size={20} />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default AdminSidebar
