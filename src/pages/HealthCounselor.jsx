import React from 'react'
import { Heart, Brain, Target, Briefcase, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const HealthCounselor = () => {
    const consultations = [
        {
            id: 1,
            icon: Sparkles,
            title: "Personal Yoga & Wellness Consultation",
            description: "A 1-on-1 session to understand your goals, lifestyle, and wellness needs.",
            includes: [
                "Customized yoga plan",
                "Breathing practices",
                "Meditation routines",
                "Daily habit guidance"
            ],
            image: "/src/assets/wellness-consultation.jpg",
            color: "from-yoga-sage-400 to-yoga-sage-600",
            bgGradient: "from-yoga-sage-50 to-yoga-lavender-50"
        },
        {
            id: 2,
            icon: Heart,
            title: "Therapeutic Yoga Consultation",
            subtitle: "(Pain, Mobility, Prenatal/Postnatal)",
            description: "For clients needing targeted support based on physical conditions.",
            includes: [
                "Back pain relief plans",
                "Posture correction",
                "Mobility improvement",
                "Safe practices for pregnancy",
                "Recovery support"
            ],
            image: "/src/assets/therapeutic-yoga.jpg",
            color: "from-pink-400 to-rose-600",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            id: 3,
            icon: Brain,
            title: "Stress, Depression & Anxiety Management",
            description: "A gentle, supportive consultation for mental and emotional wellbeing.",
            includes: [
                "Calming breathwork",
                "Grounding yoga practices",
                "Meditation for emotional balance",
                "Lifestyle tools to manage anxiety, stress, and low mood",
                "Personalized wellbeing routine"
            ],
            note: "(Non-clinical, holistic yoga-based approach)",
            image: "/src/assets/mental-wellness.jpg",
            color: "from-yoga-lavender-400 to-purple-600",
            bgGradient: "from-yoga-lavender-50 to-purple-50"
        },
        {
            id: 4,
            icon: Target,
            title: "Lifestyle & Holistic Coaching",
            description: "Full-body–mind alignment coaching for long-term wellbeing.",
            includes: [
                "Mindful eating",
                "Sleep improvement",
                "Daily routine building",
                "Energy balancing",
                "Habit creation"
            ],
            image: "/src/assets/holistic-coaching.jpg",
            color: "from-yoga-peach-400 to-orange-600",
            bgGradient: "from-yoga-peach-50 to-orange-50"
        },
        {
            id: 5,
            icon: Briefcase,
            title: "Corporate / Workplace Wellness Consulting",
            description: "For companies wanting to improve employee health and productivity.",
            includes: [
                "Workplace yoga",
                "Chair yoga",
                "Breathwork sessions",
                "Stress-management workshops"
            ],
            image: "/src/assets/corporate-wellness.jpg",
            color: "from-blue-400 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50"
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-yoga-sage-900 via-yoga-lavender-900 to-yoga-peach-900 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
                            <Sparkles className="text-yoga-peach-300" size={20} />
                            <span className="text-sm font-medium">Professional Wellness Consultations</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display animate-slide-up">
                            Health <span className="text-yoga-peach-300">Counselor</span>
                        </h1>

                        <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Expert guidance for your wellness journey. Choose from our specialized consultation services designed to meet your unique needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <Link to="/schedule">
                                <Button size="large" className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                                    Book a Consultation
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    variant="outline"
                                    size="large"
                                    className="border-2 border-white text-white hover:bg-white hover:text-yoga-sage-900 shadow-xl transition-all"
                                >
                                    Meet Our Experts
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Consultations Section */}
            <section className="py-20 bg-white">
                <div className="container-custom px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display gradient-text">
                            Our Consultation Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Personalized wellness solutions tailored to your unique journey
                        </p>
                    </div>

                    <div className="space-y-16">
                        {consultations.map((consultation, index) => {
                            const Icon = consultation.icon
                            const isEven = index % 2 === 0

                            return (
                                <div
                                    key={consultation.id}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
                                >
                                    {/* Image */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${consultation.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                            <img
                                                src={consultation.image}
                                                alt={consultation.title}
                                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                                onError={(e) => {
                                                    e.target.style.display = 'none'
                                                    e.target.parentElement.classList.add('bg-gradient-to-br', ...consultation.color.split(' '))
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full lg:w-1/2">
                                        <div className={`p-8 rounded-3xl bg-gradient-to-br ${consultation.bgGradient} border border-gray-100 hover:border-gray-200 transition-all duration-300`}>
                                            {/* Icon */}
                                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${consultation.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className="text-white" size={32} />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-3xl font-bold mb-2 font-display text-gray-900">
                                                {consultation.title}
                                            </h3>

                                            {consultation.subtitle && (
                                                <p className="text-lg text-gray-600 mb-3 italic">
                                                    {consultation.subtitle}
                                                </p>
                                            )}

                                            {/* Description */}
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {consultation.description}
                                            </p>

                                            {/* Includes */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                                                    <span className={`w-1 h-6 bg-gradient-to-b ${consultation.color} rounded-full mr-3`}></span>
                                                    Includes:
                                                </h4>
                                                <ul className="grid gap-2">
                                                    {consultation.includes.map((item, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className={`mt-1 mr-3 w-2 h-2 rounded-full bg-gradient-to-br ${consultation.color} flex-shrink-0`}></span>
                                                            <span className="text-gray-700">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Note */}
                                            {consultation.note && (
                                                <p className="text-sm italic text-gray-600 mb-6">
                                                    {consultation.note}
                                                </p>
                                            )}

                                            {/* CTA Button */}
                                            <Link to="/schedule">
                                                <Button
                                                    className="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                                >
                                                    Book This Consultation
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-yoga-sage-100 via-yoga-lavender-100 to-yoga-peach-100">
                <div className="container-custom px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display gradient-text">
                            Ready to Start Your Wellness Journey?
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Book a consultation today and take the first step towards a healthier, more balanced life.
                        </p>
                        <Link to="/schedule">
                            <Button size="large" className="shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all">
                                Schedule Your Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HealthCounselor
