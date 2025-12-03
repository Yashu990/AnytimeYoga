import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Download, Mail, CheckCircle, ArrowLeft } from 'lucide-react'
import Header from '../layouts/Header'
import Button from '../components/ui/Button'

const Invoice = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [invoiceData, setInvoiceData] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)

        // Get invoice data from location state or use mock data
        const data = location.state || {
            invoiceNumber: 'INV-' + Date.now(),
            invoiceDate: new Date().toISOString(),
            booking: {
                date: new Date(),
                time: '07:00 AM',
                yogaType: 'Vinyasa',
                instructor: 'Emma Wilson',
                duration: '60 min',
                price: 25
            },
            payment: {
                transactionId: 'TXN' + Date.now(),
                paymentMethod: '•••• 3456'
            }
        }
        setInvoiceData(data)
    }, [location])

    const handleDownload = () => {
        // Open print dialog - users can save as PDF
        window.print()
    }

    const handleEmail = () => {
        alert('Invoice sent to your email! (This is a demo)')
    }

    if (!invoiceData) return null

    const { booking, payment, invoiceNumber, invoiceDate } = invoiceData
    const platformFee = 2
    const totalAmount = booking.price + platformFee

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const formatDateTime = (date) => {
        return new Date(date).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <section className="py-12 pt-24">
                <div className="container-custom max-w-4xl">
                    {/* Action Buttons */}
                    <div className="flex justify-between items-center mb-6 print:hidden">
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span>Back to Dashboard</span>
                        </button>

                        <div className="flex space-x-3">
                            <button
                                onClick={handleEmail}
                                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <Mail size={18} />
                                <span>Email</span>
                            </button>
                            <button
                                onClick={handleDownload}
                                className="flex items-center space-x-2 px-4 py-2 bg-yoga-sage-600 text-white rounded-lg hover:bg-yoga-sage-700 transition-colors"
                            >
                                <Download size={18} />
                                <span>Download PDF</span>
                            </button>
                        </div>
                    </div>

                    {/* Invoice */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-200">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage-400 to-yoga-lavender-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        🧘
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-display font-bold text-gray-900">Anytime Yoga</h1>
                                        <p className="text-sm text-gray-500">Your peace, anytime</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">support@anytimeyoga.com</p>
                            </div>

                            <div className="text-right">
                                <div className="flex items-center justify-end space-x-2 mb-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center space-x-1">
                                        <CheckCircle size={14} />
                                        <span>PAID</span>
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">INVOICE</h2>
                                <p className="text-gray-600 font-mono text-sm">{invoiceNumber}</p>
                                <p className="text-gray-500 text-sm mt-1">{formatDateTime(invoiceDate)}</p>
                            </div>
                        </div>

                        {/* Customer Info */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Bill To</h3>
                            <div>
                                <p className="font-bold text-gray-900">Sarah Jenkins</p>
                                <p className="text-gray-600 text-sm">sarah.jenkins@example.com</p>
                            </div>
                        </div>

                        {/* Session Details */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Session Details</h3>
                            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Date</p>
                                        <p className="font-medium text-gray-900">{formatDate(booking.date)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Time</p>
                                        <p className="font-medium text-gray-900">{booking.time} - {booking.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Instructor</p>
                                        <p className="font-medium text-gray-900">{booking.instructor}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Yoga Type</p>
                                        <p className="font-medium text-gray-900">{booking.yogaType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Breakdown */}
                        <div className="mb-8">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-300">
                                        <th className="text-left py-3 text-sm font-bold text-gray-700 uppercase tracking-wide">Description</th>
                                        <th className="text-right py-3 text-sm font-bold text-gray-700 uppercase tracking-wide">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-4 text-gray-900">Yoga Session - {booking.yogaType}</td>
                                        <td className="py-4 text-right text-gray-900">${booking.price}.00</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-4 text-gray-900">Platform Fee</td>
                                        <td className="py-4 text-right text-gray-900">${platformFee}.00</td>
                                    </tr>
                                    <tr className="border-t-2 border-gray-300">
                                        <td className="py-4 text-lg font-bold text-gray-900">Total</td>
                                        <td className="py-4 text-right text-lg font-bold text-gray-900">${totalAmount}.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Payment Info */}
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                            <h3 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-3">Payment Information</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-600 mb-1">Payment Method</p>
                                    <p className="font-medium text-gray-900">Credit Card {payment.paymentMethod}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 mb-1">Transaction ID</p>
                                    <p className="font-medium text-gray-900 font-mono">{payment.transactionId}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                            <p>Thank you for choosing Anytime Yoga!</p>
                            <p className="mt-2">For any questions, contact us at support@anytimeyoga.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Invoice
