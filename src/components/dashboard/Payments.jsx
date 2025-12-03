import React from 'react'
import { Download } from 'lucide-react'

const Payments = () => {
    const transactions = [
        { id: 1, date: 'Oct 24, 2023', description: 'Monthly Membership (Pro)', amount: '$49.00', status: 'Paid' },
        { id: 2, date: 'Sep 24, 2023', description: 'Monthly Membership (Pro)', amount: '$49.00', status: 'Paid' },
        { id: 3, date: 'Aug 24, 2023', description: 'Monthly Membership (Pro)', amount: '$49.00', status: 'Paid' },
        { id: 4, date: 'Jul 15, 2023', description: 'Private Session (1 hr)', amount: '$80.00', status: 'Paid' },
    ]

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Payment History</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium">Description</th>
                            <th className="px-6 py-4 font-medium">Amount</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-gray-900 text-sm font-medium">{tx.date}</td>
                                <td className="px-6 py-4 text-gray-600 text-sm">{tx.description}</td>
                                <td className="px-6 py-4 text-gray-900 text-sm font-bold">{tx.amount}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-yoga-sage-600 transition-colors">
                                        <Download size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Payments
