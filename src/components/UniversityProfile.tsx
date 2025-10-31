import React from 'react';
import type { University, TranslationSet } from '../types';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Конфигурация для появления элементов
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
};// <-- Более чистая иконка

interface UniversityProfileProps {
    university: University;
    onBook: (uniId: string) => void;
    onBack: () => void;
    t: TranslationSet;
}

export const UniversityProfile: React.FC<UniversityProfileProps> = ({ university, onBook, onBack, t }) => {
    const price = "50,000 UZS";

    return (
        <motion.div
            className="w-full max-w-4xl mx-auto p-6 pt-32 min-h-screen"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <motion.div variants={itemVariants} className="text-center">
                {university.logo && <img src={university.logo} alt={`${university.name} logo`} className="w-24 h-24 mx-auto mb-6 rounded-full object-contain bg-white p-1"/>}
                <h1 className="section-title mb-4">{t.experienceTitle(university.name)}</h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.experienceOfferText(price)}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Card className="p-8 mb-8 text-left">
                    <h3 className="section-title text-3xl mb-6">{t.whatsIncludedTitle}</h3>
                    <ul className="space-y-3 text-lg text-foreground uppercase font-bold">
                        <li className="flex items-center gap-3">✓ {t.whatsIncluded1}</li>
                        <li className="flex items-center gap-3">✓ {t.whatsIncluded2}</li>
                        <li className="flex items-center gap-3">✓ {t.whatsIncluded3}</li>
                    </ul>
                </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Card className="p-8 italic mb-8 text-center">
                    <p className="text-xl">"{t.studentTestimonial}"</p>
                    <p className="font-bold text-base mt-4 not-italic text-muted-foreground uppercase">{t.testimonialAuthor}</p>
                </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
                <Button onClick={() => onBook(university.id)} variant="primary" className="w-full max-w-md text-lg">
                    {t.experienceBookingButton(university.name)}
                </Button>
            </motion.div>
        </motion.div>
    );
};