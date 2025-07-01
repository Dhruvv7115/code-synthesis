"use client"

import { useState } from "react"

interface FAQSectionProps {
  isDarkMode: boolean
  cardClasses: string
  accentColor: string
}

export default function FAQSection({ isDarkMode, cardClasses, accentColor }: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Code Synthesis about?",
      answer:
        "Code Synthesis is a 48-hour hackathon focused on sustainable development and green energy solutions. Participants will create innovative tech solutions to address environmental challenges and build a more sustainable future.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students, professionals, and anyone passionate about technology and sustainability can participate. Teams can have 2-4 members. We welcome participants from all backgrounds and skill levels.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, chargers, and enthusiasm! We'll provide food, drinks, workspace, high-speed internet, and all necessary amenities for the 48-hour event.",
    },
    {
      question: "Are there any prerequisites?",
      answer:
        "Basic programming knowledge is helpful, but we welcome participants from all backgrounds. Passion for sustainability and innovation is more important than technical expertise. We'll have mentors to help throughout the event.",
    },
    {
      question: "How are projects judged?",
      answer:
        "Projects are evaluated based on innovation (25%), technical implementation (25%), sustainability impact (25%), presentation quality (15%), and feasibility (10%). Our panel includes industry experts and sustainability leaders.",
    },
    {
      question: "What happens after the hackathon?",
      answer:
        "Winners receive prizes, mentorship opportunities, and potential funding connections. All participants get certificates, networking opportunities, and access to our alumni community for continued collaboration.",
    },
  ]

  return (
    <section className={`relative py-24 px-6 md:px-12 ${isDarkMode ? "bg-gray-900/20" : "bg-gray-50/50"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            FREQUENTLY ASKED <span className={accentColor}>QUESTIONS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${cardClasses} border rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/10 transition-all duration-300`}
            >
              <button
                className={`w-full p-6 text-left flex items-center justify-between ${isDarkMode ? "hover:bg-gray-800/80" : "hover:bg-gray-50"} transition-colors group`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3
                  className={`text-lg font-black pr-4 ${isDarkMode ? "group-hover:text-green-400" : "group-hover:text-green-600"} transition-colors`}
                >
                  {faq.question}
                </h3>
                <div
                  className={`w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                >
                  <div className="w-4 h-4 border-2 border-green-400 border-t-0 border-l-0 rotate-45 transition-transform"></div>
                </div>
              </button>
              {openFaq === index && (
                <div className={`px-6 pb-6 border-t ${isDarkMode ? "border-gray-800/50" : "border-gray-200"}`}>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} pt-4 leading-relaxed`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
