import React, { useEffect } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import MissionVision from '../components/about/MissionVision'
import PhilosophySection from '../components/about/PhilosophySection'
import { Activity, Globe, Heart } from 'lucide-react'

const AboutUs = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[95vh] min-h-[800px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2070&auto=format&fit=crop"
                        alt="Yoga Community"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                </div>
                <div className="container-custom relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-slide-up">
                        More Than A Studio. <br />
                        <span className="text-yoga-sage-300">A Sanctuary.</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-100 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Connecting you to your highest self, anywhere, anytime.
                    </p>
                </div>
            </section>

            {/* About Anytime Yoga (Story) */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <span className="text-yoga-sage-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
                                From a Local Studio to a <span className="text-yoga-lavender-500">Global Movement</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Anytime Yoga began with a simple observation: the people who needed yoga the most—the busy parents, the stressed executives, the students—were the ones who couldn't make it to the studio.
                                </p>
                                <p>
                                    We realized that for wellness to be truly effective, it had to be accessible. It had to fit into the messy, beautiful, chaotic reality of modern life.
                                </p>
                                <p>
                                    So, we closed our physical doors to open a digital window. We gathered the world's most compassionate teachers and built a platform that brings the sanctity of the studio directly into your living room.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop"
                                    alt="Home Practice"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                                    alt="Outdoor Yoga"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <MissionVision />

            {/* What Makes Us Different */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why We Are Different</h2>
                        <p className="text-gray-400 text-lg">
                            We aren't just another fitness app. We are a holistic ecosystem designed to support your entire well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 bg-yoga-sage-500/20 rounded-xl flex items-center justify-center mb-6 text-yoga-sage-300">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Live Correction</h3>
                            <p className="text-gray-400">
                                Unlike static videos, our interactive sessions offer real-time feedback cues to ensure your alignment is safe and effective.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 bg-yoga-lavender-500/20 rounded-xl flex items-center justify-center mb-6 text-yoga-lavender-300">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Holistic Approach</h3>
                            <p className="text-gray-400">
                                We treat the whole person. Our library integrates physical asana, breathwork, meditation, and nutritional guidance.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 bg-yoga-peach-500/20 rounded-xl flex items-center justify-center mb-6 text-yoga-peach-300">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Global Community</h3>
                            <p className="text-gray-400">
                                Join a vibrant network of practitioners from over 50 countries. Share your journey, find accountability, and grow together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teacher Philosophy */}
            <PhilosophySection />

            {/* <Footer /> */}
        </div>
    )
}

export default AboutUs
