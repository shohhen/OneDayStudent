import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { universities } from '../components/UniversitySection';
import LanguageSwitch from "../components/LanguageSwitch.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";

// University Card Component
function UniversityCard({ university, onClick, t }) {

    return (
        <motion.div
            className="university-card"
            onClick={onClick}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
            }}
        >
            <div className="card-image">
                <img src={university.mainImage} alt={university.name} />
            </div>
            <div className="card-content">
                <h3>{university.acronym}</h3>
                <p>{t.universities[university.id].name}</p>
                <motion.button
                    className="card-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {t.common.learnMore}
                </motion.button>
            </div>
        </motion.div>
    );
}

// Modal Component with Gallery
function UniversityModal({ university, isOpen, onClose, t }) {
    const [currentImage, setCurrentImage] = useState(0);

    if (!university) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}>×</button>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {t.universities[university.id].name} ({university.acronym})
                        </motion.h2>

                        <motion.div
                            className="modal-gallery"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={university.images[currentImage]}
                                    alt={`${t.universities[university.id].name} ${currentImage + 1}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </AnimatePresence>

                            <div className="gallery-nav">
                                {university.images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={currentImage === index ? "active" : ""}
                                        onClick={() => setCurrentImage(index)}
                                    ></button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.p
                            className="modal-description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {t.universities[university.id].description}
                        </motion.p>

                        <motion.div
                            className="modal-thumbnails"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {university.images.map((image, index) => (
                                <motion.img
                                    key={index}
                                    src={image}
                                    alt={`${t.universities[university.id].name} ${index + 1}`}
                                    onClick={() => setCurrentImage(index)}
                                    className={currentImage === index ? "active" : ""}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// University Filter Component
function UniversityFilter({ onFilterChange, t }) {

    return (
        <div className="filter-controls">
            <div className="search-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    type="text"
                    placeholder={t.universitiesPage.searchPlaceholder}
                    onChange={(e) => onFilterChange({ search: e.target.value })}
                />
            </div>
            <div className="filter-dropdown">
                <select onChange={(e) => onFilterChange({ type: e.target.value })}>
                    <option value="">{t.universitiesPage.allTypes}</option>
                    <option value="international">{t.universitiesPage.international}</option>
                    <option value="national">{t.universitiesPage.national}</option>
                    <option value="private">{t.universitiesPage.private}</option>
                    <option value="private">{t.universitiesPage.public}</option>
                </select>
            </div>
        </div>
    );
}

// Main Universities Page Component
export default function UniversitiesPage({t, lang, setLang}) {
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState({ search: '', type: '' });

    const handleOpenModal = (university) => {
        setSelectedUniversity(university);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    };

    const handleFilterChange = (newFilter) => {
        setFilters(prev => ({ ...prev, ...newFilter }));
    };

    // Apply filters to universities
    const filteredUniversities = universities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            uni.acronym.toLowerCase().includes(filters.search.toLowerCase());

        // This is a placeholder - you would need actual type data in your university objects
        const matchesType = !filters.type || uni.type === filters.type;

        return matchesSearch && matchesType;
    });

    return (
        <>
            <header className="header">
                <div className="container header-inner">
                    <div className="brand">
                        <Link to="/" className="back-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5"></path>
                                <path d="M12 19l-7-7 7-7"></path>
                            </svg>
                        </Link>
                        <span className="logo" aria-hidden>🎓</span>
                        <span>{t.brand}</span>
                    </div>
                    <div className="header-inner">
                        <LanguageSwitch lang={lang} onChange={setLang}/>
                        <ThemeToggle/>
                    </div>
                </div>
            </header>

            <main>
                <section className="universities-page">
                    <div className="container">
                        <motion.h1
                            className="page-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {t.universitiesPage.title}
                        </motion.h1>

                        <motion.p
                            className="page-description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {t.universitiesPage.description}
                        </motion.p>

                        <UniversityFilter onFilterChange={handleFilterChange}  t={t}/>

                        <motion.div
                            className="universities-grid full-list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {filteredUniversities.length > 0 ? (
                                filteredUniversities.map((university) => (
                                    <UniversityCard
                                        key={university.id}
                                        university={university}
                                        onClick={() => handleOpenModal(university)}
                                        t={t}
                                    />
                                ))
                            ) : (
                                <div className="no-results">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                    <p>{t.universitiesPage.noResults}</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>
            </main>

            <UniversityModal
                university={selectedUniversity}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                t={t}
            />
        </>
    );
}