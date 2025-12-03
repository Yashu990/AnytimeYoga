import React, { useState } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Dropdown from '../components/ui/Dropdown'
import Modal from '../components/ui/Modal'
import { useToast, ToastContainer } from '../components/ui/Toast'
import Card, { StatCard } from '../components/ui/Card'
import { Spinner, DotsLoader, PulseLoader, PageLoader, Skeleton } from '../components/ui/Loader'
import { Mail, Lock, Calendar, Users, Download, Heart } from 'lucide-react'

const ComponentDemo = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [yogaType, setYogaType] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showPageLoader, setShowPageLoader] = useState(false)
    const { toasts, addToast, removeToast } = useToast()

    const yogaOptions = [
        { value: 'vinyasa', label: 'Vinyasa Flow' },
        { value: 'hatha', label: 'Hatha Yoga' },
        { value: 'yin', label: 'Yin Yoga' },
        { value: 'kundalini', label: 'Kundalini' },
        { value: 'power', label: 'Power Yoga' }
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-display font-bold gradient-text mb-4">
                        UI Component Library
                    </h1>
                    <p className="text-gray-600">
                        Premium reusable components for Anytime Yoga
                    </p>
                </div>

                {/* Buttons */}
                <Card title="Buttons" subtitle="Multiple variants and states" className="mb-8">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Variants</h4>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">Primary Button</Button>
                                <Button variant="secondary">Secondary Button</Button>
                                <Button variant="outline">Outline Button</Button>
                                <Button variant="ghost">Ghost Button</Button>
                                <Button variant="danger">Danger Button</Button>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="small">Small</Button>
                                <Button size="medium">Medium</Button>
                                <Button size="large">Large</Button>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">With Icons & States</h4>
                            <div className="flex flex-wrap gap-3">
                                <Button icon={Download}>Download</Button>
                                <Button icon={Calendar} iconPosition="right">Schedule</Button>
                                <Button loading>Loading</Button>
                                <Button disabled>Disabled</Button>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Inputs */}
                <Card title="Input Fields" subtitle="Text inputs with validation" className="mb-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="your@email.com"
                            icon={Mail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            icon={Lock}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Input
                            label="With Error"
                            placeholder="Enter something"
                            error="This field is required"
                        />
                        <Input
                            label="Disabled Input"
                            placeholder="Cannot edit"
                            disabled
                            value="Disabled value"
                        />
                    </div>
                </Card>

                {/* Dropdowns */}
                <Card title="Dropdowns" subtitle="Select from options" className="mb-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Dropdown
                            label="Yoga Type"
                            options={yogaOptions}
                            value={yogaType}
                            onChange={setYogaType}
                            placeholder="Select yoga type"
                            required
                        />
                        <Dropdown
                            label="Disabled Dropdown"
                            options={yogaOptions}
                            value=""
                            onChange={() => { }}
                            disabled
                        />
                    </div>
                </Card>

                {/* Modals */}
                <Card title="Modals" subtitle="Dialogs and confirmations" className="mb-8">
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                        <Button
                            variant="secondary"
                            onClick={() => addToast('This is a success message!', 'success')}
                        >
                            Show Success Toast
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => addToast('This is an error message!', 'error')}
                        >
                            Show Error Toast
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => addToast('This is info!', 'info')}
                        >
                            Show Info Toast
                        </Button>
                    </div>
                </Card>

                {/* Cards */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cards & Stat Cards</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <StatCard
                            title="Total Users"
                            value="1,284"
                            change={12.5}
                            icon={Users}
                            color="blue"
                        />
                        <StatCard
                            title="Sessions Booked"
                            value="3,456"
                            change={8.3}
                            icon={Calendar}
                            color="green"
                        />
                        <StatCard
                            title="Teachers"
                            value="24"
                            change={-2.1}
                            icon={Users}
                            color="orange"
                        />
                        <StatCard
                            title="Favorites"
                            value="892"
                            change={15.7}
                            icon={Heart}
                            color="purple"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card variant="default" title="Default Card" hover>
                            <p className="text-gray-600">This is a default card with hover effect.</p>
                        </Card>
                        <Card variant="gradient" title="Gradient Card" hover>
                            <p className="text-gray-600">This card has a gradient background.</p>
                        </Card>
                        <Card variant="glass" title="Glass Card" hover>
                            <p className="text-gray-600">This card uses glassmorphism effect.</p>
                        </Card>
                    </div>
                </div>

                {/* Loaders */}
                <Card title="Loaders & Spinners" subtitle="Loading states and animations" className="mb-8">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Spinners</h4>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="text-center">
                                    <Spinner size="sm" />
                                    <p className="text-xs text-gray-600 mt-2">Small</p>
                                </div>
                                <div className="text-center">
                                    <Spinner size="md" />
                                    <p className="text-xs text-gray-600 mt-2">Medium</p>
                                </div>
                                <div className="text-center">
                                    <Spinner size="lg" />
                                    <p className="text-xs text-gray-600 mt-2">Large</p>
                                </div>
                                <div className="text-center">
                                    <Spinner size="xl" />
                                    <p className="text-xs text-gray-600 mt-2">XL</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Other Loaders</h4>
                            <div className="flex flex-wrap items-center gap-8">
                                <div className="text-center">
                                    <DotsLoader />
                                    <p className="text-xs text-gray-600 mt-2">Dots</p>
                                </div>
                                <div className="text-center">
                                    <PulseLoader size="md" />
                                    <p className="text-xs text-gray-600 mt-2">Pulse</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Skeleton Loader</h4>
                            <div className="space-y-3">
                                <Skeleton width="full" height="4" />
                                <Skeleton width="3/4" height="4" />
                                <Skeleton width="1/2" height="4" />
                            </div>
                        </div>

                        <div>
                            <Button onClick={() => setShowPageLoader(true)}>
                                Show Full Page Loader (5s)
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Modal Demo */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Confirm Action"
                type="confirmation"
                onConfirm={() => addToast('Action confirmed!', 'success')}
                confirmText="Confirm"
                cancelText="Cancel"
            >
                <p className="text-gray-700">
                    This is a confirmation modal. Click confirm to proceed or cancel to close.
                </p>
            </Modal>

            {/* Toast Container */}
            <ToastContainer toasts={toasts} removeToast={removeToast} />

            {/* Page Loader Demo */}
            {showPageLoader && <PageLoader message="Loading your content..." />}
            {showPageLoader && setTimeout(() => setShowPageLoader(false), 5000)}
        </div>
    )
}

export default ComponentDemo
