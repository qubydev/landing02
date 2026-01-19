import React from 'react';
import { Diamond } from 'lucide-react';
import GradientText from './ui/custom/gradient-text';

export default function WhatYouWillLearn() {
    return (
        <div className="p-4 py-16 flex items-center justify-center flex-col">
            <h3 className='text-3xl font-bold mt-12 mb-4'>
                What You Will{" "}
                <GradientText
                    text="LEARN"
                    className="font-bold"
                    gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mt-10">

                <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 flex flex-col h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                    <div className="absolute top-10 right-[-20px] w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex gap-3">
                        <span className="text-[72px] leading-[0.8] font-bold bg-gradient-to-b from-primary to-primary/10 bg-clip-text text-transparent select-none">
                            2
                        </span>
                        <h3 className="text-lg font-bold pt-2 leading-tight">
                            Social Media <br /> Growth
                        </h3>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 relative z-10" />

                    <ul className="relative z-10 space-y-2 text-gray-400">
                        {['Content Planning & Packaging', 'Scripting', 'Storytelling', 'SEO', 'Basics of Cinematography'].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary text-sm font-light">+</span>
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 flex flex-col h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                    <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 bg-primary/15 blur-[70px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex gap-3">
                        <span className="text-[72px] leading-[0.8] font-bold bg-gradient-to-b from-primary to-primary/10 bg-clip-text text-transparent select-none">
                            3
                        </span>
                        <h3 className="text-lg font-bold pt-2 leading-tight">
                            Freelancing <br /> & Agency Building
                        </h3>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 relative z-10" />

                    <ul className="relative z-10 space-y-2 text-gray-400">
                        {[
                            'How to reach out to clients?',
                            'Basics of Marketing',
                            'How to Negotiate Prices?',
                            'How to Scale an Agency?'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary text-sm font-light">+</span>
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 flex flex-col h-full">
                    <div className="absolute top-0 right-0 p-0 overflow-hidden z-20">
                        <div className="bg-gradient-to-r from-primary to-primary/60 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-lg shadow-primary/20">
                            <Diamond className="w-2.5 h-2.5 fill-current" />
                            New
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                    <div className="absolute top-[30%] right-[10%] w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex gap-3">
                        <span className="text-[72px] leading-[0.8] font-bold bg-gradient-to-b from-primary to-primary/10 bg-clip-text text-transparent select-none">
                            4
                        </span>
                        <h3 className="text-lg pt-2 leading-tight">
                            <span className="font-bold block">Introducing the</span>
                            <span className="font-serif italic text-xl text-gray-200">AI Creative Studio</span>
                        </h3>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 relative z-10" />

                    <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                        Unleash your creativity with cutting-edge AI tools for design, content, and video.
                    </p>
                </div>

            </div>
        </div>
    );
}