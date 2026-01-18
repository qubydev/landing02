import React from 'react';
import './shooting-stars.css';

export default function ShootingStars({ count = 20 }) {
    return (
        <div className="shooting-stars-container">
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    className="shooting-star"
                    style={{
                        top: `${Math.random() * 50}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${1 + Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    );
}
