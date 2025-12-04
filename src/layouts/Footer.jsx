import React from 'react'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-br from-yoga-sage-900 via-yoga-lavender-900 to-yoga-peach-900 text-white">
            <div className="container-custom px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="/logo.jpg"
                                alt="AnyTime Yoga Logo"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <h3 className="text-xl font-bold font-display">Anytime Yoga</h3>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            Your time. Your peace. Your health — Anytime. Experience the transformative power of yoga with flexible sessions designed for your busy lifestyle.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#benefits" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Benefits
                                </a>
                            </li>
                            <li>
                                <a href="#why-yoga" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Why Yoga
                                </a>
                            </li>
                            <li>
                                <a href="/health-counselor" className="text-white/80 hover:text-white transition-colors text-sm">
                                    Health Counselor
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-sm">
                                <Mail size={16} className="text-white/60" />
                                <span className="text-white/80">info@anytimeyoga.com</span>
                            </li>
                            <li className="flex items-center space-x-2 text-sm">
                                <Phone size={16} className="text-white/60" />
                                <span className="text-white/80">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-2 text-sm">
                                <MapPin size={16} className="text-white/60" />
                                <span className="text-white/80">123 Wellness Street, Peace City</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                                aria-label="Youtube"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
                    <p>© {currentYear} Anytime Yoga. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">
                        Made with <Heart size={16} className="mx-1 text-red-400" fill="currentColor" /> for wellness
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
