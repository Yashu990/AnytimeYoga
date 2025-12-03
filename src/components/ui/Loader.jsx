import React from 'react'

// Spinner Loader
export const Spinner = ({ size = 'md', color = 'yoga-sage' }) => {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-2',
        lg: 'w-12 h-12 border-3',
        xl: 'w-16 h-16 border-4'
    }

    const colors = {
        'yoga-sage': 'border-yoga-sage-600 border-t-transparent',
        'yoga-lavender': 'border-yoga-lavender-600 border-t-transparent',
        white: 'border-white border-t-transparent',
        blue: 'border-blue-600 border-t-transparent',
        green: 'border-green-600 border-t-transparent'
    }

    return (
        <div
            className={`
        ${sizes[size]} 
        ${colors[color]}
        rounded-full 
        animate-spin
      `}
        />
    )
}

// Dots Loader
export const DotsLoader = ({ color = 'yoga-sage' }) => {
    const colors = {
        'yoga-sage': 'bg-yoga-sage-600',
        'yoga-lavender': 'bg-yoga-lavender-600',
        blue: 'bg-blue-600',
        green: 'bg-green-600'
    }

    return (
        <div className="flex space-x-2">
            <div className={`w-2 h-2 ${colors[color]} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
            <div className={`w-2 h-2 ${colors[color]} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
            <div className={`w-2 h-2 ${colors[color]} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
        </div>
    )
}

// Pulse Loader
export const PulseLoader = ({ size = 'md' }) => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    }

    return (
        <div className="relative">
            <div className={`${sizes[size]} bg-gradient-to-br from-yoga-sage-400 to-yoga-lavender-400 rounded-full animate-ping opacity-75`} />
            <div className={`${sizes[size]} bg-gradient-to-br from-yoga-sage-400 to-yoga-lavender-400 rounded-full absolute top-0 left-0`} />
        </div>
    )
}

// Full Page Loader
export const PageLoader = ({ message = 'Loading...' }) => {
    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[300] flex flex-col items-center justify-center">
            <PulseLoader size="lg" />
            <p className="mt-6 text-gray-700 font-medium text-lg">{message}</p>
        </div>
    )
}

// Skeleton Loader
export const Skeleton = ({ width = 'full', height = '4', className = '' }) => {
    return (
        <div
            className={`
        bg-gray-200 rounded animate-pulse
        ${width === 'full' ? 'w-full' : width}
        h-${height}
        ${className}
      `}
        />
    )
}

// Default export
const Loader = Spinner

export default Loader
