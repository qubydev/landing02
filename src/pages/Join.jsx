import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Join() {
    const [showQrPopup, setShowQrPopup] = useState(false);

    return (
        <div className="min-h-screen bg-background flex flex-col p-4 relative overflow-hidden">
            <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 left-4 flex items-center gap-2"
                onClick={() => window.history.back()}
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </Button>

            <div className="flex-grow flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[140px]" />
                </div>

                <div className="w-full max-w-sm bg-card border border-border rounded-3xl p-6 relative z-10">
                    <h1 className="text-2xl font-bold text-center text-primary mb-4">
                        Scan & Pay
                    </h1>

                    <div className="flex flex-col items-center mb-4">
                        <div
                            className="bg-white p-3 cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setShowQrPopup(true)}
                        >
                            <img
                                src="/qr.png"
                                alt="Payment QR Code"
                                className="w-36 h-36 object-contain"
                            />
                        </div>
                        <p className="text-primary text-sm mt-2">
                            Click or tap to enlarge for scanning
                        </p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-2xl p-4 mb-4">
                        <div className="text-center">
                            <span className="text-muted-foreground line-through text-sm">
                                ₹31,579
                            </span>
                            <div className="flex items-baseline justify-center gap-2 mt-1">
                                <span className="text-4xl font-bold text-foreground">₹799</span>
                                <span className="text-muted-foreground text-sm">INR</span>
                            </div>
                            <div className="inline-block bg-primary text-primary-foreground font-semibold px-3 py-0.5 rounded-full text-sm mt-2">
                                ₹30,780 OFF
                            </div>
                            <p className="text-muted-foreground text-sm mt-2">
                                Save 97.5% — Limited time offer
                            </p>
                        </div>
                    </div>

                    <Button
                        size="lg"
                        className="w-full rounded-full font-semibold py-5"
                    >
                        Continue to Payment
                    </Button>

                    <p className="text-center text-muted-foreground text-sm mt-2">
                        If you have already paid, click continue
                    </p>
                </div>
            </div>

            {showQrPopup && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setShowQrPopup(false)}
                >
                    <div
                        className="bg-card border border-border p-6 rounded-3xl max-w-sm w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-white p-4">
                            <img
                                src="/qr.png"
                                alt="Payment QR Code"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <p className="text-center text-muted-foreground mt-3 text-sm">
                            Scan this QR code to pay
                        </p>
                        <Button
                            variant="outline"
                            className="w-full mt-3"
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
