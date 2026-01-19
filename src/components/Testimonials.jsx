import React from 'react';
import GradientText from './ui/custom/gradient-text';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const TESTIMONIALS = [
    {
        company: 'Powersurge',
        name: 'Nikolas Ogbona',
        role: 'Product Designer',
        quote:
            "Untitled has been a lifesaver for our team — everything we need is right at our fingertips, and it keeps us jumping right into new design projects.",
        imageUrl: 'https://example.com/image1.jpg'
    },
    {
        company: 'Goodwell',
        name: 'Amar Foley',
        role: 'UX Designer',
        quote:
            "It’s the secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
        imageUrl: 'https://example.com/image2.jpg'
    },
    {
        company: 'Stacked Lab',
        name: 'Mathilde Lewis',
        role: 'Project Lead',
        quote:
            "Our workflow has improved dramatically since we started using it. It’s easy to use, and the resources are top-notch. I recommend it to everyone.",
        imageUrl: 'https://example.com/image3.jpg'
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
    return (
        <section className="relative text-foreground">

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className='flex items-center justify-center'>
                    <h3 className='text-3xl font-bold mb-4'>
                        Our{" "}
                        <GradientText
                            text="TESTIMONIALS"
                            className="font-bold"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />
                    </h3>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-4 mt-10'>
                    <div className='flex flex-col gap-4 relative top-8'>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className='p-6 border max-w-72 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                                        <AvatarFallback>{initialsFromName(testimonial.name)}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='text-primary'>{testimonial.name}</span>
                                        <span className='text-xs text-foreground/80'>{testimonial.company}</span>
                                    </div>
                                </div>
                                <p className='text-sm text-foreground/70'>{testimonial.quote}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-4'>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className='p-6 border max-w-72 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                                        <AvatarFallback>{initialsFromName(testimonial.name)}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='text-primary'>{testimonial.name}</span>
                                        <span className='text-xs text-foreground/80'>{testimonial.company}</span>
                                    </div>
                                </div>
                                <p className='text-sm text-foreground/70'>{testimonial.quote}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-4 relative top-8'>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className='p-6 border max-w-72 rounded-xl bg-card'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <Avatar
                                        className={"size-10"}
                                    >
                                        <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                                        <AvatarFallback>{initialsFromName(testimonial.name)}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='text-primary'>{testimonial.name}</span>
                                        <span className='text-xs text-foreground/80'>{testimonial.company}</span>
                                    </div>
                                </div>
                                <p className='text-sm text-foreground/70'>{testimonial.quote}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom fade-out gradient */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-42 bg-gradient-to-t from-background to-transparent" />
            </div>
        </section>
    );
}
