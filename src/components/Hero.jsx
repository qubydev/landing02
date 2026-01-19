import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Marquee } from "@/components/ui/marquee"
import { Button } from './ui/button'
import GradientText from './ui/custom/gradient-text'
import ShootingStars from './ui/shooting-stars'
import { FancyButton } from './ui/custom/fancy-button'

export default function Hero() {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat relative before:absolute before:inset-0 before:bg-[url(/hero-bg.svg)] before:bg-cover before:bg-center before:bg-no-repeat before:filter before:brightness-60 before:z-5"
        >
            <ShootingStars count={30} />
            <div className='p-4 pt-28 pb-16 relative z-10'>
                <div className='flex items-center justify-center pt-8 md:pt-16 pb-4'>
                    <AnimatedShinyText className={"border border-primary/20 rounded-full p-1.5 py-1 flex items-center gap-2 text-sm shadow-[inset_0px_0px_100px_0px_rgba(112,174,255,0.05)]"}>
                        <img
                            src="/logo.png"
                            alt="Tharun Speaks Logo"
                            className="size-6 rounded-full"
                        />
                        <span className='mr-2'>The Wealth Speaks Presents</span>
                    </AnimatedShinyText>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='text-center md:text-left'>
                        <p className='text-xl md:text-3xl font-playfair italic text-foreground/80 font-bold tracking-tight'>not just a</p>
                        <GradientText
                            text="Money Making Course"
                            className="text-5xl md:text-7xl font-black mb-4"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />
                    </div>
                    <div className='overflow-hidden'>
                        <Marquee
                            className={"w-[calc(100vw-2rem)] max-w-6xl overflow-hidden [--duration:20s] mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"}
                        >
                            <video
                                src="/clip1.mp4"
                                autoPlay
                                loop
                                muted
                                className="h-28 md:h-40 shadow-lg border border-white/10"
                            />
                            <video
                                src="/clip2.mp4"
                                autoPlay
                                loop
                                muted
                                className="h-28 md:h-40 shadow-lg border border-white/10"
                            />
                            <video
                                src="/clip3.mp4"
                                autoPlay
                                loop
                                muted
                                className="h-28 md:h-40 shadow-lg border border-white/10"
                            />
                            <video
                                src="/clip4.mp4"
                                autoPlay
                                loop
                                muted
                                className="h-28 md:h-40 shadow-lg border border-white/10"
                            />
                        </Marquee>
                    </div>
                    <div className='py-6 flex flex-col items-center justify-center gap-6'>
                        <p className='flex items-center justify-center flex-col text-foreground/80 text-center text-sm md:text-base'>
                            <span>This is where knowledge meets execution.</span>
                            <span>From learning to Earning!</span>
                        </p>
                        <Link to="/join">
                            <FancyButton className={"rounded-full text-lg px-12 md:px-20 py-3"}>Join Now</FancyButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
