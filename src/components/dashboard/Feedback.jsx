import React, { useState } from 'react'
import { Star, Send } from 'lucide-react'
import Button from '../ui/Button'

const Feedback = () => {
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)

    return (
        <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">We Value Your Feedback</h2>
                    <p className="text-gray-600">Help us improve your experience at Anytime Yoga.</p>
                </div>

                <form className="space-y-6">
                    {/* Star Rating */}
                    <div className="flex flex-col items-center space-y-3">
                        <label className="text-sm font-medium text-gray-700">How would you rate your last session?</label>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star
                                        size={32}
                                        className={`${star <= (hoverRating || rating)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                            } transition-colors`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Comment Area */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Share your thoughts</label>
                        <textarea
                            rows="4"
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yoga-sage-400 resize-none bg-gray-50"
                            placeholder="Tell us what you liked or how we can improve..."
                        ></textarea>
                    </div>

                    <Button className="w-full justify-center">
                        <span className="flex items-center space-x-2">
                            <span>Submit Feedback</span>
                            <Send size={18} />
                        </span>
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Feedback
