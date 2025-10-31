import React, { useRef } from 'react';
import type { TranslationSet, University } from '../types';
import { motion } from 'framer-motion';

// Импортируем наши "секции"
import { Hook } from './Hook';
import { Advantages } from './Advantages';
import { Crossroads } from './Crossroads';
import { UniversityBrowser } from './UniversityBrowser';

interface LandingPageProps {
    t: TranslationSet;
    onStartQuiz: () => void;
    onSelectUniversity: (uniId: string) => void;
    universities: University[];
}

// Конфиг анимации для "оберток" секций
// Секция появляется, когда она попадает в зону видимости
const sectionWrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
};

export const LandingPage: React.FC<LandingPageProps> = ({
                                                            t,
                                                            onStartQuiz,
                                                            onSelectUniversity,
                                                            universities
                                                        }) => {

    // Создаем "Ref" (якоря) для каждой секции, чтобы к ним можно было скроллить
    const advantagesRef = useRef<HTMLElement>(null);
    const crossroadsRef = useRef<HTMLElement>(null);
    const browserRef = useRef<HTMLElement>(null);

    // Функция для плавного скролла
    const scrollTo = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        // AnimatePresence не нужна, так как это единая страница
        <div className="w-full">
            {/* Каждая секция обернута в motion.section
              - initial/whileInView/viewport: Анимирует секцию при ее появлении
            */}

            {/* --- СЕКЦИЯ HOOK --- */}
            <motion.section
                className="w-full"
                initial="hidden"
                animate="visible" // Первая секция видна сразу
                variants={sectionWrapperVariants}
            >
                <Hook t={t} onNext={() => scrollTo(advantagesRef)} />
            </motion.section>

            {/* --- СЕКЦИЯ ADVANTAGES --- */}
            <motion.section
                ref={advantagesRef} // Привязываем "якорь"
                className="w-full"
                initial="hidden"
                whileInView="visible" // Анимировать при скролле
                viewport={{ once: true, amount: 0.2 }} // 1 раз, при 20% видимости
                variants={sectionWrapperVariants}
            >
                <Advantages t={t} onNext={() => scrollTo(crossroadsRef)} />
            </motion.section>

            {/* --- СЕКЦИЯ CROSSROADS --- */}
            <motion.section
                ref={crossroadsRef} // Привязываем "якорь"
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionWrapperVariants}
            >
                <Crossroads
                    t={t}
                    onSelectPath={(path) => {
                        if (path === 'discovery') {
                            onStartQuiz(); // Запускаем Квиз (меняем AppState)
                        } else {
                            scrollTo(browserRef); // Скроллим к Браузеру
                        }
                    }}
                />
            </motion.section>

            {/* --- СЕКЦИЯ UNIVERSITY BROWSER --- */}
            <motion.section
                ref={browserRef} // Привязываем "якорь"
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionWrapperVariants}
            >
                <UniversityBrowser
                    t={t}
                    universities={universities}
                    onSelect={onSelectUniversity}
                />
            </motion.section>
        </div>
    );
};