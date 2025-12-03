# Anytime Yoga - UI Component Library Demo

This page demonstrates all the reusable UI components available in the Anytime Yoga platform.

## Usage Examples

### Buttons
```jsx
import Button from './components/ui/Button'

// Primary Button
<Button variant="primary">Book Session</Button>

// Secondary Button
<Button variant="secondary">Learn More</Button>

// Outline Button
<Button variant="outline">Cancel</Button>

// With Icon
<Button variant="primary" icon={Calendar}>Schedule</Button>

// Loading State
<Button variant="primary" loading>Processing...</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### Input Fields
```jsx
import Input from './components/ui/Input'
import { Mail, Lock } from 'lucide-react'

// Basic Input
<Input 
  label="Email"
  type="email"
  placeholder="your@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// With Icon
<Input 
  label="Password"
  type="password"
  icon={Lock}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

// With Error
<Input 
  label="Email"
  error="Invalid email format"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Dropdown
```jsx
import Dropdown from './components/ui/Dropdown'

const options = [
  { value: 'vinyasa', label: 'Vinyasa' },
  { value: 'hatha', label: 'Hatha' },
  { value: 'yin', label: 'Yin' }
]

<Dropdown
  label="Yoga Type"
  options={options}
  value={selectedType}
  onChange={setSelectedType}
  placeholder="Select yoga type"
/>
```

### Modal
```jsx
import Modal from './components/ui/Modal'

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Booking"
  type="confirmation"
  onConfirm={handleConfirm}
  confirmText="Book Now"
>
  <p>Are you sure you want to book this session?</p>
</Modal>

// Types: 'info', 'success', 'warning', 'error', 'confirmation'
// Sizes: 'sm', 'md', 'lg'
```

### Toast Notifications
```jsx
import { useToast, ToastContainer } from './components/ui/Toast'

function App() {
  const { toasts, addToast, removeToast } = useToast()

  const handleSuccess = () => {
    addToast('Session booked successfully!', 'success')
  }

  return (
    <>
      <Button onClick={handleSuccess}>Book Session</Button>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  )
}

// Types: 'success', 'error', 'warning', 'info'
```

### Cards
```jsx
import Card, { StatCard } from './components/ui/Card'
import { Calendar } from 'lucide-react'

// Basic Card
<Card title="Upcoming Session" subtitle="Your next class">
  <p>Vinyasa Flow - Tomorrow at 7:00 AM</p>
</Card>

// Stat Card
<StatCard
  title="Total Bookings"
  value="24"
  change={12.5}
  icon={Calendar}
  color="blue"
/>

// Variants: 'default', 'gradient', 'glass', 'bordered'
```

### Loaders
```jsx
import Loader, { Spinner, DotsLoader, PulseLoader, PageLoader, Skeleton } from './components/ui/Loader'

// Spinner
<Spinner size="md" color="yoga-sage" />

// Dots
<DotsLoader color="yoga-sage" />

// Pulse
<PulseLoader size="md" />

// Full Page
<PageLoader message="Loading your session..." />

// Skeleton
<Skeleton width="full" height="4" />
```

## Component Features

### All Components Include:
- ✅ Premium styling with yoga theme colors
- ✅ Responsive design
- ✅ Smooth animations and transitions
- ✅ Accessibility support
- ✅ Error states
- ✅ Disabled states
- ✅ Dark mode compatibility (glass effects)
- ✅ Consistent spacing and typography

### Design System Colors:
- **Primary**: Sage Green (`yoga-sage-*`)
- **Secondary**: Lavender (`yoga-lavender-*`)
- **Success**: Green
- **Error**: Red
- **Warning**: Orange
- **Info**: Blue
