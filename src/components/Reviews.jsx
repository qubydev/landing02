import React from 'react';
import GradientText from './ui/custom/gradient-text';
import DecorativeLine from './ui/custom/decorative-line';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Marquee } from './ui/marquee';

const REVIEWS = [
    // Column 1
    [
        {
            name: 'Anaya Das',
            role: 'Business Owner',
            quote:
                "Joining this community was one of my smartest decisions. The focus on skills, power, and long-term wealth makes it very different from other platforms. It's practical, structured, and genuinely valuable.",
            rating: 5
        },
        {
            name: 'Pranay',
            role: 'Member',
            quote:
                "This community changed the way I think about money. Clear, practical, and powerful.",
            rating: 5
        },
        {
            name: 'Rahul',
            role: 'Member',
            quote:
                "I finally understand how successful people think and make decisions.",
            rating: 5
        },
        {
            name: 'Aman',
            role: 'Professional Coach',
            quote:
                "The way concepts are explained here is very different. You don't just learn what to do, you learn how successful people actually think. It has helped me improve both my financial planning and business mindset.",
            rating: 5
        },
        {
            name: 'Deepika',
            role: 'Member',
            quote:
                "No hype, no shortcuts. Just real skills that actually make sense.",
            rating: 5
        },
        {
            name: 'Rohit',
            role: 'Designer',
            quote:
                "This community completely changed my perspective on money and decision-making. The sessions are structured, practical, and far beyond basic finance content. I now think more clearly about skills, income, and long-term growth.",
            rating: 5
        },
    ],
];

function initialsFromName(name) {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join('');
}

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`size-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 fill-gray-600'}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}



export default function Reviews() {
    return (
        <section className="relative text-foreground p-4 py-16">

            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-2xl md:text-4xl font-bold mb-4'>
                    our{" "}
                    <GradientText
                        text="REVIEWS"
                        className="font-bold"
                        gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                    />
                </h3>
                <DecorativeLine />
            </div>

            <div className='relative'>
                <div className='flex items-center justify-center h-140 overflow-hidden mt-20'>

                    <Marquee vertical pauseOnHover className={"p-2 hidden min-[1064px]:flex [--duration:15s]"}>
                        {REVIEWS[0].map((review, index) => (
                            <div key={index} className='p-6 border w-[90vw] max-w-80 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={review.imageUrl} alt={review.name} />
                                        <AvatarFallback>{initialsFromName(review.name)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='text-foreground font-medium'>{review.name}</p>
                                        <p className='text-foreground/70 text-sm'>{review.role}</p>
                                    </div>
                                </div>
                                <StarRating rating={review.rating} />
                                <p className='text-sm text-foreground/70 mt-3'>{review.quote}</p>
                            </div>
                        ))}
                    </Marquee>

                    <Marquee vertical pauseOnHover reverse className={"p-2 [--duration:15s]"}>
                        {REVIEWS[0].map((review, index) => (
                            <div key={index} className='p-6 border w-[90vw] max-w-80 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={review.imageUrl} alt={review.name} />
                                        <AvatarFallback>{initialsFromName(review.name)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='text-foreground font-medium'>{review.name}</p>
                                        <p className='text-foreground/70 text-sm'>{review.role}</p>
                                    </div>
                                </div>
                                <StarRating rating={review.rating} />
                                <p className='text-sm text-foreground/70 mt-3'>{review.quote}</p>
                            </div>
                        ))}
                    </Marquee>

                    <Marquee vertical pauseOnHover className={"p-2 hidden min-[760px]:flex [--duration:15s]"}>
                        {REVIEWS[0].map((review, index) => (
                            <div key={index} className='p-6 border w-[90vw] max-w-80 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={review.imageUrl} alt={review.name} />
                                        <AvatarFallback>{initialsFromName(review.name)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='text-foreground font-medium'>{review.name}</p>
                                        <p className='text-foreground/70 text-sm'>{review.role}</p>
                                    </div>
                                </div>
                                <StarRating rating={review.rating} />
                                <p className='text-sm text-foreground/70 mt-3'>{review.quote}</p>
                            </div>
                        ))}
                    </Marquee>

                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-[#040005] to-transparent z-10" />
                <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-b from-[#040005] to-transparent z-10" />
            </div>

        </section>
    );
}
