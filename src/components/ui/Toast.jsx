import React, { useEffect, useState } from 'react'
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react'

const Toast = ({
    message,
    type = 'info', // 'success', 'error', 'warning', 'info'
    duration = 3000,
    onClose
}) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onClose, 300) // Wait for animation to complete
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    const typeConfig = {
        success: {
            icon: CheckCircle,
            bgColor: 'bg-green-600',
            textColor: 'text-white'
        },
        error: {
            icon: AlertCircle,
            bgColor: 'bg-red-600',
            textColor: 'text-white'
        },
        warning: {
            icon: AlertTriangle,
            bgColor: 'bg-orange-600',
            textColor: 'text-white'
        },
        info: {
            icon: Info,
            bgColor: 'bg-blue-600',
            textColor: 'text-white'
        }
    }

    const config = typeConfig[type] || typeConfig.info
    const IconComponent = config.icon

    return (
        <div
            className={`
        fixed bottom-8 right-8 z-[200]
        ${config.bgColor} ${config.textColor}
        px-6 py-4 rounded-xl shadow-2xl
        flex items-center space-x-3
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        max-w-md
      `}
        >
            <IconComponent size={24} className="flex-shrink-0" />
            <span className="font-medium flex-grow">{message}</span>
            <button
                onClick={() => {
                    setIsVisible(false)
                    setTimeout(onClose, 300)
                }}
                className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
                <X size={18} />
            </button>
        </div>
    )
}

// Toast Container Component
export const ToastContainer = ({ toasts, removeToast }) => {
    return (
        <div className="fixed bottom-8 right-8 z-[200] space-y-3">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    )
}

// Hook for using toasts
export const useToast = () => {
    const [toasts, setToasts] = useState([])

    const addToast = (message, type = 'info', duration = 3000) => {
        const id = Date.now()
        setToasts((prev) => [...prev, { id, message, type, duration }])
    }

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }

    return { toasts, addToast, removeToast }
}

export default Toast
