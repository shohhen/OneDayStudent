import React from 'react';
import type { TranslationSet } from '../types';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { FaRocket, FaFlask, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.15,
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] }
    },
};

interface AdvantagesProps {
    onNext: () => void; // <-- Изменился prop
    t: TranslationSet;
}

export const Advantages: React.FC<AdvantagesProps> = ({ onNext, t }) => {
    const advantages = [
        { icon: <FaRocket size={24} />, title: t.advantage1Title, description: t.advantage1Desc },
        { icon: <FaFlask size={24} />, title: t.advantage2Title, description: t.advantage2Desc },
        { icon: <FaUserFriends size={24} />, title: t.advantage3Title, description: t.advantage3Desc },
    ];

    return (
        // УБРАЛИ 'min-h-screen', `animate`, `initial`, `exit`
        // Добавили отступы 'py-16'
        <motion.section
            className="w-full flex flex-col justify-center p-6 py-16"
            variants={sectionVariants}
            // `initial` и `animate` теперь контролируются родителем (LandingPage)
        >
            <motion.h2
                variants={itemVariants}
                className="section-title text-center mb-16"
            >
                {t.advantagesTitle}
            </motion.h2>

            <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto w-full"
            >
                {advantages.map((adv, index) => (
                    <Card key={index} className="p-8">
                        <div className="flex items-center gap-4 mb-5">
                            {adv.icon}
                            <h3 className="text-2xl font-bold font-display uppercase">{adv.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{adv.description}</p>
                    </Card>
                ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
                <Button onClick={onNext} variant="primary" className="text-lg">
                    {t.advantagesButton}
                </Button>
            </motion.div>
        </motion.section>
    );
};