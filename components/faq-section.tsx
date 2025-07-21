"use client";

import { useState } from "react";

interface FAQSectionProps {
  isDarkMode: boolean;
  cardClasses: string;
  accentColor: string;
}

export default function FAQSection({
  isDarkMode,
  cardClasses,
  accentColor,
}: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is CodeSynthesis?",
      answer:
        "CodeSynthesis is a sustainability-themed hackathon by CodeGeeks, where developers build tech solutions for a greener future. It's the flagship hackathon by CodeGeeks, the official coding society of GTB4CEC, focused on challenging innovators to craft tech-driven solutions for a greener, smarter world.",
    },
    {
      question: "Who can participate?",
      answer:
        "Any student or developer from India can participate. Teams from all engineering colleges and universities are welcome.",
    },
    {
      question: "How many members per team?",
      answer:
        "Teams can have 2 - 4 members. At least one team member should be from an engineering background.",
    },
    {
      question: "What are the prizes?",
      answer:
        "The winning team takes home exciting prizes along with exclusive opportunities from our partners.",
    },
    {
      question: "Is there any registration fee?",
      answer:
        "Registration is completely free. We believe in providing equal opportunities to all talented developers across India.",
    },
    {
      question: "What documents do I need?",
      answer:
        "You will need a valid college ID, Aadhaar Card, and GitHub profile for registration.",
    },
  ];

  return (
    <section
      id="faq"
      className={`relative py-24 px-6 md:px-12 ${
        isDarkMode ? "bg-gray-900/20" : "bg-gray-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black  tracking-tight mb-8 ">
            FREQUENTLY ASKED <span className={accentColor}>QUESTIONS</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 mx-auto mb-12 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${cardClasses} border rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/10 transition-all duration-300`}
            >
              <button
                className={`w-full p-6 text-left flex items-center justify-between ${
                  isDarkMode ? "hover:bg-gray-800/80" : "hover:bg-gray-50"
                } transition-colors group`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3
                  className={`text-lg font-black pr-4 ${
                    isDarkMode
                      ? "group-hover:text-green-400"
                      : "group-hover:text-green-600"
                  } transition-colors`}
                >
                  {faq.question}
                </h3>
                <div
                  className={`w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                >
                  <div className="w-2 h-2 border-2 border-green-400 border-t-0 border-l-0 rotate-45 transition-transform"></div>
                </div>
              </button>
              {openFaq === index && (
                <div
                  className={`px-6 pb-6 border-t ${
                    isDarkMode ? "border-gray-800/50" : "border-gray-200"
                  }`}
                >
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } pt-4 leading-relaxed`}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
