import PropTypes from 'prop-types'; // Import PropTypes for validation
import { useEffect, useState } from 'react';
import styles from './FadingText.module.css';

const FadingText = ({
    text,
    fadeInDelay = 0,
    fadeInTime = 1000,
    fadeOutDelay = 0,
    fadeOutTime = 1000,
    color = '#AACFD1', // Default color
    fontSize = '24px', // Default font size
}) => {
    const [isFadingIn, setIsFadingIn] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setIsFadingIn(true);
        }, fadeInDelay);

        const fadeOutTimer = setTimeout(
            () => {
                setIsFadingIn(false);
            },
            fadeInDelay + fadeInTime + fadeOutDelay,
        );

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
        };
    }, [fadeInDelay, fadeInTime, fadeOutDelay, fadeOutTime]);

    return (
        <div
            className={styles.fadingText}
            style={{
                opacity: isFadingIn ? 1 : 0,
                transitionDuration: `${isFadingIn ? fadeInTime : fadeOutTime}ms`,
                color: color,
                fontSize: fontSize,
            }}
        >
            {text}
        </div>
    );
};

// Prop types for validation
FadingText.propTypes = {
    text: PropTypes.string.isRequired,
    fadeInDelay: PropTypes.number,
    fadeInTime: PropTypes.number,
    fadeOutDelay: PropTypes.number,
    fadeOutTime: PropTypes.number,
    color: PropTypes.string,
    fontSize: PropTypes.string,
};

export default FadingText;
