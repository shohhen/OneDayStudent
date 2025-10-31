import React from 'react';
import type { TranslationSet, University } from '../types';
import { Button } from './ui/Button';
import { Card } from "./ui/Card";
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
};

interface ResultsProps {
    recommendations: University[];
    onBook: (uniId: string) => void;
    t: TranslationSet;
}

export const Results: React.FC<ResultsProps> = ({ recommendations, onBook, t }) => {
    if (!recommendations || recommendations.length === 0) {
        return (
            <div className="text-center p-6 pt-32 min-h-screen">
                <h2 className="section-title">No recommendations found.</h2>
                <p className="text-muted-foreground">Please try the quiz again.</p>
            </div>
        );
    }

    const topMatch = recommendations[0];
    const otherMatches = recommendations.slice(1);

    return (
        <motion.div
            className="w-full max-w-5xl mx-auto p-6 pt-32 min-h-screen"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <motion.div variants={itemVariants} className="text-center">
                <h2 className="section-title">{t.resultsTitle}</h2>
                <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-lg">{t.resultsSubtitle}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="my-12">
                <Card className="p-8 text-center border-2 border-foreground">
                    <div className="text-lg font-bold mb-3 uppercase" style={{ color: 'var(--foreground)' }}>
                        {t.topMatch}
                    </div>
                    <h3 className="section-title text-4xl sm:text-6xl">{topMatch.name}</h3>
                    <p className="text-muted-foreground mt-4 text-lg">"{topMatch.reason}"</p>
                    <Button
                        onClick={() => onBook(topMatch.id)}
                        variant="primary"
                        className="mt-6 text-lg"
                    >
                        {t.experienceBookingButton(topMatch.name)}
                    </Button>
                </Card>
            </motion.div>

            {otherMatches.length > 0 && (
                <motion.div variants={itemVariants} className="text-center">
                    <h3 className="section-title text-3xl mb-8">Other Great Matches</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherMatches.map((uni) => (
                            <Card key={uni.id} className="p-6 h-full flex flex-col text-center">
                                <div className="flex-grow">
                                    <h4 className="text-2xl font-bold font-display uppercase">{uni.name}</h4>
                                    <p className="text-muted-foreground mt-2 text-sm">"{uni.reason}"</p>
                                </div>
                                <Button
                                    onClick={() => onBook(uni.id)}
                                    variant="secondary"
                                    className="mt-4 w-full"
                                >
                                    Book Experience
                                </Button>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};