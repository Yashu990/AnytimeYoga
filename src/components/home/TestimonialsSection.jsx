import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { Star } from 'lucide-react'

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Marketing Executive",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
        content: "Anytime Yoga has completely transformed my morning routine. I feel more centered and ready to tackle my stressful job.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Software Developer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
        content: "The flexibility is a game-changer. Being able to squeeze in a 30-minute session between meetings keeps my back pain away.",
        rating: 5
    },
    {
        name: "Emma Wilson",
        role: "Busy Mom",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        content: "I love the instructors! They are so encouraging and the beginner classes were perfect for getting me started safely.",
        rating: 4
    }
]

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-yoga-sage-50">
            <div className="container-custom">
                <SectionTitle
                    title="Stories of Transformation"
                    subtitle="Community Love"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="h-full flex flex-col">
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.content}"</p>

                            <div className="flex items-center space-x-4 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-yoga-sage-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
