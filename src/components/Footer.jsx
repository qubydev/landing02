import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    const navLinks = [
        { href: "#about", label: "About Us" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#reviews", label: "Reviews" },
        { href: "#contact", label: "Contact" },
    ]

    const socialLinks = [
        { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
        { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
        { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
        { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
    ]

    return (
        <footer className="border-t mt-40">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                    {/* Logo & Company Name */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="The Wealth Speaks Logo"
                                className="size-10 rounded-full"
                            />
                            <span className="font-bold text-xl text-foreground">The Wealth Speaks</span>
                        </Link>
                        <p className="text-foreground/60 text-sm max-w-xs text-center md:text-left">
                            Empowering you with the knowledge to build lasting wealth.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h4 className="font-semibold text-foreground">Quick Links</h4>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground/60 hover:text-foreground transition text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h4 className="font-semibold text-foreground">Follow Us</h4>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/60 hover:text-primary transition"
                                    aria-label={social.label}
                                >
                                    <social.icon className="size-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-foreground/50 text-sm">
                        © {new Date().getFullYear()} The Wealth Speaks. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-foreground/50">
                        <Link to="#privacy" className="hover:text-foreground transition">
                            Privacy Policy
                        </Link>
                        <Link to="#terms" className="hover:text-foreground transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
