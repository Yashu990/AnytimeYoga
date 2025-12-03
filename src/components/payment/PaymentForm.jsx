import React, { useState } from 'react'
import { CreditCard, Lock } from 'lucide-react'
import Button from '../ui/Button'

const PaymentForm = ({ amount, onPaymentComplete }) => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: ''
    })
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target

        // Format card number with spaces
        if (name === 'cardNumber') {
            const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
            setFormData({ ...formData, [name]: formatted })
        } else {
            setFormData({ ...formData, [name]: value })
        }

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' })
        }
    }

    const validate = () => {
        const newErrors = {}

        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required'
        else if (formData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = 'Invalid card number'

        if (!formData.cardName) newErrors.cardName = 'Cardholder name is required'
        if (!formData.expiryMonth) newErrors.expiryMonth = 'Required'
        if (!formData.expiryYear) newErrors.expiryYear = 'Required'

        if (!formData.cvv) newErrors.cvv = 'CVV is required'
        else if (formData.cvv.length < 3) newErrors.cvv = 'Invalid CVV'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validate()) return

        setIsProcessing(true)

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false)
            onPaymentComplete({
                transactionId: 'TXN' + Date.now(),
                paymentMethod: `•••• ${formData.cardNumber.slice(-4)}`,
                ...formData
            })
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <Lock size={20} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Secure Payment</h3>
                    <p className="text-xs text-gray-500">Your payment information is encrypted</p>
                </div>
            </div>

            <div className="space-y-4">
                {/* Card Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <div className="relative">
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            maxLength="19"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.cardNumber ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-yoga-sage-400`}
                        />
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                </div>

                {/* Cardholder Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                    <input
                        type="text"
                        name="cardName"
                        placeholder="JOHN DOE"
                        value={formData.cardName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.cardName ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-yoga-sage-400 uppercase`}
                    />
                    {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                        <select
                            name="expiryMonth"
                            value={formData.expiryMonth}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.expiryMonth ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-yoga-sage-400`}
                        >
                            <option value="">MM</option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                <option key={m} value={String(m).padStart(2, '0')}>{String(m).padStart(2, '0')}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                        <select
                            name="expiryYear"
                            value={formData.expiryYear}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.expiryYear ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-yoga-sage-400`}
                        >
                            <option value="">YY</option>
                            {Array.from({ length: 10 }, (_, i) => 24 + i).map(y => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                            type="password"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength="4"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.cvv ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-yoga-sage-400`}
                        />
                        {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">Total Amount</span>
                    <span className="text-2xl font-bold text-gray-900">${amount}</span>
                </div>

                <Button
                    type="submit"
                    className="w-full justify-center"
                    disabled={isProcessing}
                >
                    {isProcessing ? (
                        <span className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                        </span>
                    ) : (
                        <span>Complete Payment</span>
                    )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-3">
                    By completing this payment, you agree to our terms and conditions
                </p>
            </div>
        </form>
    )
}

export default PaymentForm
