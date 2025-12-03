import React from 'react'
import { CheckCircle2, User, Calendar, Clock, Activity } from 'lucide-react'

const CompletedSessions = ({ sessions }) => {
    if (sessions.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-gray-400" />
                </div>
                <p className="text-gray-500">No completed sessions yet</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {sessions.map((session) => (
                <div key={session.id} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex-grow">
                            <div className="flex items-center space-x-2 mb-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <User size={20} className="text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{session.userName}</h3>
                                    <p className="text-sm text-gray-500">{session.userEmail}</p>
                                </div>
                                <span className="ml-auto px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full flex items-center space-x-1">
                                    <CheckCircle2 size={12} />
                                    <span>Completed</span>
                                </span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Session Type</p>
                                    <div className="flex items-center space-x-1">
                                        <Activity size={14} className="text-gray-600" />
                                        <p className="font-medium text-gray-900 text-sm">{session.yogaType}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Session Date</p>
                                    <div className="flex items-center space-x-1">
                                        <Calendar size={14} className="text-gray-600" />
                                        <p className="font-medium text-gray-900 text-sm">{new Date(session.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Time</p>
                                    <div className="flex items-center space-x-1">
                                        <Clock size={14} className="text-gray-600" />
                                        <p className="font-medium text-gray-900 text-sm">{session.time}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Completed On</p>
                                    <p className="font-medium text-gray-900 text-sm">
                                        {session.completedDate ? new Date(session.completedDate).toLocaleDateString() : 'N/A'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CompletedSessions
