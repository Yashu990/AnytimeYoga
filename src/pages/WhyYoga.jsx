import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../layouts/Header'


import ComparisonSection from '../components/whyyoga/ComparisonSection'
import FitnessWellnessSection from '../components/home/FitnessWellnessSection'
import Button from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'

const WhyYoga = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[95vh] min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/why-yoga-hero.png"
                        alt="Meditation Mandala Energy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
                </div>

                <div className="container-custom relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-slide-up">
                        The Science of <span className="text-yoga-sage-300">Serenity</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Discover how ancient wisdom meets modern wellness to transform your life from the inside out.
                    </p>
                </div>
            </section>



            {/* Complete Harmony Section */}
            <FitnessWellnessSection />

            {/* Daily Wellness / Quote Section */}
            <section className="py-20 bg-gradient-to-br from-[#4a0f0f] via-[#d94b3d] to-[#0d0a0f] text-white text-center">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                        "Yoga is not about touching your toes. It is about what you learn on the way down."
                    </h2>
                    <p className="text-[#ffb347] text-lg italic">— Jigar Gor</p>
                </div>
            </section>

            {/* Comparison Section */}
            <ComparisonSection />

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-b from-white via-[#fff5f0] to-white text-center">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to find your balance?</h2>
                    <p className="text-xl text-gray-600 mb-10">Join thousands of others who have made the choice for a healthier, happier life.</p>
                    <Link to="/free-trial">
                        <Button size="large" className="bg-gradient-to-r from-[#ff6b35] to-[#ffb347] hover:from-[#ffb347] hover:to-[#ff6b35] shadow-xl shadow-[#ff6b35]/30">
                            <span className="flex items-center space-x-2">
                                <span>Start Your Free Trial</span>
                                <ArrowRight size={20} />
                            </span>
                        </Button>
                    </Link>
                </div>
            </section>


        </div>
    )
}

export default WhyYoga
