import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-yoga-sage-700' : 'text-gray-800 group-hover:text-yoga-sage-600'}`}>
                    {question}
                </span>
                <div className={`ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-yoga-sage-100 text-yoga-sage-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const faqs = [
        {
            question: "Do I need to be flexible to start yoga?",
            answer: "Not at all! Flexibility is a result of yoga, not a prerequisite. Our beginner classes are designed specifically to help you build flexibility gradually, regardless of your starting point."
        },
        {
            question: "How often should I practice to see results?",
            answer: "Consistency is key. Even 20-30 minutes, 3-4 times a week can lead to noticeable improvements in strength, flexibility, and stress levels within a few weeks."
        },
        {
            question: "Can yoga help with weight loss?",
            answer: "Yes! Dynamic styles like Vinyasa or Power Yoga burn calories and build muscle. Additionally, yoga reduces cortisol (stress hormone) levels, which can help reduce belly fat and curb emotional eating."
        },
        {
            question: "What equipment do I need?",
            answer: "Just a comfortable yoga mat and clothes you can move freely in. Props like blocks and straps can be helpful but aren't strictly necessary for beginners."
        },
        {
            question: "Is yoga safe if I have back pain?",
            answer: "Yoga is often recommended for back pain relief. However, it's important to listen to your body and avoid poses that cause sharp pain. We offer specific sessions focused on gentle back care."
        }
    ]

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Common questions about starting your journey.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection
