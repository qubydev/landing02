import React from 'react';
import { Diamond, TrendingUp, Brain, Crown } from 'lucide-react';
import GradientText from './ui/custom/gradient-text';
import DecorativeLine from './ui/custom/decorative-line';

export default function WhatYouWillLearn() {
    return (
        <div className="p-4 py-16 flex items-center justify-center flex-col">
            <h3 className='text-2xl md:text-4xl font-bold mt-12 mb-2'>
                what you'll{" "}
                <GradientText
                    text="LEARN"
                    className="font-bold"
                    gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                />
                {" "}inside
            </h3>

            <DecorativeLine className="mt-2 mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mt-10">

                {/* Card 1: Structured Learning */}
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-primary/40 bg-neutral-950 p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                    <div className="absolute top-10 right-[-20px] w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-125" />

                    <div className="relative z-10 flex gap-3">
                        <span className="text-[72px] leading-[0.8] font-bold bg-gradient-to-b from-primary to-primary/10 bg-clip-text text-transparent select-none transition-all duration-300 group-hover:from-primary group-hover:to-primary/40">
                            1
                        </span>
                        <h3 className="text-lg font-bold pt-2 leading-tight transition-colors duration-300 group-hover:text-primary/90">
                            Structured <br /> Learning Paths
                        </h3>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 relative z-10 transition-all duration-300 group-hover:via-primary/30" />

                    <ul className="relative z-10 space-y-2 text-gray-400">
                        {[
                            'Beginner to Elite progression',
                            'Master Skills That Actually Matter',
                            'Step-by-step actionable roadmaps',
                            'Real-world practical application',
                            'Proven frameworks for success'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 transition-all duration-300 group-hover:translate-x-1">
                                <span className="text-primary text-sm font-light">+</span>
                                <span className="text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Card 2: Financial & Business Intelligence */}
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-primary/40 bg-neutral-950 p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                    <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 bg-primary/15 blur-[70px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-primary/35 group-hover:scale-125" />

                    <div className="relative z-10 flex gap-3">
                        <span className="text-[72px] leading-[0.8] font-bold bg-gradient-to-b from-primary to-primary/10 bg-clip-text text-transparent select-none transition-all duration-300 group-hover:from-primary group-hover:to-primary/40">
                            2
                        </span>
                        <h3 className="text-lg font-bold pt-2 leading-tight transition-colors duration-300 group-hover:text-primary/90">
                            Financial & <br /> Business Thinking
                        </h3>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 relative z-10 transition-all duration-300 group-hover:via-primary/30" />

                    <ul className="relative z-10 space-y-2 text-gray-400">
                        {[
                            'Build Financial Intelligence',
                            'Develop Business Mindset',
                            'Think Like Successful People',
                            'Make Smarter Decisions',
                            'Strategic Wealth Building'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 transition-all duration-300 group-hover:translate-x-1">
                                <span className="text-primary text-sm font-light">+</span>
                                <span className="text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Card 3: Power, Influence & Network */}
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-primary/40 bg-neutral-950 p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute top-0 right-0 p-0 overflow-hidden z-20">
                        <div className="bg-gradient-to-r from-primary to-primary/60 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:from-primary group-hover:to-primary/80 group-hover:shadow-primary/40">
                            <Diamond className="w-2.5 h-2.5 fill-current transition-transform duration-300 group-hover:rotate-12" />
                            Exclusive
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                    <div className="absolute top-[30%] right-[10%] w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-150" />

                    <div className="relative z-10 flex gap-3">
                        <span className="text-[72px] leading-[0.8] font-bold bg-gradient-to-b from-primary to-primary/10 bg-clip-text text-transparent select-none transition-all duration-300 group-hover:from-primary group-hover:to-primary/40">
                            3
                        </span>
                        <h3 className="text-lg font-bold pt-2 leading-tight transition-colors duration-300 group-hover:text-primary/90">
                            Power, Influence <br /> & Network
                        </h3>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 relative z-10 transition-all duration-300 group-hover:via-primary/30" />

                    <ul className="relative z-10 space-y-2 text-gray-400">
                        {[
                            'Master the Hidden Laws of Power',
                            'Build Influence & Authority',
                            'Network with Like-minded Individuals',
                            'Access Exclusive Community',
                            'Learn from Industry Leaders'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 transition-all duration-300 group-hover:translate-x-1">
                                <span className="text-primary text-sm font-light">+</span>
                                <span className="text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}