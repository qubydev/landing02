import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const navLinks = [
        { to: "#about", label: "About Us" },
        { to: "#testimonials", label: "Testimonials" },
        { to: "#reviews", label: "Reviews" },
        { to: "#products", label: "Products" },
        { to: "#ebook", label: "E-Book" },
    ]

    const handleNavClick = (e, to) => {
        e.preventDefault()
        const element = document.querySelector(to)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setOpen(false)
    }

    return (
        <div className='p-4 flex items-center justify-center fixed top-0 left-0 w-screen z-[100]'>
            <div className='flex-1 max-w-5xl'>
                <nav className='flex items-center justify-between rounded-2xl bg-background/5 backdrop-blur-md border py-2 pl-6 pr-3'>
                    <Link to="/">
                        <h1 className='font-bold text-lg'>The Wealth Speaks Club</h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex flex-1 items-center justify-center text-foreground/60 font-semibold space-x-6'>
                        {navLinks.map((link) => (
                            <a
                                key={link.to}
                                href={link.to}
                                onClick={(e) => handleNavClick(e, link.to)}
                                className='hover:text-foreground transition cursor-pointer'
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <Link to="/join">
                        <Button size='lg' className={"rounded-full hidden md:flex"}>
                            Join Now
                        </Button>
                    </Link>

                    <button
                        className="md:hidden p-2 rounded-md hover:bg-background/10 transition"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <IoClose className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
                    </button>
                </nav>

                {/* Mobile Dropdown */}
                {open && (
                    <div className='md:hidden mt-2 rounded-2xl bg-background/5 backdrop-blur-md border p-6 animate-in slide-in-from-top-2 duration-300'>
                        <div className='flex flex-col space-y-4'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.to}
                                    href={link.to}
                                    onClick={(e) => handleNavClick(e, link.to)}
                                    className='text-foreground/80 hover:text-foreground transition font-semibold text-lg py-2 cursor-pointer'
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Link to="/join" className="w-full">
                                <Button size='lg' className={"rounded-full mt-2 w-full"} onClick={() => setOpen(false)}>
                                    Join Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
