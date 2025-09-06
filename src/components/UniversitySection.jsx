import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import UniversitySlider from './UniversitySlider';


// University data with the same content as before
const universities = [
    {
        id: 1,
        name: "Westminster International University in Tashkent",
        acronym: "WIUT",
        mainImage: "https://www.wiut.uz/images/2023/12/27/--2023-12-27t102647.053.png",
        type: ["Private", "International"],
        description: "Westminster International University in Tashkent (WIUT) is the first international university in Uzbekistan, established in 2002 in partnership with the University of Westminster (London, UK).",
        images: [
            "https://www.wiut.uz/images/gallery/WIUT8696.jpg",
            "https://www.wiut.uz/images/gallery/WIUT9678.jpg",
            "https://www.wiut.uz/images/gallery/DSC06067.jpg",

        ]
    },
    {
        id: 2,
        name: "Inha University in Tashkent",
        acronym: "IUT",
        type: ["Private", "International"],
        mainImage: "https://inha.uz/wp-content/uploads/2021/08/07-32-43.jpg",
        description: "Inha University in Tashkent (IUT) is a university specializing in IT education and research, established in 2014 in partnership with Inha University in South Korea.",
        images: [
            "https://inha.uz/wp-content/uploads/2021/06/iut-stadium-14-1-1024x683.jpg",
            "https://inha.uz/wp-content/uploads/2021/06/iut-stadium-15-1024x683.jpg",
            "https://inha.uz/wp-content/uploads/2021/06/iut-stadium-19-1-1024x683.jpg",
            "https://inha.uz/wp-content/uploads/2021/06/iut-class-21.jpg"
        ]
    },
    {
        id: 3,
        name: "Tashkent University of Information Technologies",
        acronym: "TUIT",
        type: ["Public", "Technical"],
        mainImage: "https://static.tuit.uz/crop/3/0/1200__95_3032359972.jpg",
        description: "Tashkent University of Information Technologies (TUIT) is one of the leading technical universities in Uzbekistan specializing in IT, telecommunications, and electronics.",
        images: [
            "https://admission.tuit.uz/assets/img/update1/normal/video_2.jpg",
            "https://via.placeholder.com/800x600?text=TUIT+Lecture+Hall",
            "https://via.placeholder.com/800x600?text=TUIT+Technology+Center"
        ]
    },
    {
        id: 4,
        name: "Management Development Institute of Singapore in Tashkent",
        acronym: "MDIST",
        type: ["Private", "Business", "International"],
        mainImage: "https://via.placeholder.com/400x300?text=MDIST",
        description: "MDIST offers quality education in business and management through partnership with MDIS Singapore.",
        images: [
            "https://via.placeholder.com/800x600?text=MDIST+Building",
            "https://via.placeholder.com/800x600?text=MDIST+Students",
            "https://via.placeholder.com/800x600?text=MDIST+Event"
        ]
    },
    {
        id: 5,
        name: "Turin Polytechnic University in Tashkent",
        acronym: "TTPU",
        type: ["Private", "Engineering", "International"],
        mainImage: "https://via.placeholder.com/400x300?text=TTPU",
        description: "Turin Polytechnic University in Tashkent is the first Italian university in Central Asia offering engineering programs.",
        images: [
            "https://via.placeholder.com/800x600?text=TTPU+Campus",
            "https://via.placeholder.com/800x600?text=TTPU+Lab",
            "https://via.placeholder.com/800x600?text=TTPU+Students"
        ]
    },
    {
        id: 6,
        name: "National University of Uzbekistan",
        acronym: "NUUz",
        type: ["Public"],
        mainImage: "https://via.placeholder.com/400x300?text=NUUz",
        description: "The National University of Uzbekistan is the oldest and largest university in Uzbekistan with a comprehensive curriculum.",
        images: [
            "https://via.placeholder.com/800x600?text=NUUz+Main+Building",
            "https://via.placeholder.com/800x600?text=NUUz+Library",
            "https://via.placeholder.com/800x600?text=NUUz+Campus"
        ]
    }
];

// Modal Component with Gallery
function UniversityModal({ university, isOpen, onClose, t }) {
    const [currentImage, setCurrentImage] = useState(0);


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

// Main University Section Component
export default function UniversitySection({t}) {
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (university) => {
        setSelectedUniversity(university);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            document.body.style.overflow = ''; // Re-enable scrolling
        }, 300); // Wait for modal exit animation
    };

    return (
        <>
            <section className="universities-section section" id="universities">
                <div className="container">
                    <div className="section-header">
                        <motion.h2
                            className="section-title"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            viewport={{once: true}}
                        >
                            {t.universitiesSection.title}
                        </motion.h2>

                        <Link to="/universities" className="view-all-link">
                            {t.universitiesSection.viewAll}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>

                    <UniversitySlider
                        universities={universities}
                        onCardClick={handleOpenModal}
                        t={t}
                    />
                </div>
            </section>
            <UniversityModal
                university={selectedUniversity}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                t={t}
            />
        </>
    );
}

// Export universities data for use in other components
// eslint-disable-next-line react-refresh/only-export-components
export { universities };