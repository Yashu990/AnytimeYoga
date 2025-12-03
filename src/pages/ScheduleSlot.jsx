import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, X } from 'lucide-react'
import Header from '../layouts/Header'
import DatePicker from '../components/booking/DatePicker'
import TimeSlots from '../components/booking/TimeSlots'
import BookingSummary from '../components/booking/BookingSummary'
import Button from '../components/ui/Button'

const ScheduleSlot = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedYogaType, setSelectedYogaType] = useState('')
    const [showConfirmation, setShowConfirmation] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const yogaTypes = [
        'Vinyasa',
        'Hatha',
        'Yin',
        'Kundalini',
        'Power Yoga',
        'Meditation'
    ]

    const handleConfirmBooking = () => {
        const bookingId = 'BK' + Date.now()
        // Navigate to payment page with booking details
        navigate(`/payment/${bookingId}`, {
            state: {
                booking: {
                    id: bookingId,
                    date: selectedDate,
                    time: selectedTime.time,
                    yogaType: selectedYogaType,
                    instructor: selectedTime.instructor,
                    duration: '60 min',
                    price: 25
                }
            }
        })
    }

    const handleViewBookings = () => {
        navigate('/dashboard')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-yoga-sage-100 via-yoga-lavender-50 to-white py-16 pt-24">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        Schedule Your Practice
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose your perfect time and style. We'll notify you once your instructor approves.
                    </p>
                </div>
            </section>

            {/* Booking Section */}
            <section className="py-12 -mt-8">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Form */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Step 1: Date Selection */}
                            <div>
                                <div className="mb-4">
                                    <span className="inline-block bg-yoga-sage-100 text-yoga-sage-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                                        Step 1
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900">Select Date</h3>
                                </div>
                                <DatePicker selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                            </div>

                            {/* Step 2: Time Selection */}
                            <div>
                                <div className="mb-4">
                                    <span className="inline-block bg-yoga-lavender-100 text-yoga-lavender-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                                        Step 2
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900">Choose Time Slot</h3>
                                </div>
                                <TimeSlots
                                    selectedDate={selectedDate}
                                    selectedTime={selectedTime}
                                    onTimeSelect={setSelectedTime}
                                />
                            </div>

                            {/* Step 3: Yoga Type Selection */}
                            <div>
                                <div className="mb-4">
                                    <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                                        Step 3
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900">Select Yoga Type</h3>
                                </div>
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {yogaTypes.map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setSelectedYogaType(type)}
                                                className={`
                          p-4 rounded-xl border-2 font-medium transition-all text-center
                          ${selectedYogaType === type
                                                        ? 'border-yoga-sage-500 bg-yoga-sage-50 text-yoga-sage-700'
                                                        : 'border-gray-200 hover:border-yoga-sage-300 hover:bg-gray-50 text-gray-700'
                                                    }
                        `}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Summary */}
                        <div className="lg:col-span-1">
                            <BookingSummary
                                selectedDate={selectedDate}
                                selectedTime={selectedTime}
                                selectedYogaType={selectedYogaType}
                                onConfirm={handleConfirmBooking}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slide-up relative">
                        <button
                            onClick={() => setShowConfirmation(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Submitted!</h3>
                            <p className="text-gray-600">
                                Your session request is now <span className="font-bold text-orange-600">Pending Approval</span>
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm text-gray-600">
                            <p className="mb-2">
                                ✉️ You'll receive an email notification once <span className="font-medium">{selectedTime?.instructor}</span> approves your booking.
                            </p>
                            <p>
                                ⏱️ This usually takes less than 2 hours during business hours.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Button className="w-full justify-center" onClick={handleViewBookings}>
                                View My Bookings
                            </Button>
                            <button
                                onClick={() => {
                                    setShowConfirmation(false)
                                    setSelectedDate(null)
                                    setSelectedTime(null)
                                    setSelectedYogaType('')
                                }}
                                className="w-full py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                            >
                                Book Another Session
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ScheduleSlot
