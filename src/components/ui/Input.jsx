import React from 'react'

const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    icon: Icon,
    required = false,
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Icon size={18} />
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={`
            w-full px-4 py-3 ${Icon ? 'pl-10' : ''} 
            border rounded-xl
            ${error
                            ? 'border-red-300 bg-red-50 focus:ring-red-400'
                            : 'border-gray-200 focus:ring-yoga-sage-400'
                        }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
            focus:outline-none focus:ring-2
            transition-all duration-200
            placeholder:text-gray-400
          `}
                    {...props}
                />
            </div>
            {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>
    )
}

export default Input
