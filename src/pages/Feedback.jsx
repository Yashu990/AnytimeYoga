import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Send, CheckCircle } from 'lucide-react'
import Header from '../layouts/Header'
import Button from '../components/ui/Button'

const Feedback = () => {
    const navigate = useNavigate()
    const [rating, setRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)
    const [feedback, setFeedback] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (rating === 0 || !feedback.trim()) {
            alert('Please provide both a rating and feedback')
            return
        }

        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setShowSuccess(true)

            // Reset form after 3 seconds
            setTimeout(() => {
                setShowSuccess(false)
                setRating(0)
                setFeedback('')
            }, 3000)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-yoga-lavender-100 via-white to-yoga-sage-50 py-16 pt-24">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        Share Your Experience
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your feedback helps us improve and inspire others on their wellness journey
                    </p>
                </div>
            </section>

            {/* Feedback Form */}
            <section className="py-12 -mt-8">
                <div className="container-custom max-w-2xl">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                        <form onSubmit={handleSubmit}>
                            {/* Rating Section */}
                            <div className="mb-8">
                                <label className="block text-lg font-bold text-gray-900 mb-4">
                                    How would you rate your experience?
                                </label>
                                <div className="flex justify-center space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="transition-transform hover:scale-110 focus:outline-none"
                                        >
                                            <Star
                                                size={48}
                                                className={`${star <= (hoveredRating || rating)
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-gray-300'
                                                    } transition-colors`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                {rating > 0 && (
                                    <p className="text-center mt-3 text-gray-600">
                                        {rating === 1 && "We'll do better"}
                                        {rating === 2 && "Thanks for your feedback"}
                                        {rating === 3 && "Good to know!"}
                                        {rating === 4 && "Great! Glad you enjoyed it"}
                                        {rating === 5 && "Excellent! We're thrilled!"}
                                    </p>
                                )}
                            </div>

                            {/* Feedback Text */}
                            <div className="mb-8">
                                <label className="block text-lg font-bold text-gray-900 mb-4">
                                    Tell us more about your experience
                                </label>
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    placeholder="Share what you loved, or what we could improve..."
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yoga-sage-400 resize-none"
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                    {feedback.length}/500 characters
                                </p>
                            </div>

                            {/* Info Box */}
                            <div className="bg-yoga-lavender-50 border border-yoga-lavender-200 rounded-xl p-4 mb-6">
                                <p className="text-sm text-gray-700">
                                    ✨ Your feedback will be reviewed by our team. Approved testimonials may be featured on our homepage to inspire others!
                                </p>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full justify-center"
                                disabled={isSubmitting || rating === 0 || !feedback.trim()}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Submitting...</span>
                                    </span>
                                ) : (
                                    <span className="flex items-center space-x-2">
                                        <Send size={18} />
                                        <span>Submit Feedback</span>
                                    </span>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                            <p className="text-gray-600 mb-4">
                                Your feedback has been submitted successfully
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                                <p>
                                    Our team will review your feedback. If approved, it may appear in our testimonials section!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Feedback
