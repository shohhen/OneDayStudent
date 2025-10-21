import React from 'react';

interface ProgressProps {
    value: number;
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className = '' }) => {
    // Ensure the value is between 0 and 100
    const clampedValue = Math.max(0, Math.min(100, value || 0));

    return (
        <div className={`relative h-2 w-full overflow-hidden rounded-full bg-secondary/20 ${className}`}>
            {/* Progress fill */}
            <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
                style={{ transform: `translateX(-${100 - clampedValue}%)` }}
            ></div>
        </div>
    );
};