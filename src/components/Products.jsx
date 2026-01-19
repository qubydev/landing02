import React from 'react';
import GradientText from './ui/custom/gradient-text';
import { Button } from './ui/button';
import { FaCheck } from 'react-icons/fa';

const PRODUCTS = [
    {
        popular: true,
        title: 'Premium Community',
        subtitle: 'A community to connect and learn with like-minded people.',
        features: [
            { label: 'Wealth Mindset', desc: 'Learn how successful people think and make decisions' },
            { label: 'Power Principles', desc: 'Master the hidden laws of influence and success' },
            { label: 'Personal Roadmap', desc: 'Customized path tailored to your goals' },
            { label: 'Community Access', desc: 'Network with like-minded individuals' },
        ],
        originalPrice: '₹31,597',
        price: '₹699',
    },
    {
        popular: false,
        title: 'E-Book',
        subtitle: 'THE ART OF LIFEMAXING',
        description: 'A No-Nonsense Guide to Building Elite Status and Wealth',
        features: [
            { label: 'The Ultimate Guide', desc: 'Looking good, feeling great, and getting rich' },
            { label: 'Hidden Secrets', desc: 'Gain power and influence nobody talks about' },
            { label: 'Free Bonuses', desc: 'Worth ₹15,199 including all future upgrades at zero cost' },
            { label: 'Comprehensive eBook', desc: '45 pages + Master The Art of Sales (Free eBook)' },
            { label: 'Best Sales Tactics', desc: 'Make a ton of money properly' },
        ],
        originalPrice: '₹1,299',
        price: '₹199',
    },
];

export default function Products() {
    return (
        <section className="relative text-foreground py-24 px-4">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="flex flex-col items-center justify-center mb-4">
                    <h3 className="text-3xl font-bold">
                        <GradientText
                            text="Products"
                            className="font-bold"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />
                    </h3>
                </div>
                <p className="text-center text-foreground/70 text-lg mb-12">
                    Check Out Our Exclusive Products
                </p>

                {/* Products Grid */}
                <div className="flex flex-wrap items-stretch justify-center gap-8">
                    {PRODUCTS.map((product, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-2xl border max-w-sm w-full ${
                                product.popular
                                    ? 'border-primary bg-primary/5'
                                    : 'border-foreground/20 bg-card'
                            }`}
                        >
                            {/* Popular Badge */}
                            {product.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                        POPULAR
                                    </span>
                                </div>
                            )}

                            {/* Title & Subtitle */}
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

                            {/* Features */}
                            <div className="flex-1 space-y-4 mb-8">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <FaCheck className="text-primary mt-1 flex-shrink-0 size-4" />
                                        <div>
                                            <span className="font-semibold text-foreground">
                                                {feature.label}
                                            </span>
                                            <span className="text-foreground/60"> - {feature.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing */}
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

                            {/* CTA Button */}
                            <Button
                                size="lg"
                                className={`w-full rounded-full font-semibold ${
                                    product.popular
                                        ? ''
                                        : 'bg-foreground/10 hover:bg-foreground/20 text-foreground'
                                }`}
                                variant={product.popular ? 'default' : 'ghost'}
                            >
                                JOIN NOW
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
