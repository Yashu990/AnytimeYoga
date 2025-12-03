import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const DatePicker = ({ selectedDate, onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const firstDayOfMonth = new Date(year, month, 1).getDay()

        const days = []
        // Add empty cells for days before month starts
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(null)
        }
        // Add actual days
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day))
        }
        return days
    }

    const isToday = (date) => {
        if (!date) return false
        const today = new Date()
        return date.toDateString() === today.toDateString()
    }

    const isPast = (date) => {
        if (!date) return false
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date < today
    }

    const isSelected = (date) => {
        if (!date || !selectedDate) return false
        return date.toDateString() === selectedDate.toDateString()
    }

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    }

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    }

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <div className="flex space-x-2">
                    <button
                        onClick={handlePrevMonth}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 gap-2 mb-2">
                {dayNames.map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
                {getDaysInMonth(currentMonth).map((date, index) => (
                    <button
                        key={index}
                        onClick={() => date && !isPast(date) && onDateSelect(date)}
                        disabled={!date || isPast(date)}
                        className={`
              aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all
              ${!date ? 'invisible' : ''}
              ${isPast(date) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-yoga-sage-50'}
              ${isSelected(date) ? 'bg-yoga-sage-500 text-white hover:bg-yoga-sage-600' : ''}
              ${isToday(date) && !isSelected(date) ? 'border-2 border-yoga-sage-300' : ''}
              ${!isPast(date) && !isSelected(date) ? 'text-gray-700' : ''}
            `}
                    >
                        {date ? date.getDate() : ''}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DatePicker
