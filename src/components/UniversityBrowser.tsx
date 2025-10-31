import React, { useState } from 'react';
import type { University, TranslationSet } from '../types';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
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

interface UniversityBrowserProps {
    universities: University[];
    onSelect: (uniId: string) => void; // <-- Prop остался
    t: TranslationSet;
}

export const UniversityBrowser: React.FC<UniversityBrowserProps> = ({ universities, onSelect, t }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUniversities = universities.filter(uni =>
        uni.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        // УБРАЛИ 'min-h-screen', `animate`, `initial`, `exit`
        // Добавили отступы 'py-16'
        <motion.section
            className="w-full max-w-5xl mx-auto p-6 py-16"
            variants={sectionVariants}
        >
            <motion.div variants={itemVariants} className="text-center">
                <h2 className="section-title mb-4">{t.uniBrowserTitle}</h2>
                <p className="text-lg text-muted-foreground mb-8">{t.uniBrowserSubtitle}</p>

                <input
                    type="text"
                    placeholder={t.uniBrowserSearchPlaceholder}
                    className="w-full max-w-lg p-4 mb-12 text-lg
                               bg-transparent border-2 border-border-color
                               focus:outline-none focus:border-foreground transition-all"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
                {filteredUniversities.map((uni) => (
                    <Card
                        key={uni.id}
                        onClick={() => onSelect(uni.id)}
                        className="p-4 flex flex-col items-center justify-center text-center cursor-pointer"
                    >
                        {uni.logo && <img src={uni.logo} alt={`${uni.name} logo`} className="w-20 h-20 mb-4 rounded-full object-contain bg-white p-1"/>}
                        <h3 className="text-md font-bold uppercase">{uni.name}</h3>
                    </Card>
                ))}
            </motion.div>
        </motion.section>
    );
};