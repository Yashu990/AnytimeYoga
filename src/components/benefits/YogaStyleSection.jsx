import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

const YogaStyleSection = ({
    title,
    subtitle,
    description,
    benefits,
    image,
    reverse = false,
    theme = 'sage' // sage, orange, indigo, rose, gold, teal
}) => {

    const themeColors = {
        sage: {
            bg: 'bg-yoga-sage-50',
            text: 'text-yoga-sage-700',
            accent: 'bg-yoga-sage-100',
            icon: 'text-yoga-sage-600',
            button: 'bg-yoga-sage-600 hover:bg-yoga-sage-700'
        },
        orange: {
            bg: 'bg-orange-50',
            text: 'text-orange-700',
            accent: 'bg-orange-100',
            icon: 'text-orange-600',
            button: 'bg-orange-600 hover:bg-orange-700'
        },
        indigo: {
            bg: 'bg-indigo-50',
            text: 'text-indigo-700',
            accent: 'bg-indigo-100',
            icon: 'text-indigo-600',
            button: 'bg-indigo-600 hover:bg-indigo-700'
        },
        rose: {
            bg: 'bg-rose-50',
            text: 'text-rose-700',
            accent: 'bg-rose-100',
            icon: 'text-rose-600',
            button: 'bg-rose-600 hover:bg-rose-700'
        },
        gold: {
            bg: 'bg-yellow-50',
            text: 'text-yellow-700',
            accent: 'bg-yellow-100',
            icon: 'text-yellow-600',
            button: 'bg-yellow-600 hover:bg-yellow-700'
        },
        teal: {
            bg: 'bg-teal-50',
            text: 'text-teal-700',
            accent: 'bg-teal-100',
            icon: 'text-teal-600',
            button: 'bg-teal-600 hover:bg-teal-700'
        }
    }

    const currentTheme = themeColors[theme] || themeColors.sage

    return (
        <div className={`py-20 ${reverse ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container-custom">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-black/5 rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className={`font-bold ${currentTheme.text} uppercase text-xs tracking-wider mb-1`}>Best For</p>
                                    <p className="text-gray-800 font-medium">{benefits[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold tracking-wider uppercase mb-6 ${currentTheme.accent} ${currentTheme.text}`}>
                            {subtitle}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                            {title}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {description}
                        </p>

                        <div className="space-y-6 mb-10">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                <span className={`w-8 h-1 rounded-full mr-3 ${currentTheme.button}`}></span>
                                Key Benefits
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className={`mt-1 p-1 rounded-full ${currentTheme.accent}`}>
                                            <Check size={12} className={currentTheme.icon} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button className={`${currentTheme.button} text-white shadow-lg shadow-${theme}-200 border-none`}>
                            <span className="flex items-center space-x-2">
                                <span>Try {subtitle} Class</span>
                                <ArrowRight size={18} />
                            </span>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default YogaStyleSection
