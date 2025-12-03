import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Wind, Sun, Activity, Zap, Heart, Moon, Music } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'

const yogaTypes = [
    {
        id: 'pranayama',
        title: "Pranayama",
        description: "Breathing practices for fresh inhalation and calmness.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
        icon: <Wind size={20} />
    },
    {
        id: 'surya-namaskar',
        title: "Surya Namaskar",
        description: "Sun-salutation sequence that energizes body and mind.",
        image: "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?q=80&w=800&auto=format&fit=crop",
        icon: <Sun size={20} />
    },
    {
        id: 'hatha-yoga',
        title: "Hatha Yoga",
        description: "Gentle poses with breath control for balance and peace.",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
        icon: <Activity size={20} />
    },
    {
        id: 'anulom-vilom',
        title: "Anulom Vilom",
        description: "Alternate-nostril breathing for mental clarity.",
        image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop",
        icon: <Wind size={20} />
    },
    {
        id: 'kapalbhati',
        title: "Kapalbhati",
        description: "Rapid breathing that cleanses lungs and refreshes energy.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
        icon: <Zap size={20} />
    },
    {
        id: 'kundalini-yoga',
        title: "Kundalini Yoga",
        description: "Breath, movement, and mantra to awaken spiritual energy.",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800&auto=format&fit=crop",
        icon: <Activity size={20} />
    },
    {
        id: 'bhakti-yoga',
        title: "Bhakti Yoga",
        description: "Devotional chanting and connection to higher consciousness.",
        image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=800&auto=format&fit=crop",
        icon: <Heart size={20} />
    },
    {
        id: 'bhastrika-pranayama',
        title: "Bhastrika Pranayama",
        description: "Powerful breathwork that boosts vitality.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
        icon: <Wind size={20} />
    },
    {
        id: 'yin-yoga',
        title: "Yin Yoga",
        description: "Slow deep stretching for inner stillness and healing.",
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop",
        icon: <Moon size={20} />
    },
    {
        id: 'mantra-meditation',
        title: "Mantra Meditation",
        description: "Repeating sacred sounds for spiritual focus.",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop",
        icon: <Music size={20} />
    }
]

const YogaTypesSection = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = 300
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            }
        }
    }

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex items-end justify-between mb-12">
                    <SectionTitle
                        title="Explore Practices"
                        subtitle="Find Your Flow"
                        className="mb-0 text-left"
                    />

                    {/* Navigation Buttons */}
                    <div className="flex space-x-2 hidden md:flex">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yoga-sage-50 hover:border-yoga-sage-300 transition-colors text-gray-600"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yoga-sage-50 hover:border-yoga-sage-300 transition-colors text-gray-600"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {yogaTypes.map((type, index) => (
                        <Link
                            to={`/practice/${type.id}`}
                            key={index}
                            className="min-w-[280px] md:min-w-[320px] snap-center group relative rounded-3xl overflow-hidden h-[400px] shadow-lg cursor-pointer block"
                        >
                            {/* Background Image */}
                            <img
                                src={type.image}
                                alt={type.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/30">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-display mb-2">{type.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-12 group-hover:bottom-0 relative">
                                    {type.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YogaTypesSection
