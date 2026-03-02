"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What curriculum do you follow?",
        answer: (
            <div className="space-y-2">
                <p>Utatu International School follows the Cambridge British Curriculum, offering:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Cambridge Primary (Years 1–6)</li>
                    <li>Cambridge Lower Secondary (Years 7–9)</li>
                    <li>Cambridge IGCSE (Years 10–11)</li>
                    <li>Cambridge AS &amp; A-Level (Years 12–13)</li>
                </ul>
                <p>Students sit for Cambridge Checkpoint, IGCSE, and A-Level exams through registered Cambridge exam centers.</p>
            </div>
        )
    },
    {
        question: "How do parents communicate with the school?",
        answer: (
            <div className="space-y-2">
                <p>We value open communication and provide multiple channels, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Parent portal &amp; termly progress reports</li>
                    <li>Scheduled parent-teacher meetings</li>
                    <li>WhatsApp and email updates</li>
                    <li>Direct teacher and mentor contact for academic</li>
                </ul>
            </div>
        )
    },
    {
        question: "Can my child transition from another curriculum (Kenyan or other local curriculum)?",
        answer: "Yes! We welcome students transitioning from the Kenyan national curriculum (cbc) or other local education systems. During admission, we consider your child’s age, previous academic level, and the results of a placement assessment to determine the most suitable class. Our academic team provides bridging support, mentorship, and a personalized learning plan to ensure a smooth transition into the Cambridge International Curriculum Utatu's structured learning environment."
    },
    {
        question: "Are there extracurricular and social activities?",
        answer: "Absolutely! Students participate in sports, innovation challenges, art and talent showcases, leadership programs, and local and international competitions. These activities nurture creativity, confidence, and teamwork."
    },
    {
        question: "How is progress monitored?",
        answer: "Students are continuously assessed through quizzes, assignments, projects, and tests. Teachers provide termly progress reports, and parents can track academic performance through the Utatu Learning Portal."
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // Default open the second one as in screenshot

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-background">
            <div className="container max-w-5xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left Column - Heading */}
                    <div className="md:col-span-5">
                        <h2 className="text-5xl md:text-[56px] font-bold font-heading text-[#4F4F4F] leading-[1.1] tracking-tight">
                            Frequently<br />asked<br />questions
                        </h2>
                    </div>

                    {/* Right Column - Questions */}
                    <div className="md:col-span-7 flex flex-col">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="border-b border-gray-100 last:border-0">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="flex items-start w-full py-5 text-left focus:outline-none transition-colors"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="mr-6 mt-1 text-primary flex-shrink-0">
                                            {isOpen ? <Minus className="h-5 w-5 font-light" strokeWidth={1.5} /> : <Plus className="h-5 w-5 font-light" strokeWidth={1.5} />}
                                        </span>
                                        <div className="flex flex-col w-full">
                                            <span className="font-medium text-[#4a4a4a] text-[17px]">
                                                {faq.question}
                                            </span>

                                            <div
                                                className={cn(
                                                    "overflow-hidden transition-all duration-500 ease-in-out",
                                                    isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                                                )}
                                            >
                                                <div className="text-[#888888] text-[15px] leading-relaxed pr-4 pb-2">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
