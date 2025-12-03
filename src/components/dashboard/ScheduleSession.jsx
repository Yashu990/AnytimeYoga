import React from 'react'
import Button from '../ui/Button'

const ScheduleSession = () => {
    const classes = [
        {
            id: 1,
            title: "Sunrise Hatha",
            instructor: "Emma Wilson",
            time: "07:00 AM - 08:00 AM",
            date: "Today",
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
            spots: 5
        },
        {
            id: 2,
            title: "Power Vinyasa",
            instructor: "David Chen",
            time: "12:00 PM - 01:00 PM",
            date: "Today",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
            spots: 2
        },
        {
            id: 3,
            title: "Evening Restore",
            instructor: "Sarah Johnson",
            time: "08:00 PM - 09:00 PM",
            date: "Today",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop",
            spots: 8
        },
        {
            id: 4,
            title: "Kundalini Awakening",
            instructor: "Maya Devi",
            time: "06:00 AM - 07:30 AM",
            date: "Tomorrow",
            image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2069&auto=format&fit=crop",
            spots: 12
        }
    ]

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Available Classes</h2>
                <div className="flex space-x-2">
                    <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yoga-sage-400">
                        <option>All Types</option>
                        <option>Vinyasa</option>
                        <option>Hatha</option>
                        <option>Yin</option>
                    </select>
                    <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yoga-sage-400">
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>This Week</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {classes.map((cls) => (
                    <div key={cls.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                        <div className="w-full md:w-48 h-48 md:h-auto relative">
                            <img src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
                            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800">
                                {cls.spots} spots left
                            </div>
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{cls.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4">with {cls.instructor}</p>
                                    </div>
                                    <span className="bg-yoga-sage-50 text-yoga-sage-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {cls.date}
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm mb-4">
                                    <span className="font-medium">{cls.time}</span>
                                    <span className="mx-2">•</span>
                                    <span>60 min</span>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button size="small">Book Now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScheduleSession
