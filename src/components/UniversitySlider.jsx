import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Redesigned mobile slider:
// - Scroll-snap with swipe
// - Center active card
// - 10% peek on both sides (using 10vw padding)
// - Autoscroll every 5s with progress bar
// Desktop remains a grid.

function DesktopGrid({ universities, onCardClick, Card, t }) {
    return (
        <div className="universities-grid">
            {universities.map((u) => (
                <Card key={u.id} university={u} onClick={() => onCardClick(u)} t={t} />
            ))}
        </div>
    );
}

function MobileSlider({ universities, onCardClick, MobileCard, t }) {
    const viewportRef = useRef(null);
    const itemRefs = useRef([]);
    const [index, setIndex] = useState(0);
    const autoplayRef = useRef(null);
    const progressRef = useRef(null);

    // Scroll to a particular index
    const scrollToIndex = (i) => {
        const vp = viewportRef.current;
        const el = itemRefs.current[i];
        if (!vp || !el) return;
        const left = el.offsetLeft - (vp.clientWidth - el.clientWidth) / 2;
        vp.scrollTo({ left, behavior: 'smooth' });
    };

    // Observe which item is centered
    useEffect(() => {
        const vp = viewportRef.current;
        if (!vp) return;

        const handler = () => {
            let nearest = 0;
            let minDist = Infinity;
            const center = vp.scrollLeft + vp.clientWidth / 2;
            itemRefs.current.forEach((el, i) => {
                if (!el) return;
                const elCenter = el.offsetLeft + el.clientWidth / 2;
                const dist = Math.abs(center - elCenter);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = i;
                }
            });
            setIndex(nearest);
        };

        handler();
        vp.addEventListener('scroll', handler, { passive: true });
        window.addEventListener('resize', handler);
        return () => {
            vp.removeEventListener('scroll', handler);
            window.removeEventListener('resize', handler);
        };
    }, []);

    // Autoplay with progress
    useEffect(() => {
        const startAutoplay = () => {
            stopAutoplay();
            const dur = 5000;
            let start = performance.now();

            const tick = (now) => {
                const vp = viewportRef.current;
                if (!vp) return;
                const elapsed = now - start;
                const p = Math.min(1, elapsed / dur);
                if (progressRef.current) {
                    progressRef.current.style.transform = `scaleX(${p})`;
                }
                if (p >= 1) {
                    const next = (index + 1) % universities.length;
                    scrollToIndex(next);
                    start = performance.now();
                }
                autoplayRef.current = requestAnimationFrame(tick);
            };

            autoplayRef.current = requestAnimationFrame(tick);
        };

        const stopAutoplay = () => {
            if (autoplayRef.current) cancelAnimationFrame(autoplayRef.current);
            autoplayRef.current = null;
            if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(0)`;
            }
        };

        startAutoplay();
        const vp = viewportRef.current;
        const pause = () => stopAutoplay();
        const resume = () => startAutoplay();
        vp?.addEventListener('pointerdown', pause);
        vp?.addEventListener('pointerup', resume);
        vp?.addEventListener('mouseenter', pause);
        vp?.addEventListener('mouseleave', resume);
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stopAutoplay();
            else startAutoplay();
        });

        return () => {
            stopAutoplay();
            vp?.removeEventListener('pointerdown', pause);
            vp?.removeEventListener('pointerup', resume);
            vp?.removeEventListener('mouseenter', pause);
            vp?.removeEventListener('mouseleave', resume);
        };
    }, [index, universities.length]);

    return (
        <div className="mobile-slider">
            <div className="slider-viewport" ref={viewportRef}>
                <div className="universities-slider">
                    {universities.map((u, i) => (
                        <div
                            key={u.id}
                            className={`slider-item ${i === index ? 'active' : ''}`}
                            ref={(el) => (itemRefs.current[i] = el) || null}
                            onClick={() => onCardClick(u)}
                        >
                            <MobileCard university={u} t={t} />
                        </div>
                    ))}
                </div>
                {/*<div className="slider-progress">*/}
                {/*    <span ref={progressRef} />*/}
                {/*</div>*/}
            </div>
            <div className="slider-dots">
                {universities.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === index ? 'active' : ''}`}
                        onClick={() => scrollToIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function UniversityCard({ university, onClick, t }) {
    return (
        <motion.div
            className="university-card"
            onClick={onClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
            <div className="card-image">
                <img src={university?.mainImage} alt={t.universities[university.id].name} />
            </div>
            <div className="card-content">
                <h3>{university.acronym}</h3>
                <p>{t.universities[university.id].name}</p>
                <button className="card-button">{t.common.learnMore}</button>
            </div>
        </motion.div>
    );
}

function MobileUniversityCard({ university, t }) {
    return (
        <div className="mobile-university-card">
            <img src={university.mainImage} alt={t.universities[university.id].name} />
            <div className="overlay">
                <div className="pill">{university.acronym}</div>
                <h3>{t.universities[university.id].name}</h3>
                <div className="ghost-btn">{t.common.learnMore}</div>
            </div>
        </div>
    );
}

export default function UniversitySlider({ universities, onCardClick, t }) {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const Card = useMemo(() => UniversityCard, []);
    const MobileCard = useMemo(() => MobileUniversityCard, []);

    return isMobile ? (
        <MobileSlider universities={universities} onCardClick={onCardClick} MobileCard={MobileCard} t={t} />
    ) : (
        <DesktopGrid universities={universities} onCardClick={onCardClick} Card={Card} t={t} />
    );
}