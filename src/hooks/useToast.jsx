import React, { useState, useCallback } from 'react'
import Toast from '../components/ui/Toast'

const useToast = () => {
    const [toasts, setToasts] = useState([])

    const showToast = useCallback((message, type = 'info', duration = 3000) => {
        const id = Date.now()
        setToasts(prev => [...prev, { id, message, type, duration }])
    }, [])

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }, [])

    const ToastComponent = () => (
        <div className="fixed bottom-8 right-8 z-[200] space-y-3">
            {toasts.map(toast => (
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

    return { showToast, ToastComponent }
}

export default useToast
