import React from "react";

// Sparkles background: small golden twinkles distributed randomly
// Props:
// - className: optional extra classes to apply to the wrapper
// - count: how many sparkles to render
const SparklesBg = ({ className = "", count = 30 }) => {
    // Generate randomized sparkle elements
    const sparkles = Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 3;
        return (
            <span
                key={i}
                className="absolute rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-700 opacity-80 animate-twinkle"
                style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${delay}s`,
                }}
            />
        );
    });
    return (
        <div className={`pointer-events-none absolute inset-0 z-0 ${className}`}>
            {sparkles}
        </div>
    );
};

export default SparklesBg;
