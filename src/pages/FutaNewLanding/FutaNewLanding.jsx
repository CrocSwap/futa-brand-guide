import { useCallback, useEffect, useRef, useState } from 'react';

import FadingTextGrid from '../../animations/FadingTextGrid';
import Footer from '../../components/footer/Footer';
import FutaSection1 from '../FutaSection1';
import FutaSection10 from '../FutaSection10/FutaSection10';
import FutaSection11 from '../FutaSection11/FutaSection11';
import FutaSection12 from '../FutaSection12/FutaSection12';
import FutaSection2 from '../FutaSection2';
import FutaSection3 from '../FutaSection3';
import FutaSection4 from '../FutaSection4';
import FutaSection5 from '../FutaSection5';
import FutaSection6 from '../FutaSection6';
import FutaSection7 from '../FutaSection7';
import FutaSection8 from '../FutaSection8';
import FutaSection9 from '../FutaSection9/FutaSection9';
import styles from './FutaNewLanding.module.css';

const INITIAL_DELAY = 7000;
const TOTAL_SECTIONS = 5;

export default function FutaNewLanding() {
    const [activeSection, setActiveSection] = useState(0);
    const [showMainContent, setShowMainContent] = useState(false);
    const sectionsRef = useRef(
        Array(TOTAL_SECTIONS).fill(null),
    );
   // Also modify the scrollToSection to update activeSection immediately
   const scrollToSection = useCallback((index) => {
    setActiveSection(index); // Update active section immediately
    sectionsRef.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}, []);

    // Memoized navigation functions
    const navigateToNextSection = useCallback(() => {
        const nextSection = (activeSection + 1) % TOTAL_SECTIONS;
        setActiveSection(nextSection);
        scrollToSection(nextSection);
    }, [activeSection, scrollToSection]);

    const navigateToPreviousSection = useCallback(() => {
        const previousSection =
            activeSection === 0 ? TOTAL_SECTIONS - 1 : activeSection - 1;
        setActiveSection(previousSection);
        scrollToSection(previousSection);
    }, [activeSection, scrollToSection]);

    const handleScroll = useCallback(() => {
        // Function to determine which section is most in view
        const getCurrentSection = () => {
            const viewportHeight = window.innerHeight;
            // const scrollTop = window.scrollY;

            let maxVisibility = 0;
            let mostVisibleIndex = 0;

            sectionsRef.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const visibleHeight =
                        Math.min(rect.bottom, viewportHeight) -
                        Math.max(rect.top, 0);
                    const visibility = visibleHeight / viewportHeight;

                    if (visibility > maxVisibility) {
                        maxVisibility = visibility;
                        mostVisibleIndex = index;
                    }
                }
            });

            return mostVisibleIndex;
        };

        // Direct scroll event handler
        const onScroll = () => {
            const currentSection = getCurrentSection();
            setActiveSection(currentSection);
        };

        // Add scroll event listener
        window.addEventListener('scroll', onScroll, { passive: true });

        // Also keep the IntersectionObserver for backup
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.reduce(
                    (max, entry) => {
                        return entry.intersectionRatio >
                            (max?.intersectionRatio || 0)
                            ? entry
                            : max;
                    },
                    null ,
                );

                if (visibleEntry?.isIntersecting) {
                    const index = sectionsRef.current.findIndex(
                        (section) => section === visibleEntry.target,
                    );
                    if (index !== -1) {
                        setActiveSection(index);
                    }
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                rootMargin: '-50% 0px -50% 0px',
            },
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        };
    }, []);

 
    // Memoized keyboard handler
    const handleKeyDown = useCallback(
        (event) => {
            switch (event.key) {
                case 'Enter':
                    if (!showMainContent) {
                        setShowMainContent(true);
                    } 
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    event.preventDefault();
                    navigateToNextSection();
                    break;
                case 'ArrowUp':
                case 'ArrowLeft':
                    event.preventDefault();
                    navigateToPreviousSection();
                    break;
            }
        },
        [
            showMainContent,
            navigateToNextSection,
            navigateToPreviousSection,
        ],
    );

    // Event listeners setup
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        const cleanup = handleScroll();
        return cleanup;
    }, [handleScroll]);

    // Initial delay for showing main content
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMainContent(true);
        }, INITIAL_DELAY);
        return () => clearTimeout(timer);
    }, []);

    // Sections configuration
    const sections = [
        <FutaSection1 key='section1' />,
        <FutaSection2 key='section2' />,
        <FutaSection3 key='section3' />,
        <FutaSection4 key='section4' />,
        <FutaSection5 key='section5' />,
        <FutaSection6 key='section6' />,
        <FutaSection7 key='section7' />,
        <FutaSection8 key='section8' />,
        <FutaSection9 key='section9' />,
        <FutaSection10 key='section10' />,
        <FutaSection11 key='section11' />,
        <FutaSection12 key='section12' />,
    ];

    if (!showMainContent ) {
        return <FadingTextGrid setShowMainContent={setShowMainContent} />;
    }

    return (
        <div className={styles.container}>
            {sections.map((SectionComponent, index) => (
                <div
                    key={index}
                    className={styles.content}
                    ref={(el) => (sectionsRef.current[index] = el)}
                >
                    {SectionComponent}
                </div>
            ))}
            <Footer
                scrollToSection={scrollToSection}
                activeSection={activeSection}
            />
        </div>
    );
}
