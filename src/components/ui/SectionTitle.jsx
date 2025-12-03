import React from 'react'

const SectionTitle = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-12 ${className}`}>
            {subtitle && (
                <p className="text-yoga-sage-600 font-medium tracking-wide uppercase text-sm mb-2">
                    {subtitle}
                </p>
            )}
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 gradient-text">
                {title}
            </h2>
        </div>
    )
}

export default SectionTitle
