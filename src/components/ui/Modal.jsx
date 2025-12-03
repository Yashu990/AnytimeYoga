import React, { useEffect } from 'react'
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    type = 'info', // 'info', 'success', 'warning', 'error', 'confirmation'
    onConfirm,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    showActions = true,
    size = 'md' // 'sm', 'md', 'lg'
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl'
    }

    const typeConfig = {
        info: { icon: Info, color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
        success: { icon: CheckCircle, color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-600' },
        warning: { icon: AlertTriangle, color: 'orange', bgColor: 'bg-orange-100', textColor: 'text-orange-600' },
        error: { icon: AlertCircle, color: 'red', bgColor: 'bg-red-100', textColor: 'text-red-600' },
        confirmation: { icon: AlertCircle, color: 'yoga-sage', bgColor: 'bg-yoga-sage-100', textColor: 'text-yoga-sage-600' }
    }

    const config = typeConfig[type] || typeConfig.info
    const IconComponent = config.icon

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className={`relative bg-white rounded-2xl shadow-2xl ${sizeClasses[size]} w-full mx-4 animate-slide-up`}>
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${config.bgColor} rounded-full flex items-center justify-center`}>
                            <IconComponent className={config.textColor} size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {children}
                </div>

                {/* Actions */}
                {showActions && (
                    <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
                        >
                            {cancelText}
                        </button>
                        {onConfirm && (
                            <button
                                onClick={() => {
                                    onConfirm()
                                    onClose()
                                }}
                                className={`px-6 py-2.5 bg-${config.color}-600 text-white rounded-lg hover:bg-${config.color}-700 transition-colors font-medium`}
                            >
                                {confirmText}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal
