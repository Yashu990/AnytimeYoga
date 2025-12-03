import React from 'react'
import { Target, Eye } from 'lucide-react'

const MissionVision = () => {
    return (
        <section className="py-20 bg-yoga-sage-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yoga-sage-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yoga-lavender-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

                    {/* Mission Card */}
                    <div className="bg-white/60 backdrop-blur-lg border border-white/50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-14 h-14 bg-yoga-sage-100 rounded-2xl flex items-center justify-center mb-6 text-yoga-sage-600">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To democratize wellness by making world-class yoga instruction accessible to everyone,
                            regardless of location, schedule, or experience level. We believe that health is a
                            fundamental right, not a luxury.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white/60 backdrop-blur-lg border border-white/50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-14 h-14 bg-yoga-lavender-100 rounded-2xl flex items-center justify-center mb-6 text-yoga-lavender-600">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A world where inner peace is a daily habit, not a distant goal. We envision a global
                            community connected by breath, movement, and a shared commitment to personal growth
                            and collective well-being.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MissionVision
