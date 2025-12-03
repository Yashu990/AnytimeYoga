import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Clock, Activity } from 'lucide-react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Button from '../components/ui/Button'
import { yogaDetails } from '../data/yogaDetails'

const YogaDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const detail = yogaDetails[id]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!detail) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Not Found</h2>
                    <Button onClick={() => navigate('/')}>Return Home</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={detail.image}
                        alt={detail.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
                </div>

                <div className="container-custom relative z-10 text-center text-white px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Practices</span>
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 animate-slide-up">
                        {detail.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-yoga-sage-200 font-medium mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {detail.subtitle}
                    </p>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {detail.description}
                    </p>
                </div>
            </section>

            <div className="container-custom py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Benefits */}
                    <div className="lg:col-span-1">
                        <div className="bg-yoga-sage-50 rounded-3xl p-8 sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <Activity className="mr-3 text-yoga-sage-600" />
                                Key Benefits
                            </h3>
                            <ul className="space-y-4">
                                {detail.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <CheckCircle size={20} className="text-yoga-sage-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-yoga-sage-200">
                                <Link to="/schedule">
                                    <Button className="w-full justify-center shadow-lg">
                                        Book a Session
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Steps */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">How to Practice</h2>

                        <div className="space-y-6">
                            {detail.steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 bg-yoga-lavender-100 text-yoga-lavender-700 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 mr-6">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pro Tip Box */}
                        <div className="mt-12 bg-gradient-to-r from-yoga-sage-500 to-yoga-lavender-500 rounded-3xl p-8 text-white shadow-xl">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">💡</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Teacher's Tip</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        Consistency is key. Even 5 minutes of practice is better than none. Listen to your body and never push beyond your limits. Yoga is a journey of self-love, not self-punishment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default YogaDetail
