import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from './ui/custom/gradient-text'
import DecorativeLine from './ui/custom/decorative-line'
import { Button } from './ui/button'
import { FaBrain, FaLightbulb, FaRoad, FaUsers } from 'react-icons/fa'
import { FancyButton } from './ui/custom/fancy-button'

const PRODUCTS = [
    {
        popular: true,
        title: 'Premium Community',
        subtitle: 'A community to connect and learn with like-minded people.',
        offer: 'Unlock bonus worth ₹75,199 including all future upgrades at zero cost!',
        features: [
            { label: 'Wealth Mindset', desc: 'Learn how successful people think and make decisions', icon: FaBrain },
            { label: 'Power Principles', desc: 'Master the hidden laws of influence and success', icon: FaLightbulb },
            { label: 'Personal Roadmap', desc: 'Customized path tailored to your goals', icon: FaRoad },
            { label: 'Community Access', desc: 'Network with like-minded individuals', icon: FaUsers },
        ],
        originalPrice: '₹31,597',
        price: '₹799',
    },
    {
        popular: false,
        title: 'E-Book',
        subtitle: 'THE ART OF LIFEMAXING',
        description: 'A No-Nonsense Guide to Building Elite Status and Wealth',
        features: [
            { label: 'The Ultimate Guide', desc: 'Looking good, feeling great, and getting rich', icon: FaBrain },
            { label: 'Hidden Secrets', desc: 'Gain power and influence nobody talks about', icon: FaLightbulb },
            { label: 'Free Bonuses', desc: 'Worth ₹15,199 including all future upgrades at zero cost', icon: FaRoad },
            { label: 'Comprehensive eBook', desc: '45 pages + Master The Art of Sales (Free eBook)', icon: FaUsers },
            { label: 'Best Sales Tactics', desc: 'Make a ton of money properly', icon: FaLightbulb },
        ],
        originalPrice: '₹1,299',
        price: '₹199',
    },
]

export default function Products() {
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
                    {PRODUCTS.map((product, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-2xl border max-w-sm w-full ${product.popular
                                ? 'border-primary bg-primary/5'
                                : 'border-foreground/20 bg-card'
                                }`}
                        >
                            {product.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                        POPULAR
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h4 className="text-2xl font-bold text-primary mb-2">
                                    {product.title}
                                </h4>
                                {product.subtitle && (
                                    <p className="text-sm font-semibold text-foreground/90">
                                        {product.subtitle}
                                    </p>
                                )}
                                {product.description && (
                                    <p className="text-sm text-foreground/60 mt-1">
                                        {product.description}
                                    </p>
                                )}
                            </div>

                            {product.offer && (
                                <div className="mb-6 rounded-xl p-3 text-sm font-semibold text-primary shimmer">
                                    {product.offer}
                                </div>
                            )}

                            <div className="flex-1 space-y-4 mb-8">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <feature.icon className="text-primary mt-1 flex-shrink-0 size-4" />
                                        <div>
                                            <span className="font-semibold text-foreground">
                                                {feature.label}
                                            </span>
                                            <span className="text-foreground/60"> - {feature.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-foreground/50 line-through text-lg">
                                        {product.originalPrice}
                                    </span>
                                    <span className="text-4xl font-bold text-primary">
                                        {product.price}
                                    </span>
                                </div>
                            </div>

                            <Link to="/join" className="w-full">
                                {product.popular ? (
                                    <FancyButton className="w-full rounded-full font-semibold py-3">
                                        JOIN NOW
                                    </FancyButton>
                                ) : (
                                    <Button
                                        size="xl"
                                        className="w-full rounded-full font-semibold bg-foreground/10 hover:bg-foreground/20 text-foreground"
                                        variant="ghost"
                                    >
                                        JOIN NOW
                                    </Button>
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
