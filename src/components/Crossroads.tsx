import React from 'react';
import type { TranslationSet } from '../types';
import { Card } from './ui/Card';
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

interface CrossroadsProps {
    onSelectPath: (path: 'discovery' | 'researcher') => void; // <-- Prop остался
    t: TranslationSet;
}

export const Crossroads: React.FC<CrossroadsProps> = ({ onSelectPath, t }) => {
    return (
        // УБРАЛИ 'min-h-screen', `animate`, `initial`, `exit`
        // Добавили отступы 'py-16'
        <motion.div
            className="w-full flex flex-col justify-center items-center text-center p-6 py-16"
            variants={sectionVariants}
        >
            <motion.h1 variants={itemVariants} className="section-title mb-16">
                {t.crossroadsTitle}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <motion.div variants={itemVariants}>
                    <Card
                        onClick={() => onSelectPath('discovery')}
                        className="p-8 cursor-pointer h-full flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="kinetic-text kinetic-text-stroke text-4xl sm:text-6xl md:text-8xl">
                                {t.discoveryPathTitle}
                            </h2>
                            <p className="text-muted-foreground mt-4 text-lg">{t.discoveryPathSubtitle}</p>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card
                        onClick={() => onSelectPath('researcher')}
                        variant="secondary"
                        className="p-8 cursor-pointer h-full flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="kinetic-text kinetic-text-stroke text-4xl sm:text-6xl md:text-8xl">
                                {t.researcherPathTitle}
                            </h2>
                            <p className="text-muted-foreground mt-4 text-lg">{t.researcherPathSubtitle}</p>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
};