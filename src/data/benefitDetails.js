import { Activity, Zap, Shield, Heart, Brain, Moon, Smile, Wind } from 'lucide-react'

export const benefitDetails = [
    {
        id: 'flexibility',
        title: 'Flexibility',
        subtitle: 'Unlock Your Potential',
        description: "Flexibility is not just about touching your toes; it's about freedom of movement. Improving your flexibility reduces muscle tension, prevents injuries, and improves posture. It allows your body to move with greater ease and fluidity in everyday life.",
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'peach',
        tips: [
            "Consistency is key: Stretch daily, even if it's just for 10 minutes.",
            "Breathe deeply: Never hold your breath while stretching; exhale into the stretch.",
            "Warm up first: Cold muscles are less pliable and more prone to injury.",
            "Listen to your body: Discomfort is okay, but pain is a warning sign."
        ],
        steps: [
            {
                title: "Forward Fold (Uttanasana)",
                description: "Stand tall, exhale and hinge at your hips to fold forward. Let your head hang heavy.",
                duration: "Hold for 30-60 seconds"
            },
            {
                title: "Cat-Cow Stretch",
                description: "On hands and knees, alternate between arching your back (Cow) and rounding it (Cat).",
                duration: "Repeat 10 times"
            },
            {
                title: "Downward Facing Dog",
                description: "Form an inverted V-shape. Press your heels toward the mat and lift your hips high.",
                duration: "Hold for 1 minute"
            }
        ]
    },
    {
        id: 'strength',
        title: 'Strength',
        subtitle: 'Build Your Foundation',
        description: "Yoga builds functional strength using your own body weight. Holding poses engages deep stabilizing muscles that are often overlooked in traditional weightlifting, leading to a balanced and resilient physique.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'peach',
        tips: [
            "Engage your core: It protects your lower back in almost every pose.",
            "Focus on alignment: Proper form builds strength more effectively than depth.",
            "Hold poses longer: Time under tension builds endurance and muscle density.",
            "Balance effort and ease: Find the 'sthira sukha' (steady and comfortable) in each pose."
        ],
        steps: [
            {
                title: "Plank Pose",
                description: "Align wrists under shoulders and form a straight line from head to heels. Engage core.",
                duration: "Hold for 30-60 seconds"
            },
            {
                title: "Warrior II (Virabhadrasana II)",
                description: "Deep lunge with arms extended. Strengthens legs, glutes, and shoulders.",
                duration: "Hold for 1 minute per side"
            },
            {
                title: "Chair Pose (Utkatasana)",
                description: "Sit back as if into a chair, reaching arms overhead. Fires up quads and glutes.",
                duration: "Hold for 30-45 seconds"
            }
        ]
    },
    {
        id: 'immunity',
        title: 'Immunity',
        subtitle: 'Boost Your Defenses',
        description: "Yoga stimulates the lymphatic system, which is responsible for flushing out toxins and fighting infection. Inversions and twisting poses are particularly effective for circulating lymph fluid and boosting immune function.",
        image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'peach',
        tips: [
            "Practice inversions: Getting your legs above your heart helps lymph drainage.",
            "Stay hydrated: Water is essential for the lymphatic system to function.",
            "Reduce stress: Chronic stress suppresses the immune system; yoga lowers cortisol.",
            "Prioritize sleep: Your body repairs and defends itself while you rest."
        ],
        steps: [
            {
                title: "Legs Up the Wall (Viparita Karani)",
                description: "Lie on your back with legs resting vertically against a wall. deeply relaxing.",
                duration: "Hold for 5-10 minutes"
            },
            {
                title: "Seated Spinal Twist",
                description: "Twisting compresses and releases organs, stimulating circulation and detoxification.",
                duration: "Hold for 1 minute per side"
            },
            {
                title: "Bridge Pose",
                description: "Gentle chest opener that stimulates the thymus gland, a key immune organ.",
                duration: "Hold for 30-60 seconds"
            }
        ]
    },
    {
        id: 'heart-health',
        title: 'Heart Health',
        subtitle: 'Nurture Your Heart',
        description: "Yoga is a heart-healthy activity that can lower blood pressure, reduce cholesterol, and improve heart rate variability. The combination of movement and controlled breathing improves cardiovascular efficiency and reduces strain on the heart.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'peach',
        tips: [
            "Keep moving: Vinyasa or Flow styles get your heart rate up.",
            "Breathe rhythmically: Coherent breathing syncs your heart and breath.",
            "Practice gratitude: Positive emotions have a direct beneficial effect on heart health.",
            "Cool down properly: Allow your heart rate to return to normal gradually."
        ],
        steps: [
            {
                title: "Sun Salutations (Surya Namaskar)",
                description: "A flowing sequence of 12 poses linked with breath. Great cardiovascular warm-up.",
                duration: "Perform 5-10 rounds"
            },
            {
                title: "Camel Pose (Ustrasana)",
                description: "Deep backbend that expands the chest and increases circulation to the heart.",
                duration: "Hold for 30 seconds"
            },
            {
                title: "Corpse Pose (Savasana)",
                description: "Deep relaxation lowers blood pressure and allows the heart to rest.",
                duration: "Rest for 5-10 minutes"
            }
        ]
    },
    {
        id: 'focus',
        title: 'Focus',
        subtitle: 'Sharpen Your Mind',
        description: "In a world of distractions, yoga trains the mind to stay present. Balancing poses and gaze-focused drills (Drishti) improve concentration and mental clarity, helping you stay on task off the mat.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'lavender',
        tips: [
            "Use a Drishti: Fix your gaze on one unmoving point to steady your mind.",
            "Focus on the breath: When the mind wanders, bring it back to the inhale and exhale.",
            "Eliminate distractions: Practice in a quiet space without your phone.",
            "Start small: Try to maintain perfect focus for just 1 minute, then build up."
        ],
        steps: [
            {
                title: "Tree Pose (Vrksasana)",
                description: "Balance on one leg. Requires intense focus to maintain stability.",
                duration: "Hold for 1 minute per side"
            },
            {
                title: "Eagle Pose (Garudasana)",
                description: "Wrapping limbs restricts blood flow; releasing floods the body. Requires concentration.",
                duration: "Hold for 30-45 seconds"
            },
            {
                title: "Alternate Nostril Breathing",
                description: "Balancing breathwork that synchronizes the two hemispheres of the brain.",
                duration: "Practice for 3-5 minutes"
            }
        ]
    },
    {
        id: 'better-sleep',
        title: 'Better Sleep',
        subtitle: 'Rest & Restore',
        description: "Yoga activates the parasympathetic nervous system (rest and digest), lowering cortisol levels and preparing the body for deep, restorative sleep. A gentle evening practice can be a powerful remedy for insomnia.",
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'lavender',
        tips: [
            "Practice before bed: A gentle routine 30 minutes before sleep signals your body to wind down.",
            "Dim the lights: Create a calming atmosphere to boost melatonin.",
            "Focus on exhalations: Lengthening your exhale slows your heart rate.",
            "Use props: Pillows and blankets make poses more restorative and comfortable."
        ],
        steps: [
            {
                title: "Child's Pose (Balasana)",
                description: "Rest your forehead on the mat. Signals safety and relaxation to the brain.",
                duration: "Hold for 2-3 minutes"
            },
            {
                title: "Reclined Bound Angle",
                description: "Lie back with soles of feet touching. Opens hips and relaxes the abdomen.",
                duration: "Hold for 5 minutes"
            },
            {
                title: "Yoga Nidra",
                description: "Guided 'yogic sleep' meditation. Extremely effective for deep rest.",
                duration: "Listen to a 10-20 min track"
            }
        ]
    },
    {
        id: 'mood-boost',
        title: 'Mood Boost',
        subtitle: 'Elevate Your Spirit',
        description: "Movement is medicine for the mood. Yoga releases endorphins, dopamine, and serotonin—the brain's 'feel-good' chemicals. Backbends and chest openers are particularly known for their uplifting and energizing effects.",
        image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'lavender',
        tips: [
            "Open your heart: Physically expanding the chest can emotionally lift your spirits.",
            "Smile while you practice: It tricks your brain into feeling happier.",
            "Try a faster pace: Getting your blood flowing can shake off lethargy.",
            "Practice outdoors: Connecting with nature amplifies the mood-boosting benefits."
        ],
        steps: [
            {
                title: "Wheel Pose (Urdhva Dhanurasana)",
                description: "Full backbend. exhilarating and energizing, known to combat mild depression.",
                duration: "Hold for 15-30 seconds"
            },
            {
                title: "Dancer's Pose (Natarajasana)",
                description: "Elegant balance and backbend. Cultivates grace and a sense of lightness.",
                duration: "Hold for 30-45 seconds per side"
            },
            {
                title: "Lion's Breath (Simhasana)",
                description: "Forceful exhale with tongue out. Releases tension and invites playfulness.",
                duration: "Repeat 3-5 times"
            }
        ]
    },
    {
        id: 'stress-relief',
        title: 'Stress Relief',
        subtitle: 'Find Your Calm',
        description: "Yoga is one of the most effective tools for managing stress. By combining physical movement with mindful breathing, it lowers stress hormones and triggers the relaxation response, helping you navigate life's challenges with equanimity.",
        image: "https://images.unsplash.com/photo-1508672019048-805c276e7e5e?q=80&w=2026&auto=format&fit=crop",
        colorTheme: 'lavender',
        tips: [
            "Breathe through it: When a pose gets tough, use your breath to stay calm.",
            "Ground yourself: Focus on the parts of your body touching the floor.",
            "Let go of judgment: Your practice is for you, not for how it looks.",
            "Take Savasana seriously: It's where the benefits of the practice integrate."
        ],
        steps: [
            {
                title: "Standing Forward Fold (Uttanasana)",
                description: "Releases tension in the back and neck. deeply soothing for the nervous system.",
                duration: "Hold for 1-2 minutes"
            },
            {
                title: "Happy Baby Pose",
                description: "Gently opens hips and releases the lower back. Playful and relieving.",
                duration: "Rock gently for 1 minute"
            },
            {
                title: "4-7-8 Breathing",
                description: "Inhale for 4, hold for 7, exhale for 8. Instantly calms the nervous system.",
                duration: "Repeat for 4 cycles"
            }
        ]
    }
]
