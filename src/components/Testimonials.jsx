import React, { useState, useEffect } from 'react';
import GradientText from './ui/custom/gradient-text';
import DecorativeLine from './ui/custom/decorative-line';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const TESTIMONIALS = [
    {
        "name": "Justin",
        "role": "Editor",
        "image": "/pfp5.png",
        "earning": "₹1,99,502.04",
        "testimonial": "Infinite wins. This is the earnings of our student Mayank (professional video editor). Our server will always be the most original and profitable. Unfiltered lessons on wealth and financial independence. If you're between 13–23 years old, have a smartphone, access to the internet, and are not earning at least ₹70,000 every month, you're just wasting time. Hurry up. Reserve your seat before the offer ends."
    },
    {
        "name": "Salene Olivera",
        "role": "Designer",
        "image": "/pfp4.png",
        "earning": null,
        "testimonial": "It is a community where I connected with like-minded individuals, developed a strong mindset, enhanced my communication skills, and began progressing in real life under the guidance of professors."
    },
    {
        "name": "Samir",
        "role": "Designer",
        "image": "/pfp3.png",
        "earning": "₹12,000",
        "testimonial": "Avg day as a thumbnail designer. Thanks team TKL for the best editing masterclass ever 🔥"
    },
    {
        "name": "Suhani",
        "role": "Copywriter",
        "image": "/pfp2.png",
        "earning": "₹8,000",
        "testimonial": "300 to 5,000. Crazy. Same client. Trust ❤️ Thank you for the support, Team Karmalabs."
    },
    {
        "name": "William",
        "role": "Developer",
        "image": "/pfp1.png",
        "earning": null,
        "testimonial": "This community provides a structured environment where individuals collaborate with peers who share similar goals. Through professional guidance from professors, members develop a disciplined mindset, strengthen communication skills, and cultivate leadership, critical thinking, and personal accountability. The focus is on holistic growth, practical skill development, and consistent real-life progress."
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
    const [animationPhase, setAnimationPhase] = useState('visible'); // 'visible', 'exiting', 'entering'
    const [slideDirection, setSlideDirection] = useState('left');

    const changeTestimonial = (newIndex, direction = 'left') => {
        setSlideDirection(direction);
        setAnimationPhase('exiting');
        
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setAnimationPhase('entering');
            
            setTimeout(() => {
                setAnimationPhase('visible');
            }, 50);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeTestimonial((currentIndex + 1) % TESTIMONIALS.length, 'left');
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const testimonial = TESTIMONIALS[currentIndex];

    const getSlideClasses = () => {
        if (animationPhase === 'exiting') {
            return slideDirection === 'left' 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-full opacity-0';
        }
        if (animationPhase === 'entering') {
            return slideDirection === 'left'
                ? 'translate-x-full opacity-0 transition-none'
                : '-translate-x-full opacity-0 transition-none';
        }
        return 'translate-x-0 opacity-100';
    };

    return (
        <section className="relative text-foreground py-24 px-4 overflow-hidden">
            <div className="mx-auto max-w-4xl">
                {/* Heading */}
                <div className="flex flex-col items-center justify-center mb-16">
                    <h3 className="text-2xl md:text-4xl font-bold">
                        the{" "}
                        <GradientText
                            text="RESULTS"
                            className="font-bold"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />
                    </h3>
                    <DecorativeLine className="mt-4" />
                </div>

                {/* Testimonial */}
                <div
                    className={`flex flex-col items-center text-center space-y-8 transition-all duration-300 ease-in-out ${getSlideClasses()}`}
                >
                    {/* Avatar and Name */}
                    <div className="flex flex-col items-center space-y-4">
                        <Avatar className="size-20 border-2 border-primary/30">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback className="text-xl">
                                {initialsFromName(testimonial.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-medium text-primary">
                                {testimonial.name}
                            </span>
                            {testimonial.earning && (
                                <span className="text-sm text-green-400 font-semibold mt-1">
                                    💰 {testimonial.earning}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="max-w-xl px-4">
                        <p
                            className="text-lg text-foreground/80 leading-relaxed"
                            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: 'italic' }}
                        >
                            "{testimonial.testimonial.length > 200 
                                ? `${testimonial.testimonial.slice(0, 200).trim()}...` 
                                : testimonial.testimonial}"
                        </p>
                    </blockquote>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-12">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (index !== currentIndex) {
                                    changeTestimonial(index, index > currentIndex ? 'left' : 'right');
                                }
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
