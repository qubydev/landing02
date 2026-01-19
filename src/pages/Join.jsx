import React, { useState } from 'react';
import { Button } from '../components/ui/button';

export default function Join() {
    const [showQrPopup, setShowQrPopup] = useState(false);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top-left gradient orb */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
                {/* Bottom-right gradient orb */}
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-[100px]" />
                {/* Center subtle glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            </div>

            {/* Main Card */}
            <div className="w-full max-w-xs bg-card border border-border rounded-2xl p-6 relative z-10">
                {/* Heading */}
                <h1 className="text-xl font-bold text-center text-primary mb-6">
                    Scan & Pay
                </h1>

                {/* QR Code */}
                <div className="flex flex-col items-center mb-4">
                    <div
                        className="bg-white p-3 rounded-xl cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setShowQrPopup(true)}
                    >
                        <img
                            src="/qr.png"
                            alt="Payment QR Code"
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                    <p className="text-primary text-xs mt-3">
                        Click or tap to enlarge for scanning
                    </p>
                </div>

                {/* Pricing Section */}
                <div className="bg-muted/50 border border-border rounded-xl p-4 mb-4">
                    <div className="text-center">
                        <span className="text-muted-foreground line-through text-sm">
                            ₹4,999
                        </span>
                        <div className="flex items-baseline justify-center gap-2 mt-1">
                            <span className="text-4xl font-bold text-foreground">₹999</span>
                            <span className="text-muted-foreground text-sm">INR</span>
                        </div>
                        <div className="inline-block bg-primary text-primary-foreground font-semibold px-3 py-0.5 rounded-full text-xs mt-2">
                            ₹4,000 OFF
                        </div>
                        <p className="text-muted-foreground text-xs mt-2">
                            Save 50% — Limited time offer
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <Button
                    size="default"
                    className="w-full rounded-full font-semibold"
                >
                    Continue to Payment
                </Button>

                <p className="text-center text-muted-foreground text-xs mt-3">
                    If you have already paid, click continue
                </p>
            </div>

            {/* QR Popup */}
            {showQrPopup && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setShowQrPopup(false)}
                >
                    <div
                        className="bg-card border border-border p-6 rounded-2xl max-w-xs w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-white p-4 rounded-xl">
                            <img
                                src="/qr.png"
                                alt="Payment QR Code"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <p className="text-center text-muted-foreground mt-4 text-sm">
                            Scan this QR code to pay
                        </p>
                        <Button
                            variant="outline"
                            className="w-full mt-4"
                            onClick={() => setShowQrPopup(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
