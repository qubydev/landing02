import React from 'react'
import { Link } from 'react-router-dom'
import { FaBrain, FaLightbulb, FaRoad, FaUsers } from 'react-icons/fa'
import { FancyButton } from '@/components/ui/custom/fancy-button'

export default function EbookFull() {
    return (
        <section className="relative text-foreground p-4 md:pt-16">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row items-stretch gap-8 border border-primary rounded-2xl bg-card p-8">
                    <div className="flex flex-1 items-center justify-center">
                        <img
                            src="/ebook1.jpg"
                            alt="Ebook Cover"
                            className="w-full max-w-xs rounded-xl border-2"
                        />
                    </div>

                    <div className="flex flex-1 flex-col">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold text-primary mb-2">
                                THE ART OF LIFEMAXING
                            </h4>
                            <p className="text-sm font-semibold text-foreground/90">
                                A No-Nonsense Guide to Building Elite Status and Wealth
                            </p>
                        </div>

                        <div className="flex-1 space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <FaBrain className="text-primary mt-1 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">The Ultimate Guide</span>
                                    <span className="text-foreground/60"> – Looking good, feeling great, and getting rich</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaLightbulb className="text-primary mt-1 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Hidden Secrets</span>
                                    <span className="text-foreground/60"> – Power and influence nobody talks about</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaRoad className="text-primary mt-1 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Free Bonuses</span>
                                    <span className="text-foreground/60"> – Worth ₹15,199 with all future upgrades</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaUsers className="text-primary mt-1 size-4" />
                                <div>
                                    <span className="font-semibold text-foreground">Comprehensive eBook</span>
                                    <span className="text-foreground/60"> – 45 pages + Master The Art of Sales</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
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
