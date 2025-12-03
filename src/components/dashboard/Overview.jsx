import React from 'react'
import { Calendar, Clock, Activity } from 'lucide-react'

const Overview = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yoga-sage-100 rounded-xl flex items-center justify-center text-yoga-sage-600">
                        <Activity size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Classes Attended</p>
                        <h3 className="text-2xl font-bold text-gray-900">12</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yoga-lavender-100 rounded-xl flex items-center justify-center text-yoga-lavender-600">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Minutes Practiced</p>
                        <h3 className="text-2xl font-bold text-gray-900">720</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Current Streak</p>
                        <h3 className="text-2xl font-bold text-gray-900">5 Days</h3>
                    </div>
                </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">Upcoming Sessions</h3>
                    <button className="text-sm text-yoga-sage-600 font-medium hover:text-yoga-sage-700">View All</button>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        {/* Session Item */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-yoga-sage-50 transition-colors cursor-pointer group">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop" alt="Class" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-yoga-sage-700 transition-colors">Morning Vinyasa Flow</h4>
                                    <p className="text-sm text-gray-500">Tomorrow, 8:00 AM • with Sarah J.</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Confirmed</span>
                        </div>

                        {/* Session Item */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-yoga-sage-50 transition-colors cursor-pointer group">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop" alt="Class" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-yoga-sage-700 transition-colors">Yin Yoga for Sleep</h4>
                                    <p className="text-sm text-gray-500">Wed, 9:00 PM • with Michael R.</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Confirmed</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent History */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">Recent History</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div>
                                <h4 className="font-medium text-gray-900">Power Yoga</h4>
                                <p className="text-xs text-gray-500">Yesterday • 60 min</p>
                            </div>
                            <span className="text-sm text-gray-500">Completed</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div>
                                <h4 className="font-medium text-gray-900">Meditation Basics</h4>
                                <p className="text-xs text-gray-500">2 days ago • 30 min</p>
                            </div>
                            <span className="text-sm text-gray-500">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
