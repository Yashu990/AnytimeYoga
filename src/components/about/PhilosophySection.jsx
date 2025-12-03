import React from 'react'
import { Heart, BookOpen, Users } from 'lucide-react'

const PhilosophySection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yoga-sage-100 rounded-[2rem] transform -rotate-3 scale-105"></div>
                            <img
                                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop"
                                alt="Teacher adjusting student"
                                className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover"
                            />
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                                <p className="text-gray-800 italic font-medium">
                                    "A true teacher does not lead you to the threshold of their mind, but leads you to the threshold of your own."
                                </p>
                                <p className="text-yoga-sage-600 text-sm mt-2 font-bold uppercase tracking-wide">— Kahlil Gibran</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <span className="text-yoga-sage-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
                            Guides, Not Just <br />
                            <span className="text-yoga-sage-500">Instructors</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            At Anytime Yoga, we believe that a great yoga teacher is defined by their empathy, not just their flexibility.
                            We hire educators who are lifelong students first, dedicated to the lineage of yoga and the safety of their students.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-rose-50 p-3 rounded-full text-rose-500 mt-1">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Led by Empathy</h4>
                                    <p className="text-gray-600">We teach to the body in front of us, offering modifications and support for every unique anatomy.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-50 p-3 rounded-full text-indigo-500 mt-1">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Rooted in Wisdom</h4>
                                    <p className="text-gray-600">Our practice honors the ancient traditions of yoga while adapting them for modern life.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-teal-50 p-3 rounded-full text-teal-500 mt-1">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Community First</h4>
                                    <p className="text-gray-600">We foster a non-judgmental space where everyone belongs, regardless of skill level.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PhilosophySection
