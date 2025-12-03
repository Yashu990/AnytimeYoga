import React from 'react'

const Button = ({
    children,
    variant = 'primary', // primary, secondary, outline, ghost, danger
    size = 'medium', // small, medium, large
    fullWidth = false,
    disabled = false,
    loading = false,
    icon: Icon,
    iconPosition = 'left', // left or right
    className = '',
    ...props
}) => {
    const baseStyles = 'font-medium rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants = {
        primary: 'bg-gradient-to-r from-yoga-sage-500 to-yoga-sage-600 text-white hover:from-yoga-sage-600 hover:to-yoga-sage-700 focus:ring-yoga-sage-400 shadow-md hover:shadow-lg',
        secondary: 'bg-gradient-to-r from-yoga-lavender-500 to-yoga-lavender-600 text-white hover:from-yoga-lavender-600 hover:to-yoga-lavender-700 focus:ring-yoga-lavender-400 shadow-md hover:shadow-lg',
        outline: 'border-2 border-yoga-sage-500 text-yoga-sage-600 hover:bg-yoga-sage-50 focus:ring-yoga-sage-400',
        ghost: 'text-yoga-sage-600 hover:bg-yoga-sage-50 focus:ring-yoga-sage-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400 shadow-md hover:shadow-lg'
    }

    const sizes = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg'
    }

    const disabledStyles = 'opacity-50 cursor-not-allowed'

    return (
        <button
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? disabledStyles : ''}
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {Icon && iconPosition === 'left' && <Icon size={18} />}
                    <span>{children}</span>
                    {Icon && iconPosition === 'right' && <Icon size={18} />}
                </>
            )}
        </button>
    )
}

export default Button
