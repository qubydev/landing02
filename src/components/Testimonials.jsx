import React, { useState, useEffect } from 'react';
import GradientText from './ui/custom/gradient-text';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const TESTIMONIALS = [
    {
        name: 'Sarah Mitchell',
        imageUrl: 'https://example.com/sarah.jpg',
        quote: "This program completely transformed my approach to design. I went from struggling freelancer to landing my dream job in just 3 months.",
        earnings: '$8,500/month'
    },
    {
        name: 'James Rodriguez',
        imageUrl: 'https://example.com/james.jpg',
        quote: "I never thought I could achieve this level of success. The strategies taught here are pure gold.",
        earnings: '$12,000/month'
    },
    {
        name: 'Emily Chen',
        imageUrl: 'https://example.com/emily.jpg',
        quote: "From zero clients to a fully booked calendar. This changed everything for me and my family.",
    },
    {
        name: 'Michael Foster',
        imageUrl: 'https://example.com/michael.jpg',
        quote: "The best investment I ever made in myself. Results speak louder than words.",
        earnings: '$15,000/month'
    }
];

function initialsFromName(name) {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join('');
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
                setIsTransitioning(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const testimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="relative text-foreground py-24 px-4">
            <div className="mx-auto max-w-4xl">
                {/* Heading */}
                <div className="flex items-center justify-center mb-16">
                    <h3 className="text-3xl font-bold">
                        Our{" "}
                        <GradientText
                            text="RESULTS"
                            className="font-bold"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />
                    </h3>
                </div>

                {/* Testimonial */}
                <div
                    className={`flex flex-col items-center text-center space-y-8 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    {/* Avatar and Name */}
                    <div className="flex flex-col items-center space-y-4">
                        <Avatar className="size-20 border-2 border-primary/30">
                            <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                            <AvatarFallback className="text-xl">
                                {initialsFromName(testimonial.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-medium text-primary">
                                {testimonial.name}
                            </span>
                            {testimonial.earnings && (
                                <span className="text-sm text-green-400 font-semibold mt-1">
                                    💰 {testimonial.earnings}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="max-w-2xl">
                        <p
                            className="text-2xl md:text-3xl text-foreground/80 leading-relaxed"
                            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: 'italic' }}
                        >
                            "{testimonial.quote}"
                        </p>
                    </blockquote>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-12">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsTransitioning(true);
                                setTimeout(() => {
                                    setCurrentIndex(index);
                                    setIsTransitioning(false);
                                }, 300);
                            }}
                            className={`size-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary w-6'
                                    : 'bg-foreground/30 hover:bg-foreground/50'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
