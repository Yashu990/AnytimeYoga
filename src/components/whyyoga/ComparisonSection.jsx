import React from 'react'
import { Clock, Coffee, Smartphone, AlertCircle, Feather, Sun, Droplets, Smile } from 'lucide-react'

const ComparisonSection = () => {
    return (
        <section className="section-padding bg-gray-50 overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">The Choice is Yours</h2>
                    <p className="text-xl text-gray-600">See the difference a daily practice makes in your life.</p>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">

                    {/* Left Side: The Rush (Busy) */}
                    <div className="md:w-1/2 bg-gray-100 relative p-8 md:p-12 flex flex-col justify-center border-r border-gray-200 group transition-all duration-500 hover:bg-gray-200">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

                        <div className="relative z-10 text-center md:text-right">
                            <div className="inline-block p-3 rounded-full bg-red-100 text-red-600 mb-6">
                                <AlertCircle size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">The Daily Rush</h3>
                            <p className="text-gray-500 mb-8 font-medium">Stress. Fatigue. Burnout.</p>

                            <div className="space-y-6 flex flex-col items-center md:items-end">
                                <div className="flex items-center space-x-4 text-gray-600 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <span className="text-lg">Constant Notifications</span>
                                    <Smartphone size={24} />
                                </div>
                                <div className="flex items-center space-x-4 text-gray-600 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <span className="text-lg">Rushed Mornings</span>
                                    <Clock size={24} />
                                </div>
                                <div className="flex items-center space-x-4 text-gray-600 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <span className="text-lg">Caffeine Dependency</span>
                                    <Coffee size={24} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Flow (Balance) */}
                    <div className="md:w-1/2 bg-gradient-to-br from-yoga-sage-50 to-yoga-lavender-50 relative p-8 md:p-12 flex flex-col justify-center group transition-all duration-500 hover:from-yoga-sage-100 hover:to-yoga-lavender-100">
                        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        <div className="relative z-10 text-center md:text-left">
                            <div className="inline-block p-3 rounded-full bg-yoga-sage-200 text-yoga-sage-700 mb-6 shadow-sm">
                                <Sun size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">The Yoga Balance</h3>
                            <p className="text-yoga-sage-700 mb-8 font-medium">Clarity. Energy. Peace.</p>

                            <div className="space-y-6 flex flex-col items-center md:items-start">
                                <div className="flex items-center space-x-4 text-gray-700 group-hover:translate-x-2 transition-transform duration-300">
                                    <Feather size={24} className="text-yoga-lavender-500" />
                                    <span className="text-lg">Mindful Presence</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                    <Droplets size={24} className="text-blue-400" />
                                    <span className="text-lg">Natural Energy</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                                    <Smile size={24} className="text-yellow-500" />
                                    <span className="text-lg">Inner Calm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Divider/Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-16 h-16 bg-white rounded-full items-center justify-center shadow-lg text-gray-400 font-bold text-sm border-4 border-gray-50">
                        VS
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ComparisonSection
