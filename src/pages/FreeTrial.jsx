import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Send } from 'lucide-react'
import Header from '../layouts/Header'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import useToast from '../hooks/useToast'

const FreeTrial = () => {
    const { showToast, ToastComponent } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'General Yoga',
        goal: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        showToast('Inquiry sent successfully! We will contact you soon.', 'success')

        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            interest: 'General Yoga',
            goal: '',
            message: ''
        })
    }

    return (
        <div className="min-h-screen bg-white animate-fade-in">
            <Header />
            <ToastComponent />

            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
                {/* Left Side - Image & Content */}
                <div className="lg:w-1/2 bg-yoga-sage-900 relative overflow-hidden text-white p-12 flex flex-col justify-center">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                            alt="Yoga Practice"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-yoga-sage-900/90 to-yoga-sage-900/60"></div>
                    </div>

                    <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
                        <Link to="/" className="inline-flex items-center text-yoga-sage-200 hover:text-white mb-8 transition-colors">
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Home
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Start Your Journey to <br />
                            <span className="text-yoga-peach-300">Inner Peace</span>
                        </h1>

                        <p className="text-lg text-yoga-sage-100 mb-10 leading-relaxed">
                            Join our community and discover the transformative power of yoga.
                            Fill out the form to schedule your free trial session and consultation.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-yoga-peach-300">
                                    <CheckCircle size={20} />
                                </div>
                                <span className="text-lg">Personalized wellness assessment</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-yoga-peach-300">
                                    <CheckCircle size={20} />
                                </div>
                                <span className="text-lg">One-on-one consultation</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-yoga-peach-300">
                                    <CheckCircle size={20} />
                                </div>
                                <span className="text-lg">Access to all beginner classes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 bg-white flex items-center justify-center">
                    <div className="w-full max-w-lg">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started Today</h2>
                            <p className="text-gray-600">Tell us a bit about yourself and your goals.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Jane"
                                    required
                                />
                                <Input
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    required
                                />
                            </div>

                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jane@example.com"
                                required
                            />

                            <Input
                                label="Phone Number"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                            />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">I'm interested in...</label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yoga-sage-400 focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="General Yoga">General Yoga</option>
                                    <option value="Weight Loss">Weight Loss</option>
                                    <option value="Flexibility">Flexibility</option>
                                    <option value="Meditation">Meditation & Mindfulness</option>
                                    <option value="Prenatal Yoga">Prenatal Yoga</option>
                                    <option value="Teacher Training">Teacher Training</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Main Goal</label>
                                <textarea
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yoga-sage-400 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="What do you hope to achieve?"
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-4 text-lg shadow-xl shadow-yoga-sage-200"
                                isLoading={isLoading}
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <span>Request Free Trial</span>
                                    <Send size={18} />
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeTrial
