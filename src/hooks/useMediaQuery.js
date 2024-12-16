import { useEffect, useState } from 'react';

function useMediaQuery(query) {
    const getMatches = (query) => {
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    };

    const [matches, setMatches] = useState(getMatches(query));

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        const handleChange = () => {
            setMatches(matchMedia.matches);
        };

        // Trigger initial value
        handleChange();

        // Add listener
        if (matchMedia.addEventListener) {
            matchMedia.addEventListener('change', handleChange);
        } else {
            matchMedia.addListener(handleChange); // Fallback for older browsers
        }

        // Cleanup listener
        return () => {
            if (matchMedia.removeEventListener) {
                matchMedia.removeEventListener('change', handleChange);
            } else {
                matchMedia.removeListener(handleChange); // Fallback for older browsers
            }
        };
    }, [query]); // Query is a dependency here

    return matches;
}

export default useMediaQuery;
