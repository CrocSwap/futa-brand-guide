import { useState } from 'react';
import styles from './FutaSection9.module.css'
export default function FutaSection9() {
    const [copiedText, setCopiedText] = useState(null);

    const handleCopy = (hash) => {
        navigator.clipboard.writeText(hash).then(() => {
            setCopiedText(hash);
            setTimeout(() => setCopiedText(null), 3000); // Reset after 3 seconds
        });
    };

    return (

        <div className={styles.container}>
            <h2>Core colors</h2>
            <div className={styles.content}>
                {[
                    { label: 'ACCENT1', hash: 'AACFD1' },
                    { label: 'ACCENT2', hash: '5C6F72' },
                    { label: 'DARK', hash: '0D0F13' },
                ].map((color, index) => (
                    <div
                        key={index}
                        className={`${styles.square} ${styles[`square${index + 1}`]}`}
                        onClick={() => handleCopy(color.hash)}
                    >
                        <h3>{color.label}</h3>
                        <h3>{color.hash}</h3>
                        {copiedText === color.hash && (
                            <span className={styles.copiedMessage}>Copied to clipboard!</span>
                        )}
                    </div>
                ))}
                
            </div>
            </div>

       
    )
}