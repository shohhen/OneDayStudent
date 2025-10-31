import React from 'react';
import type { TranslationSet } from '../types';
import { motion } from 'framer-motion';

interface CalculatingProps {
    t: TranslationSet;
}

export const Calculating: React.FC<CalculatingProps> = ({ t }) => (
    <motion.div
        className="w-full min-h-screen flex flex-col justify-center items-center text-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {/* Простой "бруталистский" спиннер */}
        <div className="w-16 h-16 border-4 border-foreground border-t-transparent rounded-full animate-spin mx-auto"
             style={{ borderTopColor: 'transparent' }}></div>

        <h2 className="section-title mt-8">{t.calculatingTitle}</h2>
        <p className="text-muted-foreground mt-2 text-lg">{t.calculatingSubtitle}</p>
    </motion.div>
);