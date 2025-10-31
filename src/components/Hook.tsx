import React from 'react';
import type { TranslationSet } from '../types';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

// Конфигурации анимаций (stagger) остаются здесь
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
    },
};

interface HookProps {
    onNext: () => void; // <-- Изменился prop
    t: TranslationSet;
}

export const Hook: React.FC<HookProps> = ({ onNext, t }) => {
    return (
        // УБРАЛИ `exit` анимацию
        // УБРАЛИ `min-h-screen` и добавили `pt-32 pb-16` (отступы)
        <motion.div
            className="w-full min-h-screen flex flex-col justify-center items-center text-center p-6 pt-32 pb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Эта секция (первая) анимируется сразу
        >
            <motion.div variants={itemVariants} className="mb-4">
                <h1 className="kinetic-text">
                    Bir Kun
                </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
                <h1 className="kinetic-text kinetic-text-stroke">
                    Talaba
                </h1>
            </motion.div>

            <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
                {t.hookSubtitle}
            </motion.p>

            <motion.div variants={itemVariants}>
                {/* Кнопка теперь скроллит */}
                <Button onClick={onNext} variant="primary" className="text-lg md:text-xl">
                    {t.hookButton}
                </Button>
            </motion.div>
        </motion.div>
    );
};