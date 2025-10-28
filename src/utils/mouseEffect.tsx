import React, { useState, useEffect, useRef } from 'react';

// Mouse follower component - Optimized for performance
export const MouseFollower: React.FC = () => {
    const followerRef = useRef<HTMLDivElement>(null);
    const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);
    const nextId = useRef(0);
    const followerSize = 128; // Half of the actual size (256px)

    useEffect(() => {
        const follower = followerRef.current;
        if (!follower) return;

        let animationFrameId: number;
        let lastX = 0, lastY = 0;

        const updateMousePosition = (ev: MouseEvent) => {
            lastX = ev.clientX;
            lastY = ev.clientY;

            // Cancel any pending animation frame to avoid multiple updates
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            // Schedule the DOM update within an animation frame for smoothness
            animationFrameId = requestAnimationFrame(() => {
                follower.style.transform = `translate3d(${lastX - followerSize}px, ${lastY - followerSize}px, 0)`;
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []); // Empty dependency array ensures this runs only once

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const clickId = nextId.current++;
            const newClick = { id: clickId, x: e.clientX, y: e.clientY };
            setClicks(prev => [...prev, newClick]);

            setTimeout(() => {
                setClicks(prev => prev.filter(click => click.id !== clickId));
            }, 700);
        };

        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <>
            {/* Main cursor light effect - now using transform for performance */}
            <div
                ref={followerRef}
                className="pointer-events-none fixed z-10 rounded-full opacity-20 mix-blend-overlay"
                style={{
                    width: `${followerSize * 2}px`,
                    height: `${followerSize * 2}px`,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                    top: 0,
                    left: 0,
                    willChange: 'transform', // Hint to the browser for optimization
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
                        left: `${click.x - 32}px`,
                        top: `${click.y - 32}px`,
                    }}
                />
            ))}
        </>
    );
};