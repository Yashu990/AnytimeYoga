import React from 'react'

const Card = ({
    children,
    title,
    subtitle,
    icon: Icon,
    footer,
    coverImage,
    variant = 'default', // 'default', 'gradient', 'glass', 'bordered'
    hover = false,
    className = ''
}) => {
    const variants = {
        default: 'bg-white border border-gray-200',
        gradient: 'bg-gradient-to-br from-yoga-sage-50 to-yoga-lavender-50 border border-gray-200',
        glass: 'glass-effect border border-white/50',
        bordered: 'bg-white border-2 border-yoga-sage-200'
    }

    return (
        <div
            className={`
        rounded-xl shadow-sm
        ${variants[variant]}
        ${hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''}
        overflow-hidden
        ${className}
      `}
        >
            {coverImage && (
                <div className="h-48 w-full overflow-hidden relative group">
                    <img
                        src={coverImage}
                        alt={title || 'Card cover'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
            )}

            {(title || subtitle || Icon) && (
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start space-x-3">
                        {Icon && (
                            <div className="w-10 h-10 bg-gradient-to-br from-yoga-sage-400 to-yoga-lavender-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                <Icon size={20} />
                            </div>
                        )}
                        <div className="flex-grow">
                            {title && (
                                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                            )}
                            {subtitle && (
                                <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="p-6">
                {children}
            </div>

            {footer && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    {footer}
                </div>
            )}
        </div>
    )
}

// Stat Card Component
export const StatCard = ({ title, value, change, icon: Icon, color = 'blue' }) => {
    const colorClasses = {
        blue: 'from-blue-400 to-blue-500',
        green: 'from-green-400 to-green-500',
        orange: 'from-orange-400 to-orange-500',
        purple: 'from-purple-400 to-purple-500',
        red: 'from-red-400 to-red-500'
    }

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 text-sm font-medium">{title}</p>
                {Icon && (
                    <div className={`w-10 h-10 bg-gradient-to-br ${colorClasses[color]} rounded-lg flex items-center justify-center text-white`}>
                        <Icon size={20} />
                    </div>
                )}
            </div>
            <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                {change !== undefined && (
                    <p className={`text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {change >= 0 ? '+' : ''}{change}%
                    </p>
                )}
            </div>
        </div>
    )
}

export default Card
