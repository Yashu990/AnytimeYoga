import React, { useEffect } from 'react'
import Header from '../layouts/Header'
import YogaStyleSection from '../components/benefits/YogaStyleSection'
import FAQSection from '../components/benefits/FAQSection'
import Button from '../components/ui/Button'
import { ArrowRight, Compass, Sparkles } from 'lucide-react'

const FitnessBenefits = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/benefits-hero.jpg"
                        alt="Cosmic Meditation Energy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/30 to-black/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                </div>

                <div className="container-custom relative z-10 text-center px-6 mt-20">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white mb-8 animate-fade-in shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        <Sparkles size={18} className="text-yellow-200" />
                        <span className="text-sm font-medium tracking-wide">Awaken Your Potential</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 animate-slide-up leading-tight drop-shadow-2xl">
                        Journey Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 filter drop-shadow-lg">The Infinite</span>
                    </h1>

                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-indigo-100 mb-12 animate-slide-up leading-relaxed font-light" style={{ animationDelay: '0.1s' }}>
                        From the physical to the spiritual. Discover practices that align your body, mind, and cosmic energy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <Button size="large" className="bg-white text-indigo-900 hover:bg-indigo-50 shadow-[0_0_20px_rgba(255,255,255,0.4)] border-none">
                            Start Your Journey
                        </Button>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 text-center bg-gradient-to-b from-[#0d0a0f] via-[#4a0f0f] to-white text-white">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl font-display font-bold mb-6">Beyond the Physical</h2>
                    <p className="text-lg text-gray-300">
                        Yoga is a vast ocean. While some styles sculpt the body, others awaken the spirit.
                        Explore the full spectrum of practice available to you.
                    </p>
                </div>
            </section>

            {/* Vinyasa / Power Yoga */}
            <YogaStyleSection
                theme="orange"
                title="Sweat, Burn & Detox"
                subtitle="Vinyasa & Power Yoga"
                description="A dynamic, high-energy practice where breath is linked with movement. Expect to move continuously, build internal heat, and challenge your cardiovascular system. This is yoga for those who want a workout."
                benefits={[
                    "High Calorie Burn (400+ per hour)",
                    "Cardiovascular Health",
                    "Lean Muscle Definition",
                    "Detoxification through Sweat"
                ]}
                image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Yin / Restorative */}
            <YogaStyleSection
                reverse={true}
                theme="indigo"
                title="Deep Release & Recovery"
                subtitle="Yin & Restorative Yoga"
                description="The perfect counterbalance to a busy life or intense workouts. Poses are held for 3-5 minutes to target deep connective tissues (fascia) rather than muscles. It's passive, meditative, and deeply healing."
                benefits={[
                    "Increased Joint Mobility",
                    "Fascia Release & Flexibility",
                    "Injury Prevention & Recovery",
                    "Deep Nervous System Rest"
                ]}
                image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop"
            />

            {/* Hatha / Iyengar */}
            <YogaStyleSection
                theme="sage"
                title="Balance, Posture & Alignment"
                subtitle="Hatha & Iyengar Yoga"
                description="A slower-paced practice focused on proper alignment and holding poses for longer periods. It builds foundational strength and corrects postural imbalances caused by sitting at desks or driving."
                benefits={[
                    "Correction of Poor Posture",
                    "Core Stability & Balance",
                    "Back Pain Relief",
                    "Mind-Body Connection"
                ]}
                image="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop"
            />

            {/* Kundalini Yoga */}
            <YogaStyleSection
                reverse={true}
                theme="gold"
                title="Awaken Your Energy"
                subtitle="Kundalini Yoga"
                description="Known as the 'Yoga of Awareness', Kundalini combines dynamic movement, breathwork (Pranayama), meditation, and chanting (Mantra) to awaken the energy at the base of your spine. It is a powerful tool for spiritual transformation."
                benefits={[
                    "Spiritual Awakening",
                    "Increased Consciousness",
                    "Nervous System Regulation",
                    "Emotional Release"
                ]}
                image="/kundalini-energy.jpg"
            />

            {/* Yoga Nidra */}
            <YogaStyleSection
                theme="indigo"
                title="The Sleep of the Yogis"
                subtitle="Yoga Nidra"
                description="A state of consciousness between waking and sleeping. In Yoga Nidra, you lie down and follow a guided meditation that takes you into the deepest possible state of relaxation while remaining fully aware. 30 minutes equals 4 hours of sleep."
                benefits={[
                    "Deepest Possible Relaxation",
                    "Trauma & Stress Release",
                    "Improved Sleep Quality",
                    "Subconscious Reprogramming"
                ]}
                image="/yoga-nidra.jpg"
            />

            {/* Meditation & Breathwork */}
            <YogaStyleSection
                reverse={true}
                theme="teal"
                title="Master Your Mind"
                subtitle="Meditation & Breathwork"
                description="The physical practice (Asana) is just preparation for meditation. Learn powerful breathwork techniques (Pranayama) to control your life force energy and mindfulness practices to find stillness in chaos."
                benefits={[
                    "Anxiety & Stress Reduction",
                    "Enhanced Focus & Clarity",
                    "Emotional Balance",
                    "Lower Blood Pressure"
                ]}
                image="https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2053&auto=format&fit=crop"
            />

            {/* FAQ Section */}
            <FAQSection />

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-[#4a0f0f] via-[#d94b3d] to-[#0d0a0f] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="container-custom max-w-4xl relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Your Journey Begins Here</h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Whether you seek physical strength or spiritual awakening, we have a path for you.
                    </p>
                    <Button size="large" className="bg-gradient-to-r from-[#ff6b35] to-[#ffb347] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-none hover:from-[#ffb347] hover:to-[#ff6b35]">
                        <span className="flex items-center space-x-2">
                            <span>Start Free Trial</span>
                            <ArrowRight size={20} />
                        </span>
                    </Button>
                </div>
            </section>

        </div>
    )
}

export default FitnessBenefits
