import React, { useState, useEffect, useRef } from 'react';

// Custom hook to track mouse position globally
export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

// Mouse follower component
export const MouseFollower: React.FC = () => {
    const mousePosition = useMousePosition();
    const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);
    const nextId = useRef(0);
    const followerSize = 128; // Half of the actual size (256px)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // Create a new click with unique ID
            const clickId = nextId.current++;
            const newClick = {
                id: clickId,
                x: e.clientX,
                y: e.clientY
            };

            setClicks(prev => [...prev, newClick]);

            // Remove this click after animation completes
            setTimeout(() => {
                setClicks(prev => prev.filter(click => click.id !== clickId));
            }, 700);
        };

        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <>
            {/* Main cursor light effect - properly centered on cursor */}
            <div
                className="pointer-events-none fixed z-10 rounded-full opacity-20 mix-blend-overlay"
                style={{
                    width: followerSize * 2 + 'px',
                    height: followerSize * 2 + 'px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                    position: 'fixed',
                    left: mousePosition.x - followerSize + 'px',
                    top: mousePosition.y - followerSize + 'px',
                    transition: 'left 0.05s ease-out, top 0.05s ease-out', // Faster tracking
                }}
            />

            {/* Click ripple effects - one for each recent click */}
            {clicks.map(click => (
                <div
                    key={click.id}
                    className="pointer-events-none fixed z-10 rounded-full animate-ripple"
                    style={{
                        width: '64px',
                        height: '64px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)',
                        position: 'fixed',
                        left: click.x - 32 + 'px',
                        top: click.y - 32 + 'px',
                    }}
                />
            ))}
        </>
    );
};