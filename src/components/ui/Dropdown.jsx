import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const Dropdown = ({
    label,
    options = [],
    value,
    onChange,
    placeholder = 'Select an option',
    error,
    required = false,
    disabled = false,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const selectedOption = options.find(opt => opt.value === value)

    return (
        <div className={`${className}`} ref={dropdownRef}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={`
            w-full px-4 py-3 pr-10
            border rounded-xl
            ${error
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-200'
                        }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:border-yoga-sage-300'}
            text-left
            focus:outline-none focus:ring-2 focus:ring-yoga-sage-400
            transition-all duration-200
          `}
                >
                    <span className={selectedOption ? 'text-gray-900' : 'text-gray-400'}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <ChevronDown
                        className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        size={18}
                    />
                </button>

                {isOpen && !disabled && (
                    <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-auto">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value)
                                    setIsOpen(false)
                                }}
                                className={`
                  w-full px-4 py-3 text-left
                  hover:bg-yoga-sage-50
                  ${value === option.value ? 'bg-yoga-sage-100 text-yoga-sage-700 font-medium' : 'text-gray-700'}
                  transition-colors
                  first:rounded-t-xl last:rounded-b-xl
                `}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>
    )
}

export default Dropdown
