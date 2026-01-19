import React from 'react';
import GradientText from './ui/custom/gradient-text';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const REVIEWS = [
    {
        company: 'Powersurge',
        name: 'Nikolas Ogbona',
        role: 'Product Designer',
        quote:
            "Untitled has been a lifesaver for our team — everything we need is right at our fingertips, and it keeps us jumping right into new design projects.",
        imageUrl: 'https://example.com/image1.jpg',
        rating: 5
    },
    {
        company: 'Goodwell',
        name: 'Amar Foley',
        role: 'UX Designer',
        quote:
            "It’s the secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
        imageUrl: 'https://example.com/image2.jpg',
        rating: 5
    },
    {
        company: 'Stacked Lab',
        name: 'Mathilde Lewis',
        role: 'Project Lead',
        quote:
            "Our workflow has improved dramatically since we started using it. It’s easy to use, and the resources are top-notch. I recommend it to everyone.",
        imageUrl: 'https://example.com/image3.jpg',
        rating: 5
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

            <div className="mx-auto max-w-6xl">
                <div className='flex items-center justify-center'>
                    <h3 className='text-3xl font-bold mb-4'>
                        Our{" "}
                        <GradientText
                            text="REVIEWS"
                            className="font-bold"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />
                    </h3>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-4 mt-10'>
                    <div className='flex flex-col gap-4 relative top-8'>
                        {REVIEWS.map((review, index) => (
                            <div key={index} className='p-6 border max-w-72 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={review.imageUrl} alt={review.name} />
                                        <AvatarFallback>{initialsFromName(review.name)}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='text-primary'>{review.name}</span>
                                        <span className='text-xs text-foreground/80'>{review.company}</span>
                                    </div>
                                </div>
                                <StarRating rating={review.rating} />
                                <p className='text-sm text-foreground/70 mt-3'>{review.quote}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-4'>
                        {REVIEWS.map((review, index) => (
                            <div key={index} className='p-6 border max-w-72 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={review.imageUrl} alt={review.name} />
                                        <AvatarFallback>{initialsFromName(review.name)}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='text-primary'>{review.name}</span>
                                        <span className='text-xs text-foreground/80'>{review.company}</span>
                                    </div>
                                </div>
                                <StarRating rating={review.rating} />
                                <p className='text-sm text-foreground/70 mt-3'>{review.quote}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-4 relative top-8'>
                        {REVIEWS.map((review, index) => (
                            <div key={index} className='p-6 border max-w-72 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={review.imageUrl} alt={review.name} />
                                        <AvatarFallback>{initialsFromName(review.name)}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='text-primary'>{review.name}</span>
                                        <span className='text-xs text-foreground/80'>{review.company}</span>
                                    </div>
                                </div>
                                <StarRating rating={review.rating} />
                                <p className='text-sm text-foreground/70 mt-3'>{review.quote}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom fade-out gradient */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-42 bg-gradient-to-t from-[#040005] to-transparent" />
            </div>
        </section>
    );
}
