import React from 'react'
import { Check } from 'lucide-react'

const BenefitRow = ({ title, subtitle, description, points, image, reverse = false }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 py-16`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="aspect-[4/3] bg-gray-200 relative">
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Decorative Blob */}
                    <div className={`absolute -bottom-10 ${reverse ? '-left-10' : '-right-10'} w-40 h-40 bg-yoga-sage-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float`}></div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
                <div>
                    <span className="text-yoga-sage-600 font-bold tracking-wider uppercase text-sm">{subtitle}</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
                </div>

                <ul className="space-y-3">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <div className="mt-1 bg-yoga-sage-100 rounded-full p-1">
                                <Check size={14} className="text-yoga-sage-600" />
                            </div>
                            <span className="text-gray-700">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BenefitRow
