import React from 'react'
import { Link } from 'react-router-dom'
import { Activity, Zap, Shield, Heart, Brain, Moon, Smile, Wind } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const FitnessWellnessSection = () => {
    const physicalBenefits = [
        {
            icon: <Activity size={24} />,
            title: "Flexibility",
            description: "Unlock your body's potential range of motion and reduce stiffness.",
            image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Zap size={24} />,
            title: "Strength",
            description: "Build lean muscle and core stability through holding poses.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Shield size={24} />,
            title: "Immunity",
            description: "Stimulate the lymphatic system to fight infection and disease.",
            image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Heart size={24} />,
            title: "Heart Health",
            description: "Lower blood pressure and improve cardiovascular circulation.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
        }
    ]

    const mentalBenefits = [
        {
            icon: <Brain size={24} />,
            title: "Focus",
            description: "Sharpen your concentration and mental clarity through mindfulness.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Moon size={24} />,
            title: "Better Sleep",
            description: "Calm the nervous system to prepare the body for deep rest.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Smile size={24} />,
            title: "Mood Boost",
            description: "Release endorphins and reduce cortisol levels naturally.",
            image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Wind size={24} />,
            title: "Stress Relief",
            description: "Learn breathwork techniques to manage anxiety instantly.",
            image: "https://images.unsplash.com/photo-1508672019048-805c276e7e5e?q=80&w=800&auto=format&fit=crop"
        }
    ]

    const BenefitCard = ({ item, colorTheme }) => {
        const isPeach = colorTheme === 'peach';
        const bgClass = isPeach ? 'bg-yoga-peach-50' : 'bg-yoga-lavender-50';
        const borderClass = isPeach ? 'border-yoga-peach-100' : 'border-yoga-lavender-100';
        const iconColor = isPeach ? 'text-yoga-peach-500' : 'text-yoga-lavender-500';
        // Generate ID from title (e.g., "Heart Health" -> "heart-health")
        const id = item.title.toLowerCase().replace(/\s+/g, '-');

        return (
            <Link to={`/benefit/${id}`} className="block h-full">
                <div className={`${bgClass} border ${borderClass} rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col cursor-pointer`}>
                    {/* Image Area */}
                    <div className="h-40 overflow-hidden relative">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                        {/* Floating Icon */}
                        <div className={`absolute -bottom-6 right-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center ${iconColor} shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}>
                            {item.icon}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 pt-8 flex-grow">
                        <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yoga-sage-600 transition-colors">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                        </p>
                        <div className={`mt-4 text-xs font-bold uppercase tracking-wider ${iconColor} opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0`}>
                            View Tips & Steps →
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

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
                                <BenefitCard key={index} item={item} colorTheme="peach" />
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
                                <BenefitCard key={index} item={item} colorTheme="lavender" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FitnessWellnessSection
