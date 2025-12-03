import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Clock } from 'lucide-react'
import Header from '../layouts/Header'
import { benefitDetails } from '../data/benefitDetails'

const BenefitDetail = () => {
    const { id } = useParams()
    const benefit = benefitDetails.find(b => b.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!benefit) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefit Not Found</h2>
                    <Link to="/" className="text-yoga-sage-600 hover:underline">Return Home</Link>
                </div>
            </div>
        )
    }

    const isPeach = benefit.colorTheme === 'peach'
    const themeColor = isPeach ? 'text-yoga-peach-600' : 'text-yoga-lavender-600'
    const themeBg = isPeach ? 'bg-yoga-peach-50' : 'bg-yoga-lavender-50'
    const themeBorder = isPeach ? 'border-yoga-peach-200' : 'border-yoga-lavender-200'
    const themeGradient = isPeach
        ? 'from-yoga-peach-500 to-yoga-peach-600'
        : 'from-yoga-lavender-500 to-yoga-lavender-600'

    return (
        <div className="min-h-screen bg-white animate-fade-in">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
                    <div className="container-custom">
                        <Link to="/why-yoga" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Benefits
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">{benefit.title}</h1>
                        <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">{benefit.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="container-custom py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className={`text-3xl font-bold mb-6 ${themeColor}`}>About {benefit.title}</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {benefit.description}
                            </p>
                        </section>

                        {/* Actionable Steps */}
                        <section>
                            <h2 className={`text-3xl font-bold mb-8 ${themeColor}`}>How to Achieve It</h2>
                            <div className="space-y-6">
                                {benefit.steps.map((step, index) => (
                                    <div key={index} className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br ${themeGradient}`}>
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                            <p className="text-gray-600 mb-3">{step.description}</p>
                                            <div className="flex items-center text-sm text-gray-500 font-medium">
                                                <Clock size={16} className="mr-2" />
                                                {step.duration}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Tips */}
                    <div className="lg:col-span-1">
                        <div className={`${themeBg} rounded-3xl p-8 border ${themeBorder} sticky top-24`}>
                            <h3 className={`text-2xl font-bold mb-6 ${themeColor}`}>Pro Tips</h3>
                            <ul className="space-y-4">
                                {benefit.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle size={20} className={`mr-3 mt-1 flex-shrink-0 ${themeColor}`} />
                                        <span className="text-gray-700 font-medium leading-snug">{tip}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-8 border-t border-gray-200/50">
                                <h4 className="font-bold text-gray-800 mb-4">Ready to start?</h4>
                                <button className={`w-full py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r ${themeGradient}`}>
                                    Book a Session
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitDetail
