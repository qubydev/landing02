import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from './ui/custom/gradient-text'
import DecorativeLine from './ui/custom/decorative-line'
import { Button } from './ui/button'
import { FaBrain, FaLightbulb, FaRoad, FaUsers } from 'react-icons/fa'
import { FancyButton } from './ui/custom/fancy-button'

export default function Products() {

    const handleNavClick = (e, to) => {
        e.preventDefault()
        const element = document.querySelector(to)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative text-foreground py-24 px-4">
            <style>{`
                .shimmer {
                    background: linear-gradient(
                        110deg,
                        rgba(255,255,255,0.15) 25%,
                        rgba(255,255,255,0.45) 37%,
                        rgba(255,255,255,0.15) 63%
                    );
                    background-size: 200% 100%;
                    animation: shimmer 2s linear infinite;
                }
                @keyframes shimmer {
                    to { background-position-x: -200%; }
                }
            `}</style>

            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center mb-4">
                    <h3 className="text-3xl font-bold">
                        <GradientText
                            text="Products"
                            className="font-bold"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />
                    </h3>
                    <DecorativeLine className="mt-4" />
                </div>

                <p className="text-center text-foreground/70 mb-12">
                    Check Out Our Exclusive Products
                </p>

                <div className="flex flex-wrap items-stretch justify-center gap-8">

                    <div className="relative flex flex-col p-8 rounded-2xl border max-w-sm w-full border-primary bg-primary/5">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                POPULAR
                            </span>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-2xl font-bold text-primary mb-2">
                                Premium Community
                            </h4>
                            <p className="text-sm font-semibold text-foreground/90">
                                A community to connect and learn with like-minded people.
                            </p>
                        </div>

                        <div className="mb-6 rounded-xl p-3 text-sm font-semibold text-primary shimmer">
                            Unlock bonus worth ₹75,199 including all future upgrades at zero cost!
                        </div>

                        <div className="flex-1 space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <FaBrain className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Wealth Mindset</span>
                                    <span className="text-foreground/60"> - Learn how successful people think and make decisions</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaLightbulb className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Power Principles</span>
                                    <span className="text-foreground/60"> - Master the hidden laws of influence and success</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaRoad className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Personal Roadmap</span>
                                    <span className="text-foreground/60"> - Customized path tailored to your goals</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaUsers className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Community Access</span>
                                    <span className="text-foreground/60"> - Network with like-minded individuals</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-3">
                                <span className="text-foreground/50 line-through text-lg">
                                    ₹31,597
                                </span>
                                <span className="text-4xl font-bold text-primary">
                                    ₹799
                                </span>
                            </div>
                        </div>

                        <Link to="/join" className="w-full">
                            <FancyButton className="w-full rounded-full font-semibold py-3">
                                JOIN NOW
                            </FancyButton>
                        </Link>
                    </div>

                    <div id="ebook" className="relative flex flex-col p-8 rounded-2xl border max-w-sm w-full bg-card border-primary">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold text-primary mb-2">
                                E-Book
                            </h4>
                            <p className="text-sm font-semibold text-foreground/90">
                                THE ART OF LIFEMAXING
                            </p>
                            <p className="text-sm text-foreground/60 mt-1">
                                A No-Nonsense Guide to Building Elite Status and Wealth
                            </p>
                        </div>

                        <img
                            alt="Ebook Cover"
                            src="/ebook1.jpg"
                            className='w-full max-w-[180px] mx-auto mb-6 border-2'
                        />

                        <div className="flex-1 space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <FaBrain className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">The Ultimate Guide</span>
                                    <span className="text-foreground/60"> - Looking good, feeling great, and getting rich</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaLightbulb className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Hidden Secrets</span>
                                    <span className="text-foreground/60"> - Gain power and influence nobody talks about</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaRoad className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Free Bonuses</span>
                                    <span className="text-foreground/60"> - Worth ₹15,199 including all future upgrades at zero cost</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaUsers className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Comprehensive eBook</span>
                                    <span className="text-foreground/60"> - 45 pages + Master The Art of Sales (Free eBook)</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaLightbulb className="text-primary mt-1 flex-shrink-0 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Best Sales Tactics</span>
                                    <span className="text-foreground/60"> - Make a ton of money properly</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-3">
                                <span className="text-foreground/50 line-through text-lg">
                                    ₹1,299
                                </span>
                                <span className="text-4xl font-bold text-primary">
                                    ₹149
                                </span>
                            </div>
                        </div>

                        <Link to="/ebook-payment" className="w-full">
                            <FancyButton className="w-full rounded-full font-semibold py-3">
                                GET NOW
                            </FancyButton>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}