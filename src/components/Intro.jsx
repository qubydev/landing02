import React from 'react'
import GradientText from './ui/custom/gradient-text'
import { Marquee } from './ui/marquee'
import { FaDiscord, FaGithub, FaLinkedin, FaReddit, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const SOCIALS = [
    { name: 'Discord', url: 'https://discord.com', icon: <FaDiscord size={38} className="text-[#5865F2]" /> },
    { name: 'X', url: 'https://x.com', icon: <FaXTwitter size={38} className="text-[#ffffff]" /> },
    { name: 'Telegram', url: 'https://telegram.org', icon: <FaTelegram size={38} className="text-[#0088cc]" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin size={38} className="text-[#0A66C2]" /> },
    { name: 'WhatsApp', url: 'https://whatsapp.com', icon: <FaWhatsapp size={38} className="text-[#25D366]" /> },
    { name: 'Reddit', url: 'https://reddit.com', icon: <FaReddit size={38} className="text-[#FF4500]" /> },
];

export default function Intro() {
    return (
        <div className='p-4 py-16 flex items-center justify-center flex-col gap-4'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-foreground/80'>Teaching my</h3>
                <h2 className='text-2xl md:text-4xl text-center mb-2 flex items-center justify-center flex-wrap px-4 font-bold'>
                    <span>
                        <GradientText
                            text="7 YEARS"
                            className="font-bold"
                            gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                        />{" of experience"}
                    </span>
                    <span>in 3 months!</span>
                </h2>
                <div className='text-center text-sm text-foreground/80'>
                    <p>Wealth has a huge language, it's time you learn to speak it.</p>
                    <p>The 1% don't chase money, they command it!</p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                    <Avatar className={"size-10"}>
                        <AvatarImage
                            src="/pfp1.png"
                            alt="Pfp 1" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className={"size-10"}>
                        <AvatarImage
                            src="/pfp3.png"
                            alt="Pfp 3"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar className={"size-10"}>
                        <AvatarImage
                            src="/pfp2.png"
                            alt="Pfp 2"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                </div>
                <p className='text-center font-bold text-lg mt-2'>
                    <span className='text-primary'>150+</span>{" "}
                    <span className='text-foreground/70'>Trusted members</span>
                </p>
            </div>

            <div>
                <div className="relative w-[90vw] max-w-xl rounded-lg overflow-hidden">
                    <Marquee className="overflow-hidden [--duration:10s]">
                        {SOCIALS.map((social) => (
                            <div key={social.name} className="border px-10 py-6 rounded-[1.25rem] bg-[linear-gradient(135deg,#2C3441_0%,#1B2232_100%)] shadow-md">
                                {social.icon}
                            </div>
                        ))}
                    </Marquee>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#040005] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#040005] to-transparent" />
                </div>
            </div>
        </div>
    )
}
