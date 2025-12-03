import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const StatsCard = ({ title, value, change, icon: Icon, color = 'blue' }) => {
    const isPositive = change >= 0

    const colorClasses = {
        blue: 'from-blue-400 to-blue-600',
        green: 'from-green-400 to-green-600',
        orange: 'from-orange-400 to-orange-600',
        purple: 'from-purple-400 to-purple-600',
        pink: 'from-pink-400 to-pink-600'
    }

    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-gray-500 text-sm mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                </div>
            </div>
            {change !== undefined && (
                <div className="flex items-center space-x-1">
                    {isPositive ? (
                        <TrendingUp size={16} className="text-green-600" />
                    ) : (
                        <TrendingDown size={16} className="text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {isPositive ? '+' : ''}{change}%
                    </span>
                    <span className="text-gray-500 text-sm">vs last month</span>
                </div>
            )}
        </div>
    )
}

export default StatsCard
