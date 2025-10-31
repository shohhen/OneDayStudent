import React from 'react';
import type { TranslationSet } from '../types';
import { motion } from 'framer-motion';

interface ThankYouProps {
    t: TranslationSet;
}

export const ThankYou: React.FC<ThankYouProps> = ({ t }) => (
    <motion.div
        className="w-full min-h-screen flex flex-col justify-center items-center text-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <h1 className="kinetic-text">{t.thankYouTitle}</h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mt-4">{t.thankYouSubtitle}</p>
    </motion.div>
);