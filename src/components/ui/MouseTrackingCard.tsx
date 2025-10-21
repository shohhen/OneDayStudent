import React, { useRef, useEffect } from 'react';

interface MouseTrackingCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
}

export const MouseTrackingCard: React.FC<MouseTrackingCardProps> = ({
                                                                        children,
                                                                        className = '',
                                                                        onClick,
                                                                        disabled = false
                                                                    }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (disabled) return;

            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            // Set the CSS custom properties
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        };

        // Add mouse event listener
        card.addEventListener('mousemove', handleMouseMove);

        // Clean up
        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, [disabled]);

    // Create ripple effect on click
    const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;

        const button = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - diameter / 2}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - diameter / 2}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    return (
        <div
            ref={cardRef}
            className={`glass-card ${className}`}
            onClick={(e) => {
                if (disabled || !onClick) return;
                createRipple(e);
                onClick(e);
            }}
        >
            {children}
            <div className="card-light"></div>
        </div>
    );
};