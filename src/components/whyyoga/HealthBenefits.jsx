import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import { Brain, Heart, Activity, Zap, Moon, Smile, Shield, Wind } from 'lucide-react'

const BenefitCard = ({ icon: Icon, title, description, type }) => (
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${type === 'physical'
            ? 'bg-orange-50/50 border-orange-100 hover:border-orange-200'
            : 'bg-indigo-50/50 border-indigo-100 hover:border-indigo-200'
        }`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${type === 'physical' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'
            }`}>
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
)

const HealthBenefits = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="Complete Harmony"
                    subtitle="Body & Mind"
                    className="mb-16 text-center"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Physical Health Column */}
                    <div>
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-orange-200"></div>
                            <h2 className="text-2xl font-display font-bold text-orange-800">Physical Vitality</h2>
                            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-orange-200"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <BenefitCard
                                type="physical"
                                icon={Activity}
                                title="Flexibility"
                                description="Unlock your body's potential range of motion and reduce stiffness."
                            />
                            <BenefitCard
                                type="physical"
                                icon={Zap}
                                title="Strength"
                                description="Build lean muscle and core stability through holding poses."
                            />
                            <BenefitCard
                                type="physical"
                                icon={Shield}
                                title="Immunity"
                                description="Stimulate the lymphatic system to fight infection and disease."
                            />
                            <BenefitCard
                                type="physical"
                                icon={Heart}
                                title="Heart Health"
                                description="Lower blood pressure and improve cardiovascular circulation."
                            />
                        </div>
                    </div>

                    {/* Mental Health Column */}
                    <div>
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-indigo-200"></div>
                            <h2 className="text-2xl font-display font-bold text-indigo-800">Mental Clarity</h2>
                            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-indigo-200"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <BenefitCard
                                type="mental"
                                icon={Brain}
                                title="Focus"
                                description="Sharpen your concentration and mental clarity through mindfulness."
                            />
                            <BenefitCard
                                type="mental"
                                icon={Moon}
                                title="Better Sleep"
                                description="Calm the nervous system to prepare the body for deep rest."
                            />
                            <BenefitCard
                                type="mental"
                                icon={Smile}
                                title="Mood Boost"
                                description="Release endorphins and reduce cortisol levels naturally."
                            />
                            <BenefitCard
                                type="mental"
                                icon={Wind}
                                title="Stress Relief"
                                description="Learn breathwork techniques to manage anxiety instantly."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthBenefits
