import React from 'react';

export default function DecorativeLine({ className = '' }) {
    return (
        <div className={`relative flex items-center justify-center w-full max-w-xs ${className}`}>
            {/* Faded gradient line */}
            <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            {/* Glowing center highlight */}
            <div className="absolute h-[2px] w-16 bg-gradient-to-r from-primary via-white to-primary rounded-full blur-[1px]" />
            
            {/* Diamond shapes */}
            <div className="relative flex items-center gap-3">
                {/* Left diamond - small */}
                <span className="w-2 h-2 bg-primary/60 rotate-45 animate-pulse" />
                
                {/* Center diamond - larger with glow */}
                <span className="w-3 h-3 bg-primary rotate-45 shadow-lg shadow-primary/50" />
                
                {/* Right diamond - small */}
                <span className="w-2 h-2 bg-primary/60 rotate-45 animate-pulse" />
            </div>
        </div>
    );
}
