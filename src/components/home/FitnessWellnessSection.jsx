import React from 'react'
import { Activity, Zap, Shield, Heart, Brain, Moon, Smile, Wind } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const FitnessWellnessSection = () => {
    const physicalBenefits = [
        {
            icon: <Activity size={24} />,
            title: "Flexibility",
            description: "Unlock your body's potential range of motion and reduce stiffness."
        },
        {
            icon: <Zap size={24} />,
            title: "Strength",
            description: "Build lean muscle and core stability through holding poses."
        },
        {
            icon: <Shield size={24} />,
            title: "Immunity",
            description: "Stimulate the lymphatic system to fight infection and disease."
        },
        {
            icon: <Heart size={24} />,
            title: "Heart Health",
            description: "Lower blood pressure and improve cardiovascular circulation."
        }
    ]

    const mentalBenefits = [
        {
            icon: <Brain size={24} />,
            title: "Focus",
            description: "Sharpen your concentration and mental clarity through mindfulness."
        },
        {
            icon: <Moon size={24} />,
            title: "Better Sleep",
            description: "Calm the nervous system to prepare the body for deep rest."
        },
        {
            icon: <Smile size={24} />,
            title: "Mood Boost",
            description: "Release endorphins and reduce cortisol levels naturally."
        },
        {
            icon: <Wind size={24} />,
            title: "Stress Relief",
            description: "Learn breathwork techniques to manage anxiety instantly."
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="Complete Harmony"
                    subtitle="Balance Your Life"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Physical Vitality Column */}
                    <div>
                        <div className="flex items-center justify-center mb-10">
                            <h3 className="text-2xl font-bold text-yoga-peach-600 relative inline-block">
                                Physical Vitality
                                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-yoga-peach-200 rounded-full"></span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {physicalBenefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-yoga-peach-50 border border-yoga-peach-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-yoga-peach-500 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mental Clarity Column */}
                    <div>
                        <div className="flex items-center justify-center mb-10">
                            <h3 className="text-2xl font-bold text-yoga-lavender-600 relative inline-block">
                                Mental Clarity
                                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-yoga-lavender-200 rounded-full"></span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {mentalBenefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-yoga-lavender-50 border border-yoga-lavender-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-yoga-lavender-500 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FitnessWellnessSection
