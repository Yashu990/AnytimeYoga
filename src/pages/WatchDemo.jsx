import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play, Lock } from 'lucide-react'
import Header from '../layouts/Header'
import Modal from '../components/ui/Modal'

const WatchDemo = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const openVideo = (video) => {
        setSelectedVideo(video)
        setIsModalOpen(true)
    }

    const videos = {
        asana: [
            { id: 1, title: 'Sun Salutation A', duration: '5:30', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop', locked: false },
            { id: 2, title: 'Warrior Flow', duration: '12:00', image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop', locked: false },
            { id: 3, title: 'Balance & Core', duration: '15:45', image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=2070&auto=format&fit=crop', locked: true },
        ],
        spiritual: [
            { id: 4, title: 'Chakra Balancing', duration: '20:00', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop', locked: false },
            { id: 5, title: 'Mantra Chanting', duration: '10:00', image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2069&auto=format&fit=crop', locked: true },
        ],
        deepYoga: [
            { id: 6, title: 'Yoga Nidra for Sleep', duration: '30:00', image: 'https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2070&auto=format&fit=crop', locked: false },
            { id: 7, title: 'Deep Tissue Release', duration: '45:00', image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop', locked: true },
        ]
    }

    return (
        <div className="min-h-screen bg-[#1a1120] text-white animate-fade-in font-sans">
            <Header />

            {/* Hero Section - Spiritual Background */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2525&auto=format&fit=crop"
                        alt="Spiritual Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1120]/80 via-transparent to-[#1a1120]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-[#1a1120]/60 to-[#1a1120]"></div>
                </div>

                <div className="container-custom relative z-10 text-center px-6">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-amber-100 drop-shadow-lg">
                        Sacred Practice
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Immerse yourself in the ancient wisdom of yoga. Explore our library of guided sessions, spiritual discourses, and deep relaxation techniques.
                    </p>
                </div>
            </div>

            {/* Video Sections */}
            <div className="container-custom py-16 space-y-20">

                {/* Yoga Asanas */}
                <section>
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="h-px bg-white/20 flex-grow"></div>
                        <h2 className="text-3xl font-display font-bold text-yoga-peach-300">Yoga Asanas</h2>
                        <div className="h-px bg-white/20 flex-grow"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.asana.map(video => (
                            <VideoCard key={video.id} video={video} onPlay={() => openVideo(video)} />
                        ))}
                    </div>
                </section>

                {/* Spiritual Videos */}
                <section>
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="h-px bg-white/20 flex-grow"></div>
                        <h2 className="text-3xl font-display font-bold text-yoga-lavender-300">Spiritual Wisdom</h2>
                        <div className="h-px bg-white/20 flex-grow"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.spiritual.map(video => (
                            <VideoCard key={video.id} video={video} onPlay={() => openVideo(video)} />
                        ))}
                    </div>
                </section>

                {/* Deep Yoga */}
                <section>
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="h-px bg-white/20 flex-grow"></div>
                        <h2 className="text-3xl font-display font-bold text-amber-200">Deep Yoga & Nidra</h2>
                        <div className="h-px bg-white/20 flex-grow"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.deepYoga.map(video => (
                            <VideoCard key={video.id} video={video} onPlay={() => openVideo(video)} />
                        ))}
                    </div>
                </section>

                {/* Sacred Sequence - Video Gallery */}
                <section>
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="h-px bg-white/20 flex-grow"></div>
                        <h2 className="text-3xl font-display font-bold text-amber-200">Sacred Sequence Journey</h2>
                        <div className="h-px bg-white/20 flex-grow"></div>
                    </div>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Follow this transformative 11-step sequence to center your mind, open your heart, and find inner peace.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: 11, title: "Centering & Breath", desc: "Settle the body and follow equal inhalations and exhalations to return inward.", duration: "3:00", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop", locked: false },
                            { id: 12, title: "Child's Pose", desc: "Surrender the body and quiet the mind.", duration: "4:00", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop", locked: false },
                            { id: 13, title: "Downward Dog", desc: "Ground through hands and feet while lifting energy up the spine.", duration: "5:00", image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop", locked: false },
                            { id: 14, title: "Low Lunge", desc: "Open the heart and receive prana through a deep hip stretch.", duration: "6:00", image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2026&auto=format&fit=crop", locked: true },
                            { id: 15, title: "Lizard Pose", desc: "Release tension and stored emotions from the hips.", duration: "7:00", image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=2070&auto=format&fit=crop", locked: true },
                            { id: 16, title: "Pigeon Pose", desc: "Soften forward to let go and invite forgiveness.", duration: "8:00", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop", locked: true },
                            { id: 17, title: "Seated Forward Fold", desc: "Fold inward with humility and surrender.", duration: "6:00", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop", locked: true },
                            { id: 18, title: "Head-to-Knee Pose", desc: "Balance inner masculine and feminine energies.", duration: "7:00", image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop", locked: true },
                            { id: 19, title: "Supine Twist", desc: "Gently detox the spine and emotional body.", duration: "5:00", image: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2070&auto=format&fit=crop", locked: false },
                            { id: 20, title: "Legs Up the Wall", desc: "Invite calm, clarity, and grounding.", duration: "10:00", image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop", locked: false },
                            { id: 21, title: "Savasana", desc: "Rest in stillness and absorb peace.", duration: "15:00", image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=2069&auto=format&fit=crop", locked: false }
                        ].map((video, index) => (
                            <div key={video.id} className="relative">
                                <VideoCard video={video} onPlay={() => openVideo(video)} />
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-yoga-peach-500 to-yoga-lavender-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* CTA Footer */}
            <section className="py-20 text-center bg-gradient-to-t from-black/50 to-transparent">
                <h2 className="text-3xl font-bold mb-6">Unlock Full Access</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Get unlimited access to our entire library of 500+ premium classes, workshops, and meditation sessions.
                </p>
                <Link to="/free-trial">
                    <button className="bg-gradient-to-r from-yoga-peach-500 to-yoga-peach-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-yoga-peach-500/30 hover:scale-105 transition-all duration-300">
                        Start Your Free Trial
                    </button>
                </Link>
            </section>

            {/* Video Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedVideo?.title}
                showActions={false}
                size="lg"
            >
                <div className="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center relative group">
                    {/* Placeholder for actual video player */}
                    <img
                        src={selectedVideo?.image}
                        alt={selectedVideo?.title}
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <Play size={40} fill="white" className="text-white ml-2" />
                        </div>
                    </div>
                    <p className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
                        Demo Preview Mode
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">
                        This is a preview of the <strong>{selectedVideo?.title}</strong> session.
                        Full playback is available for subscribed members.
                    </p>
                </div>
            </Modal>
        </div>
    )
}

const VideoCard = ({ video, onPlay }) => (
    <div
        className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
        onClick={video.locked ? null : onPlay}
    >
        <div className="aspect-video relative overflow-hidden">
            <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {video.locked ? (
                    <div className="w-14 h-14 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Lock size={24} className="text-white/80" />
                    </div>
                ) : (
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                )}
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-medium">
                {video.duration}
            </div>
        </div>

        <div className="p-5">
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yoga-peach-300 transition-colors">{video.title}</h3>
            <p className="text-sm text-gray-400">
                {video.locked ? 'Premium Content' : 'Free Preview'}
            </p>
        </div>
    </div>
)

export default WatchDemo
